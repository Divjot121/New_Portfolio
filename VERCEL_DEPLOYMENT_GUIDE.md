# Vercel Deployment Guide - Deploy via GitHub

Complete step-by-step guide to deploy your portfolio to Vercel using GitHub integration.

---

## 🌟 Why Vercel?

- ✅ **Free hosting** for personal projects
- ✅ **Automatic deployments** on every git push
- ✅ **Free SSL certificate** (HTTPS)
- ✅ **Global CDN** for fast loading worldwide
- ✅ **Zero configuration** for React apps
- ✅ **Preview deployments** for every branch/PR
- ✅ **Custom domains** supported (free)
- ✅ **Built by Next.js team** - optimized for React

**Perfect for portfolios and personal websites!**

---

## 📋 Prerequisites

- ✅ GitHub account ([Sign up free](https://github.com/signup))
- ✅ Vercel account ([Sign up free](https://vercel.com/signup))
- ✅ Your portfolio code ready to deploy
- ✅ Git installed on your computer

---

## 🚀 Deployment Process (3 Steps - 10 minutes)

### Step 1: Push Code to GitHub
### Step 2: Connect GitHub to Vercel
### Step 3: Deploy!

---

## Step 1: Push Your Code to GitHub

### Option A: Using GitHub Desktop (Easiest)

#### 1.1 Download GitHub Desktop

- Download from: https://desktop.github.com/
- Install and sign in with your GitHub account

#### 1.2 Create Repository

1. Open GitHub Desktop
2. Click **File** → **New Repository**
3. Fill in details:
   - **Name**: `divjot-portfolio` (or your preferred name)
   - **Description**: "Personal portfolio website"
   - **Local Path**: Select `/app` directory
   - Check "Initialize with README": **No** (we already have one)
4. Click **Create Repository**

#### 1.3 Prepare Files for Git

Before committing, create `.gitignore` file:

```bash
cd /app
```

Create `.gitignore` in `/app/` root:

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
**/node_modules
**/.pnp
**/.pnp.js

# testing
**/coverage

# production
**/build
**/dist

# misc
**/.DS_Store
**/.env.local
**/.env.development.local
**/.env.test.local
**/.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Python
**/__pycache__
**/*.py[cod]
**/*$py.class
**/*.so
**/.Python
**/venv
**/ENV
**/env

# IDE
**/.vscode
**/.idea
**/*.swp
**/*.swo

# Logs
**/logs
**/*.log

# MongoDB
**/data/db

# OS
**/.DS_Store
**/Thumbs.db
```

#### 1.4 Commit and Push

1. In GitHub Desktop, you'll see all your files listed
2. Add commit message: "Initial commit - Portfolio website"
3. Click **Commit to main**
4. Click **Publish repository**
5. Choose:
   - Keep code **private** or make it **public** (your choice)
   - Uncheck "Keep this code private" if you want it public
6. Click **Publish repository**

✅ Your code is now on GitHub!

---

### Option B: Using Command Line (Terminal)

#### 1.1 Initialize Git Repository

```bash
cd /app

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"
```

#### 1.2 Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `divjot-portfolio`
3. Description: "Personal portfolio website"
4. Choose **Public** or **Private**
5. **Do not** initialize with README (we have one)
6. Click **Create repository**

#### 1.3 Push to GitHub

Copy the commands from GitHub (they'll look like this):

```bash
git remote add origin https://github.com/YOUR_USERNAME/divjot-portfolio.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

✅ Your code is now on GitHub!

---

## Step 2: Connect Vercel to GitHub

### 2.1 Sign Up / Login to Vercel

1. Go to https://vercel.com/signup
2. Click **Continue with GitHub**
3. Authorize Vercel to access your GitHub account
4. Complete your profile

### 2.2 Import Project

1. Once logged in, click **Add New** → **Project**
2. You'll see "Import Git Repository"
3. Find your `divjot-portfolio` repository
4. Click **Import**

---

## Step 3: Configure and Deploy

### 3.1 Configure Build Settings

Vercel will auto-detect it's a React app. Verify these settings:

**Framework Preset**: `Create React App`

**Build Settings**:
- **Build Command**: `cd frontend && yarn install && yarn build`
- **Output Directory**: `frontend/build`
- **Install Command**: `yarn install`

**Root Directory**: Leave as `.` (root)

### 3.2 Configure Environment Variables

Click **Environment Variables** and add:

```
Name: REACT_APP_BACKEND_URL
Value: https://your-project.vercel.app
```

**Note**: For static portfolio, this isn't strictly needed, but add it for consistency.

### 3.3 Deploy!

1. Review all settings
2. Click **Deploy**
3. Wait 2-3 minutes for build to complete
4. 🎉 **Your portfolio is live!**

You'll get a URL like: `https://divjot-portfolio.vercel.app`

---

## 🎨 Custom Domain Setup

### Option 1: Use Your Own Domain

#### Step 1: Add Domain in Vercel

1. Go to your project dashboard
2. Click **Settings** → **Domains**
3. Enter your domain: `yourdomain.com`
4. Click **Add**

#### Step 2: Configure DNS

Vercel will show you DNS records to add. Go to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.):

**For Root Domain (yourdomain.com)**:
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain**:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### Step 3: Wait for DNS Propagation

- Usually takes 10-60 minutes
- Can take up to 48 hours
- Check status at: https://dnschecker.org/

✅ SSL certificate is automatically provisioned!

---

### Option 2: Use Free Vercel Subdomain

Your project comes with a free subdomain:
- `your-project.vercel.app`
- You can keep this or add custom domain later

---

## 🔄 Automatic Deployments

### How It Works

Every time you push code to GitHub:
1. Vercel automatically detects the push
2. Builds your project
3. Deploys the new version
4. You get a deployment notification

### Making Updates

```bash
# Make your changes locally
# Then commit and push

git add .
git commit -m "Updated projects section"
git push origin main
```

✅ Vercel automatically deploys the new version!

### Preview Deployments

- Every **branch** gets its own preview URL
- Every **pull request** gets a preview
- Test changes before merging to main

---

## 📱 Project Structure for Vercel

Since your project has both frontend and backend, we need special configuration:

### Method 1: Deploy Frontend Only (Recommended for Portfolio)

Create `vercel.json` in **root** (`/app/`):

```json
{
  "buildCommand": "cd frontend && yarn install && yarn build",
  "outputDirectory": "frontend/build",
  "devCommand": "cd frontend && yarn start",
  "installCommand": "cd frontend && yarn install",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Method 2: Deploy Frontend + Backend (Advanced)

If you want to deploy both:

Create `vercel.json` in **root**:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    },
    {
      "src": "backend/server.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "backend/server.py"
    },
    {
      "src": "/(.*)",
      "dest": "frontend/$1"
    }
  ]
}
```

**Note**: For static portfolio, Method 1 is recommended.

---

## 🛠️ Build Configuration

### Update package.json for Vercel

In `/app/frontend/package.json`, ensure you have:

```json
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  }
}
```

### Environment Variables on Vercel

Add these in Vercel Dashboard → Settings → Environment Variables:

```
REACT_APP_BACKEND_URL=https://your-project.vercel.app
```

For different environments:
- **Production**: Your live domain
- **Preview**: Vercel preview URL
- **Development**: http://localhost:3000

---

## ⚡ Performance Optimization

### 1. Enable Edge Caching

Vercel automatically caches static assets on their global CDN.

### 2. Image Optimization

All images are already optimized (using Unsplash CDN).

### 3. Build Performance

In `vercel.json`, add:

```json
{
  "github": {
    "silent": true
  },
  "build": {
    "env": {
      "GENERATE_SOURCEMAP": "false"
    }
  }
}
```

This speeds up builds by skipping source maps in production.

---

## 🔍 Monitoring & Analytics

### Vercel Analytics (Free)

1. Go to your project dashboard
2. Click **Analytics** tab
3. Enable Web Analytics
4. Add to your `index.html`:

```html
<script defer src="https://cdn.vercel-insights.com/v1/script.js"></script>
```

### Custom Analytics

Already included in the portfolio:
- PostHog analytics configured
- Can add Google Analytics if needed

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Command failed: yarn build"**

**Solution 1**: Check build logs
```bash
# Test build locally first
cd /app/frontend
yarn build
```

**Solution 2**: Clear Vercel cache
- Go to Vercel Dashboard
- Settings → General
- Scroll to "Build & Development Settings"
- Click "Clear Cache"
- Redeploy

### Blank Page After Deploy

**Cause**: Usually related to routing

**Solution**: Ensure `vercel.json` has rewrites:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Environment Variables Not Working

**Solution**: 
1. Check variable names start with `REACT_APP_`
2. Redeploy after adding variables
3. Clear browser cache

### Images Not Loading

**Check**:
1. All image URLs are absolute (https://)
2. No localhost references
3. CORS is properly configured

### Custom Domain Not Working

**Check**:
1. DNS records are correct
2. Wait 24-48 hours for propagation
3. Try clearing DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

---

## 📊 Vercel Dashboard Features

### Deployments Tab
- View all deployments
- Roll back to previous versions
- View build logs

### Analytics Tab
- Page views
- Top pages
- Performance metrics

### Settings Tab
- Environment variables
- Custom domains
- Build settings
- Integrations

### Logs Tab
- Real-time function logs
- Error tracking

---

## 💰 Pricing (All Free for Portfolios!)

**Hobby Plan (Free)**:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ 100 build hours/month
- ✅ Custom domains
- ✅ SSL certificates
- ✅ Preview deployments
- ✅ Analytics

**More than enough for a portfolio!**

---

## 🔐 Security Best Practices

### 1. Environment Variables

Never commit sensitive data:
```bash
# ❌ Don't do this
git add .env

# ✅ Do this
# Add .env to .gitignore
```

### 2. HTTPS

Automatically enabled by Vercel (free SSL).

### 3. Security Headers

Add to `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 🚀 Deployment Checklist

Before deploying:

- [ ] Code is on GitHub
- [ ] `.gitignore` includes `node_modules`, `build`, `.env`
- [ ] All personal information updated
- [ ] All images loading correctly
- [ ] Social links working
- [ ] Tested locally with `yarn build`
- [ ] Environment variables noted (for Vercel)
- [ ] Custom domain ready (optional)

After deploying:

- [ ] Visit deployed URL
- [ ] Test all sections
- [ ] Check mobile responsiveness
- [ ] Verify images load
- [ ] Test all links
- [ ] Check browser console for errors
- [ ] Test on different browsers
- [ ] Share your portfolio! 🎉

---

## 🔄 Updating Your Portfolio

### Make Changes Locally

```bash
cd /app/frontend/src/components/sections

# Edit any file (e.g., Projects.jsx)
# Save your changes
```

### Test Locally

```bash
cd /app/frontend
yarn start
# Check changes at http://localhost:3000
```

### Deploy Changes

```bash
# Commit changes
git add .
git commit -m "Updated projects section"

# Push to GitHub
git push origin main
```

✅ Vercel automatically deploys in 2-3 minutes!

---

## 🌿 Branch Strategy

### Main Branch (Production)
```bash
git checkout main
# Make changes
git push origin main
```
→ Deploys to: `your-project.vercel.app`

### Development Branch (Preview)
```bash
git checkout -b dev
# Make changes
git push origin dev
```
→ Deploys to: `your-project-git-dev.vercel.app`

---

## 🎓 Advanced Features

### 1. Multiple Environments

Set different env variables for:
- **Production** (main branch)
- **Preview** (all other branches)
- **Development** (local)

### 2. Serverless Functions

If you need backend APIs:
- Create `/api` folder in root
- Add JavaScript/TypeScript files
- Vercel automatically deploys as serverless functions

### 3. Edge Functions

For ultra-fast responses, use Edge Functions:
```javascript
// /app/api/hello.js
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  return new Response('Hello!');
}
```

### 4. Web Vitals Monitoring

Automatic performance monitoring included.

---

## 📞 Support & Resources

### Vercel Documentation
- Main Docs: https://vercel.com/docs
- React Guide: https://vercel.com/guides/deploying-react-with-vercel
- Troubleshooting: https://vercel.com/docs/errors

### Community
- Discord: https://vercel.com/discord
- GitHub: https://github.com/vercel/vercel/discussions

### Help Center
- Support: https://vercel.com/support

---

## 🎯 Quick Commands Reference

### Local Development
```bash
cd /app/frontend
yarn install          # Install dependencies
yarn start           # Start dev server
yarn build           # Build for production
```

### Git Commands
```bash
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push origin main # Push to GitHub
```

### Vercel CLI (Optional)
```bash
npm i -g vercel      # Install Vercel CLI
vercel               # Deploy from terminal
vercel --prod        # Deploy to production
```

---

## ✨ Comparison: Vercel vs Other Platforms

| Feature | Vercel | Netlify | Hostinger |
|---------|--------|---------|-----------|
| **Free Hosting** | ✅ Yes | ✅ Yes | ❌ Paid |
| **Auto Deploy** | ✅ Yes | ✅ Yes | ❌ Manual |
| **SSL (HTTPS)** | ✅ Free | ✅ Free | ✅ Free |
| **Custom Domain** | ✅ Free | ✅ Free | ✅ Included |
| **Build Time** | ⚡ 2-3 min | ⚡ 2-4 min | 🐌 N/A |
| **Global CDN** | ✅ Yes | ✅ Yes | ⚠️  Limited |
| **Preview Deploys** | ✅ Yes | ✅ Yes | ❌ No |
| **Serverless** | ✅ Yes | ✅ Yes | ⚠️  VPS only |
| **Setup Time** | ⏱️  10 min | ⏱️  10 min | ⏱️  30 min |

**Winner for Portfolios: Vercel or Netlify** (Both excellent, free, and easy!)

---

## 🎉 Success! What's Next?

Your portfolio is now live on Vercel! 

### Share Your Work
- [ ] Add to LinkedIn profile
- [ ] Update GitHub bio
- [ ] Share on Twitter
- [ ] Add to resume/CV
- [ ] Submit to showcase sites

### Monitor Performance
- [ ] Enable Vercel Analytics
- [ ] Check Core Web Vitals
- [ ] Monitor uptime

### Keep Improving
- [ ] Add new projects as you build
- [ ] Update achievements
- [ ] Refresh content regularly
- [ ] A/B test different headlines

---

## 🏁 Complete Example Workflow

Here's the full workflow from start to finish:

```bash
# 1. Navigate to project
cd /app

# 2. Create .gitignore (already done)

# 3. Initialize git
git init
git add .
git commit -m "Initial commit - Portfolio website"

# 4. Create GitHub repo (via website)
# Then run these commands (replace YOUR_USERNAME):
git remote add origin https://github.com/YOUR_USERNAME/divjot-portfolio.git
git branch -M main
git push -u origin main

# 5. Go to vercel.com
# - Sign in with GitHub
# - Import your repository
# - Configure build settings
# - Deploy!

# 6. Make updates
cd frontend/src/components/sections
# Edit your files
cd /app
git add .
git commit -m "Updated content"
git push origin main

# Vercel automatically deploys! ✨
```

---

## 📝 Summary

**Time to Deploy**: ~10 minutes
**Cost**: FREE
**Difficulty**: Easy ⭐⭐☆☆☆

**Steps**:
1. Push code to GitHub (5 min)
2. Connect to Vercel (2 min)
3. Deploy (3 min)

**Benefits**:
- Automatic deployments
- Free SSL certificate
- Global CDN
- Preview deployments
- Zero maintenance

**Perfect for**: Personal portfolios, side projects, static sites

---

**Need help?** 
- See [LOCAL_SETUP_GUIDE.md](LOCAL_SETUP_GUIDE.md) for local development
- See [CUSTOMIZATION_CHECKLIST.md](CUSTOMIZATION_CHECKLIST.md) for personalization
- See [QUICK_START.md](QUICK_START.md) for quick reference

**Happy deploying! 🚀**

---

*Last updated: January 2025*
