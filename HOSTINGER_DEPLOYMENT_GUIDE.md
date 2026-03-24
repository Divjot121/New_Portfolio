# Hostinger Deployment Guide - Divjot Singh Arora Portfolio

Complete step-by-step guide to deploy your portfolio on Hostinger.

---

## Deployment Overview

Hostinger supports multiple deployment methods:

1. **Static Site Hosting** (Recommended for this portfolio)
2. **Node.js Hosting** (For dynamic features)
3. **VPS Hosting** (Full control)

We'll use **Static Site Hosting** as this portfolio is primarily frontend.

---

## Prerequisites

✅ Hostinger account with hosting plan
✅ Domain name (optional, Hostinger provides subdomain)
✅ Project built and ready to deploy

---

## Method 1: Static Site Deployment (Recommended)

### Step 1: Build the Project Locally

```bash
# Navigate to frontend directory
cd /app/frontend

# Install dependencies (if not already done)
yarn install

# Create production build
yarn build
```

This creates a `build` folder with optimized static files.

### Step 2: Prepare Build Files

The `build` folder contains:
```
build/
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── index.html
├── favicon.ico
└── asset-manifest.json
```

### Step 3: Login to Hostinger

1. Go to [Hostinger](https://www.hostinger.com)
2. Login to your account
3. Navigate to **hPanel** (Hosting Panel)

### Step 4: Access File Manager

1. In hPanel, click on **File Manager**
2. Navigate to `public_html` directory
3. Delete default files (index.html, etc.)

### Step 5: Upload Build Files

**Option A: Using File Manager (GUI)**

1. Click **Upload Files** button
2. Select all files from `/app/frontend/build/` directory
3. Upload them to `public_html` folder
4. Ensure folder structure is preserved:
   ```
   public_html/
   ├── static/
   ├── index.html
   └── other files...
   ```

**Option B: Using FTP (Recommended for large files)**

1. Get FTP credentials from hPanel → **FTP Accounts**
2. Use FileZilla or any FTP client
3. Connect using credentials:
   - Host: Your domain or Hostinger FTP server
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
4. Upload all files from `build/` to `public_html/`

### Step 6: Configure .htaccess for React Router

Create `.htaccess` file in `public_html/` directory:

```apache
# Enable rewrite engine
RewriteEngine On
RewriteBase /

# Redirect HTTP to HTTPS (optional but recommended)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle React Router - redirect all requests to index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Step 7: Update Environment Variables

Since this is a static site, you need to rebuild with production URLs:

```bash
# In /app/frontend/.env.production (create this file)
REACT_APP_BACKEND_URL=https://yourdomain.com
```

Then rebuild:
```bash
yarn build
```

And re-upload the build files.

### Step 8: Test Your Site

1. Visit your domain: `https://yourdomain.com`
2. Check all sections load properly
3. Test navigation and animations
4. Verify on mobile devices

---

## Method 2: Node.js Hosting (For Dynamic Features)

If you need backend functionality:

### Step 1: Check Node.js Support

1. In hPanel, check if your plan supports Node.js
2. Go to **Advanced → Node.js Selector**
3. If not available, upgrade to Business or VPS plan

### Step 2: Prepare Project for Deployment

Create a deployment script in `/app/package.json`:

```json
{
  "name": "divjot-portfolio",
  "version": "1.0.0",
  "scripts": {
    "start": "node backend/server.js",
    "build": "cd frontend && yarn install && yarn build",
    "install-all": "cd frontend && yarn install && cd ../backend && pip install -r requirements.txt"
  }
}
```

### Step 3: Upload Project via Git

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. In hPanel → **Git Version Control**
3. Click **Create a new repository**
4. Enter your GitHub repository URL
5. Set branch to `main`
6. Set deployment path to `public_html`
7. Click **Create**

### Step 4: Configure Node.js Application

1. Go to **Node.js Selector**
2. Click **Setup Node.js App**
3. Configure:
   - Node.js version: 18.x or higher
   - Application mode: Production
   - Application root: public_html
   - Application URL: your domain
   - Application startup file: backend/server.py (if using Python)
4. Click **Create**

### Step 5: Install Dependencies

In Node.js app terminal:
```bash
npm install
npm run build
```

---

## Method 3: VPS Deployment (Full Control)

For advanced users who need complete control:

### Step 1: Setup VPS

1. Purchase Hostinger VPS plan
2. Access VPS via SSH:
   ```bash
   ssh root@your-vps-ip
   ```

### Step 2: Install Required Software

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Yarn
npm install -g yarn

# Install Nginx
sudo apt install nginx -y

# Install Python (if needed)
sudo apt install python3 python3-pip -y

# Install MongoDB (if needed)
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Step 3: Clone and Setup Project

```bash
# Navigate to web directory
cd /var/www

# Clone your repository
git clone <your-repo-url> portfolio
cd portfolio

# Install frontend dependencies
cd frontend
yarn install
yarn build

# Install backend dependencies (if needed)
cd ../backend
pip3 install -r requirements.txt
```

### Step 4: Configure Nginx

Create Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    root /var/www/portfolio/frontend/build;
    index index.html;

    # Serve static files
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy API requests to backend (if needed)
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 5: Setup SSL Certificate (Free with Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal is configured automatically
```

### Step 6: Setup Process Manager (PM2) for Backend

If running backend:

```bash
# Install PM2
sudo npm install -g pm2

# Start backend
cd /var/www/portfolio/backend
pm2 start "uvicorn server:app --host 0.0.0.0 --port 8001" --name portfolio-backend

# Save PM2 configuration
pm2 save
pm2 startup
```

---

## Post-Deployment Checklist

### Testing
- [ ] Visit your domain and verify site loads
- [ ] Test all sections (Hero, About, Projects, etc.)
- [ ] Check mobile responsiveness
- [ ] Test hover effects and animations
- [ ] Verify social links work
- [ ] Test smooth scroll navigation
- [ ] Check browser console for errors

### Performance Optimization
- [ ] Enable Gzip compression (via .htaccess)
- [ ] Setup browser caching
- [ ] Optimize images (already done with Unsplash)
- [ ] Enable CDN (Cloudflare - free)
- [ ] Minify CSS/JS (done by React build)

### Security
- [ ] Enable HTTPS/SSL certificate
- [ ] Update DNS records
- [ ] Configure firewall (if VPS)
- [ ] Regular backups

### SEO & Analytics
- [ ] Add Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Add meta tags for social sharing
- [ ] Verify Open Graph tags

---

## Custom Domain Setup

### Step 1: Point Domain to Hostinger

1. Login to your domain registrar
2. Update nameservers to Hostinger's:
   ```
   ns1.dns-parking.com
   ns2.dns-parking.com
   ```
3. Wait 24-48 hours for DNS propagation

### Step 2: Configure Domain in hPanel

1. Go to hPanel → **Domains**
2. Click **Add Domain**
3. Enter your domain name
4. Point to `public_html` directory
5. Enable SSL (free with Hostinger)

---

## Updating Your Portfolio

### Method 1: Manual Update (Static Site)

1. Make changes locally
2. Build project: `yarn build`
3. Upload new build files via FTP/File Manager
4. Clear browser cache

### Method 2: Git-based Updates (VPS)

```bash
# SSH into server
ssh root@your-vps-ip

cd /var/www/portfolio

# Pull latest changes
git pull origin main

# Rebuild frontend
cd frontend
yarn install
yarn build

# Restart services
sudo systemctl restart nginx
pm2 restart portfolio-backend  # if using backend
```

### Method 3: CI/CD Pipeline (Advanced)

Setup GitHub Actions for automatic deployment:

1. Create `.github/workflows/deploy.yml`
2. Configure FTP/SSH deployment
3. Auto-deploy on push to main branch

---

## Troubleshooting

### Site Not Loading
- Check DNS propagation: [DNS Checker](https://dnschecker.org/)
- Verify files are in `public_html`
- Check .htaccess syntax
- Clear browser cache

### Blank Page
- Check browser console for errors
- Verify all files uploaded correctly
- Check file permissions (644 for files, 755 for folders)

### SSL Certificate Issues
- Verify domain points to Hostinger
- Wait for DNS propagation
- Contact Hostinger support for SSL activation

### Images Not Loading
- Check image URLs in components
- Verify images are in build folder
- Check browser network tab for 404 errors

---

## Support Resources

- **Hostinger Knowledge Base**: https://support.hostinger.com
- **Hostinger Live Chat**: Available 24/7 in hPanel
- **React Deployment Guide**: https://create-react-app.dev/docs/deployment
- **DNS Checker**: https://dnschecker.org/

---

## Estimated Costs (Hostinger)

- **Premium Hosting**: $2.99/month (Static site hosting)
- **Business Hosting**: $3.99/month (Node.js support)
- **VPS Hosting**: Starting at $5.99/month (Full control)
- **Domain**: $9.99/year (optional, if not already owned)
- **SSL Certificate**: FREE with all plans

---

## Success! 🎉

Your portfolio is now live on Hostinger!

Next steps:
- Share your portfolio URL
- Update social media profiles
- Submit to search engines
- Monitor performance with Google Analytics

For local development guide, see: `LOCAL_SETUP_GUIDE.md`