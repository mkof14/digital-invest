import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Chrome, Shield, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import OptimizedImage from '@/components/OptimizedImage';

const authSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const resetSchema = z.object({
  email: z.string().email('Invalid email address'),
});

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('signin');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSetupBanner, setShowSetupBanner] = useState(false);
  const [checkingSetup, setCheckingSetup] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const resetForm = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: '',
    },
  });

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      setIsAuthenticated(true);
      await checkSuperAdminExists();
    }
  };

  const checkSuperAdminExists = async () => {
    setCheckingSetup(true);
    try {
      const { data: superAdmins, error } = await supabase
        .from('user_roles')
        .select('id')
        .eq('role', 'SUPER_ADMIN')
        .limit(1);

      if (error) {
        console.error('Error checking super admin:', error);
        // If there's an error checking (might be RLS), don't show banner
        setShowSetupBanner(false);
      } else {
        // Show banner if no super admin exists
        setShowSetupBanner(!superAdmins || superAdmins.length === 0);
      }
    } catch (error) {
      console.error('Error in checkSuperAdminExists:', error);
      setShowSetupBanner(false);
    } finally {
      setCheckingSetup(false);
    }
  };

  const handleSignIn = async (values: z.infer<typeof authSchema>) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Signed in successfully',
      });

      setIsAuthenticated(true);
      await checkSuperAdminExists();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (values: z.infer<typeof authSchema>) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          emailRedirectTo: `${window.location.origin}/admin`,
        },
      });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Account created successfully. Please check your email to confirm.',
      });

      setActiveTab('signin');
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (values: z.infer<typeof resetSchema>) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
        redirectTo: `${window.location.origin}/admin`,
      });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Password reset email sent. Please check your inbox.',
      });

      resetForm.reset();
      setActiveTab('signin');
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/admin`,
        },
      });

      if (error) throw error;
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-4">
        {/* Setup Banner */}
        {isAuthenticated && showSetupBanner && !checkingSetup && (
          <Alert className="border-primary bg-primary/10">
            <Shield className="h-4 w-4" />
            <AlertTitle>Admin Setup Required</AlertTitle>
            <AlertDescription className="space-y-3">
              <p className="text-sm">
                No Super Admin has been configured yet. You can claim this role to set up the admin panel.
              </p>
              <Link to="/admin/setup">
                <Button size="sm" className="w-full gap-2">
                  Go to Admin Setup
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </AlertDescription>
          </Alert>
        )}

        <Card className="border border-border/50">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
            <OptimizedImage 
              src="/lovable-uploads/digital-invest-logo-new.png" 
              alt="Digital Invest Inc. authentication logo" 
              className="w-16 h-16 object-contain"
              showSkeleton={false}
            />
            </div>
            <CardTitle className="text-2xl">Admin Access</CardTitle>
            <CardDescription>Sign in to manage your investment platform</CardDescription>
          </CardHeader>
          <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
              <TabsTrigger value="reset">Reset</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSignIn)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="admin@digitalinvest.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Sign In
                  </Button>

                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full" 
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                  >
                    <Chrome className="mr-2 h-4 w-4" />
                    Sign in with Google
                  </Button>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value="signup">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="admin@digitalinvest.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Create Account
                  </Button>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value="reset">
              <Form {...resetForm}>
                <form onSubmit={resetForm.handleSubmit(handleResetPassword)} className="space-y-4">
                  <FormField
                    control={resetForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="admin@digitalinvest.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <p className="text-sm text-muted-foreground">
                    Enter your email address and we'll send you a link to reset your password.
                  </p>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Send Reset Link
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
