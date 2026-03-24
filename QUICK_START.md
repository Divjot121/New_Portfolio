# Quick Start Guide - Divjot Singh Arora Portfolio

## Run Locally (5 minutes)

### Frontend Only (Portfolio)

```bash
# 1. Navigate to frontend
cd /app/frontend

# 2. Install dependencies
yarn install

# 3. Start development server
yarn start
```

✅ Open http://localhost:3000

---

## Deploy to Vercel (Recommended - 10 minutes)

### Quick Deployment via GitHub

```bash
# 1. Push to GitHub
cd /app
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# 2. Deploy on Vercel
# - Go to vercel.com
# - Sign in with GitHub
# - Import your repository
# - Click Deploy

# 3. Done! Your site is live
# https://your-portfolio.vercel.app
```

**Benefits**:
- ✅ FREE forever
- ✅ Automatic deployments on every git push
- ✅ Free SSL certificate (HTTPS)
- ✅ Global CDN
- ✅ Preview deployments for branches

**Full Guide**: See [VERCEL_DEPLOYMENT_GUIDE.md](VERCEL_DEPLOYMENT_GUIDE.md)

---

## Deploy to Hostinger (15 minutes)

### Quick Deployment Steps

```bash
# 1. Build the project
cd /app/frontend
yarn install
yarn build

# 2. Upload to Hostinger
# - Login to Hostinger hPanel
# - Open File Manager → public_html
# - Upload all files from /app/frontend/build/

# 3. Create .htaccess file
# Add React Router configuration (see HOSTINGER_DEPLOYMENT_GUIDE.md)

# 4. Visit your domain
# https://yourdomain.com
```

**Full Guide**: See [HOSTINGER_DEPLOYMENT_GUIDE.md](HOSTINGER_DEPLOYMENT_GUIDE.md)

---

## Deployment Comparison

| Feature | Vercel | Hostinger |
|---------|--------|-----------|
| **Cost** | FREE | $2.99+/mo |
| **Setup Time** | 10 min | 30 min |
| **Auto Deploy** | ✅ Yes | ❌ No |
| **SSL/HTTPS** | ✅ Free | ✅ Free |
| **Best For** | Portfolios, Auto-updates | Full control |

**Recommendation**: Use **Vercel** for portfolios and side projects (FREE + automatic updates!)

---

## Key Files

- **Local Setup**: `LOCAL_SETUP_GUIDE.md` - Detailed local development guide
- **Deployment**: `HOSTINGER_DEPLOYMENT_GUIDE.md` - Complete Hostinger deployment guide
- **Frontend Code**: `/app/frontend/src/` - All React components
- **Sections**: `/app/frontend/src/components/sections/` - Portfolio sections

---

## Customization

### Update Personal Information

**Hero Section** (`/app/frontend/src/components/sections/Hero.jsx`):
- Line 21: Update headline text
- Line 36: Update subtext/bio
- Lines 62-66: Update social links

**About Section** (`/app/frontend/src/components/sections/About.jsx`):
- Line 39: Update "About Me" image
- Lines 50-57: Update story and bio

**Projects** (`/app/frontend/src/components/sections/Projects.jsx`):
- Lines 5-27: Update projects array with your projects

**Achievements** (`/app/frontend/src/components/sections/Achievements.jsx`):
- Lines 5-28: Update achievements array

**Skills** (`/app/frontend/src/components/sections/Skills.jsx`):
- Lines 5-20: Update skills by category

**Ideas Exploring** (`/app/frontend/src/components/sections/IdeasExploring.jsx`):
- Lines 5-44: Update ideas array

**Contact** (`/app/frontend/src/components/sections/Contact.jsx`):
- Lines 10-13: Update social links with your URLs
- Line 32: Update email

### Update Colors/Theme

**Main Colors** (defined in design):
- Purple: `#6C63FF`
- Blue: `#00D4FF`
- Neon Pink: `#FF6FD8`
- Background: `#05050A`

To change colors, update hex values in component files or create a theme configuration.

---

## Need Help?

📖 **Detailed Guides**:
- Local Setup: `LOCAL_SETUP_GUIDE.md`
- Hostinger Deployment: `HOSTINGER_DEPLOYMENT_GUIDE.md`

🐛 **Common Issues**:
- Port in use: Kill process on port 3000
- Dependencies error: Delete node_modules, run `yarn install`
- Build error: Clear cache and rebuild

---

## Project Structure

```
/app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── sections/      # All portfolio sections
│   │   ├── pages/
│   │   │   └── Portfolio.jsx  # Main portfolio page
│   │   ├── App.js            # App entry point
│   │   ├── App.css           # Global styles
│   │   └── index.css         # Tailwind imports
│   ├── public/
│   │   └── index.html        # HTML template
│   ├── package.json          # Dependencies
│   └── .env                  # Environment variables
├── backend/                   # Optional FastAPI backend
├── LOCAL_SETUP_GUIDE.md      # This guide
├── HOSTINGER_DEPLOYMENT_GUIDE.md
└── QUICK_START.md
```

---

## Build Commands

```bash
# Development
yarn start              # Start dev server

# Production
yarn build             # Create optimized build
yarn build && serve -s build  # Test production build locally

# Utilities
yarn install           # Install dependencies
yarn add [package]     # Add new package
```

---

## Support

For detailed instructions, see:
1. `LOCAL_SETUP_GUIDE.md` - Local development
2. `HOSTINGER_DEPLOYMENT_GUIDE.md` - Deployment guide
