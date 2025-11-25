# Deployment Guide for Vercel

## Prerequisites
- Vercel account (free or paid)
- GitHub repository connected (optional but recommended)
- Supabase project credentials

## Environment Variables

Before deploying, you need to configure the following environment variables in Vercel:

1. **VITE_SUPABASE_URL**: Your Supabase project URL
2. **VITE_SUPABASE_PUBLISHABLE_KEY**: Your Supabase anonymous/public key
3. **VITE_SUPABASE_PROJECT_ID**: Your Supabase project ID

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository

2. **Configure Project**
   - Framework Preset: `Vite`
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Set Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add the three Supabase variables (see above)
   - Make sure to add them for all environments (Production, Preview, Development)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
4. **Set Environment Variables**
   ```bash
   vercel env add VITE_SUPABASE_URL
   vercel env add VITE_SUPABASE_PUBLISHABLE_KEY
   vercel env add VITE_SUPABASE_PROJECT_ID
   ```

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Post-Deployment Configuration

### Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Supabase Edge Functions
Note: Supabase Edge Functions are deployed separately through Supabase, not Vercel. Make sure your edge functions are deployed:

```bash
# In your project root
npx supabase functions deploy
```

### CORS Configuration
If you're using a custom domain, update your Supabase CORS settings:
1. Go to Supabase Dashboard
2. Settings → API
3. Add your Vercel domain to allowed origins

## Troubleshooting

### Build Fails
- Check that all environment variables are set correctly
- Verify package.json has correct build scripts
- Check build logs for specific errors

### 404 on Routes
- Ensure `vercel.json` is present with correct rewrites configuration
- SPA routing should work automatically with the provided configuration

### Environment Variables Not Working
- Ensure variables start with `VITE_` prefix
- Redeploy after adding environment variables
- Check that variables are added for the correct environment

### Supabase Connection Issues
- Verify Supabase credentials are correct
- Check that Supabase project is not paused
- Ensure CORS is configured in Supabase

## Performance Optimization

### Caching
The provided `vercel.json` includes:
- Static assets cached for 1 year
- Security headers for all routes

### Image Optimization
Consider using Vercel's Image Optimization:
```jsx
import Image from 'next/image' // If migrating to Next.js
```

### Analytics
Enable Vercel Analytics:
1. Go to Project Settings → Analytics
2. Enable Web Analytics

## Security Checklist

- [ ] Environment variables are set correctly
- [ ] Supabase RLS policies are enabled
- [ ] CORS is configured properly
- [ ] Security headers are enabled (included in vercel.json)
- [ ] Rate limiting is configured in Supabase
- [ ] Admin routes require authentication

## Monitoring

### Vercel Dashboard
- Monitor deployments
- Check analytics
- View error logs

### Supabase Dashboard
- Monitor database usage
- Check API usage
- Review auth logs

## Automatic Deployments

With GitHub integration:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

Configure branch settings in Project Settings → Git

## Rollback

If you need to rollback:
1. Go to Deployments
2. Find the previous working deployment
3. Click "..." → Promote to Production

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Supabase Documentation](https://supabase.com/docs)

## Support

For issues:
- Vercel: support@vercel.com
- Supabase: support@supabase.io
- GitHub Issues: [Your Repository URL]
