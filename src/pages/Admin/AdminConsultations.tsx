import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar as CalendarIcon, Eye } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { useUserRole } from '@/hooks/useUserRole';

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  project: string;
  notes: string | null;
  date: string;
  start_time: string;
  end_time: string;
  status: string;
  admin_notes: string | null;
  created_at: string;
}

const AdminConsultations = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [projectFilter, setProjectFilter] = useState<string>('ALL');
  const { hasRole } = useUserRole();
  const canEdit = hasRole('EDITOR');

  useEffect(() => {
    loadBookings();
  }, []);

  useEffect(() => {
    filterBookings();
  }, [bookings, statusFilter, projectFilter]);

  const loadBookings = async () => {
    const { data, error } = await supabase
      .from('consultation_bookings')
      .select('*')
      .order('date', { ascending: true })
      .order('start_time', { ascending: true });

    if (error) {
      toast.error('Failed to load bookings');
      return;
    }

    setBookings(data || []);
  };

  const filterBookings = () => {
    let filtered = [...bookings];

    if (statusFilter !== 'ALL') {
      filtered = filtered.filter(b => b.status === statusFilter);
    }

    if (projectFilter !== 'ALL') {
      filtered = filtered.filter(b => b.project === projectFilter);
    }

    setFilteredBookings(filtered);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    if (!canEdit) {
      toast.error('You do not have permission to edit bookings');
      return;
    }

    const { error } = await supabase
      .from('consultation_bookings')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      toast.error('Failed to update status');
      return;
    }

    toast.success('Status updated');
    loadBookings();
  };

  const updateAdminNotes = async (id: string, notes: string) => {
    if (!canEdit) {
      toast.error('You do not have permission to edit bookings');
      return;
    }

    const { error } = await supabase
      .from('consultation_bookings')
      .update({ admin_notes: notes })
      .eq('id', id);

    if (error) {
      toast.error('Failed to update notes');
      return;
    }

    toast.success('Notes updated');
    loadBookings();
  };

  const uniqueProjects = Array.from(new Set(bookings.map(b => b.project)));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Consultation Bookings</h1>
        <p className="text-muted-foreground">Manage consultation requests and schedule confirmations</p>
      </div>

      <Tabs defaultValue="table" className="space-y-4">
        <TabsList>
          <TabsTrigger value="table">Table View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <Label>Status Filter</Label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Statuses</SelectItem>
                <SelectItem value="PENDING">Pending</SelectItem>
                <SelectItem value="CONFIRMED">Confirmed</SelectItem>
                <SelectItem value="CANCELLED">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <Label>Project Filter</Label>
            <Select value={projectFilter} onValueChange={setProjectFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Projects</SelectItem>
                {uniqueProjects.map(project => (
                  <SelectItem key={project} value={project}>{project}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="table" className="space-y-4">
          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">Date</th>
                  <th className="text-left p-4 font-semibold">Time</th>
                  <th className="text-left p-4 font-semibold">Name</th>
                  <th className="text-left p-4 font-semibold">Email</th>
                  <th className="text-left p-4 font-semibold">Project</th>
                  <th className="text-left p-4 font-semibold">Status</th>
                  <th className="text-left p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="border-t border-border">
                    <td className="p-4">{format(new Date(booking.date), 'MMM dd, yyyy')}</td>
                    <td className="p-4">{booking.start_time} - {booking.end_time}</td>
                    <td className="p-4">{booking.name}</td>
                    <td className="p-4">{booking.email}</td>
                    <td className="p-4">{booking.project}</td>
                    <td className="p-4">
                      <Select 
                        value={booking.status} 
                        onValueChange={(value) => updateStatus(booking.id, value)}
                        disabled={!canEdit}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PENDING">Pending</SelectItem>
                          <SelectItem value="CONFIRMED">Confirmed</SelectItem>
                          <SelectItem value="CANCELLED">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="p-4">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          setSelectedBooking(booking);
                          setDetailDialogOpen(true);
                        }}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredBookings.length === 0 && (
              <div className="p-8 text-center text-muted-foreground">
                No bookings found
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <div className="grid gap-4">
            {filteredBookings.map((booking) => (
              <div key={booking.id} className="border border-border rounded-lg p-4 flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3 flex flex-col items-center min-w-[80px]">
                  <CalendarIcon className="w-5 h-5 text-primary mb-1" />
                  <div className="text-sm font-semibold">{format(new Date(booking.date), 'MMM dd')}</div>
                  <div className="text-xs text-muted-foreground">{booking.start_time}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{booking.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      booking.status === 'CANCELLED' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{booking.project}</p>
                  <p className="text-sm">{booking.email}</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => {
                    setSelectedBooking(booking);
                    setDetailDialogOpen(true);
                  }}
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Consultation Booking Details</DialogTitle>
          </DialogHeader>
          
          {selectedBooking && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <p className="text-sm mt-1">{selectedBooking.name}</p>
                </div>
                <div>
                  <Label>Email</Label>
                  <p className="text-sm mt-1">{selectedBooking.email}</p>
                </div>
                <div>
                  <Label>Phone</Label>
                  <p className="text-sm mt-1">{selectedBooking.phone || 'Not provided'}</p>
                </div>
                <div>
                  <Label>Project</Label>
                  <p className="text-sm mt-1">{selectedBooking.project}</p>
                </div>
                <div>
                  <Label>Date</Label>
                  <p className="text-sm mt-1">{format(new Date(selectedBooking.date), 'MMMM dd, yyyy')}</p>
                </div>
                <div>
                  <Label>Time</Label>
                  <p className="text-sm mt-1">{selectedBooking.start_time} - {selectedBooking.end_time}</p>
                </div>
              </div>

              <div>
                <Label>Status</Label>
                <Select 
                  value={selectedBooking.status} 
                  onValueChange={(value) => {
                    updateStatus(selectedBooking.id, value);
                    setSelectedBooking({...selectedBooking, status: value as any});
                  }}
                  disabled={!canEdit}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PENDING">Pending</SelectItem>
                    <SelectItem value="CONFIRMED">Confirmed</SelectItem>
                    <SelectItem value="CANCELLED">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectedBooking.notes && (
                <div>
                  <Label>Client Notes</Label>
                  <p className="text-sm mt-1 bg-muted p-3 rounded">{selectedBooking.notes}</p>
                </div>
              )}

              <div>
                <Label>Admin Notes</Label>
                <Textarea
                  value={selectedBooking.admin_notes || ''}
                  onChange={(e) => setSelectedBooking({...selectedBooking, admin_notes: e.target.value})}
                  rows={4}
                  disabled={!canEdit}
                  className="mt-1"
                />
                {canEdit && (
                  <Button 
                    size="sm" 
                    className="mt-2"
                    onClick={() => updateAdminNotes(selectedBooking.id, selectedBooking.admin_notes || '')}
                  >
                    Save Notes
                  </Button>
                )}
              </div>

              <div className="text-xs text-muted-foreground">
                Submitted: {format(new Date(selectedBooking.created_at), 'MMM dd, yyyy HH:mm')}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminConsultations;