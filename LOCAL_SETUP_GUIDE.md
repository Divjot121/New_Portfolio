# Local Setup Guide - Divjot Singh Arora Portfolio

This guide will help you run the portfolio website on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download](https://www.python.org/downloads/)
- **Yarn** - Install via: `npm install -g yarn`
- **MongoDB** (optional, only if using backend features) - [Download](https://www.mongodb.com/try/download/community)

## Project Structure

```
/app/
├── frontend/          # React application
├── backend/           # FastAPI backend (optional for static portfolio)
└── README.md
```

---

## Option 1: Frontend Only (Recommended for Portfolio)

Since this is a static portfolio website, you only need to run the frontend.

### Step 1: Navigate to Frontend Directory

```bash
cd /app/frontend
```

### Step 2: Install Dependencies

```bash
yarn install
```

This will install all required packages including:
- React
- Framer Motion (animations)
- Lucide React (icons)
- Tailwind CSS
- All Radix UI components

### Step 3: Configure Environment Variables

Create or modify the `.env` file in `/app/frontend/` directory:

```bash
# Frontend Environment Variables
REACT_APP_BACKEND_URL=http://localhost:8001
WDS_SOCKET_PORT=0
ENABLE_HEALTH_CHECK=false
```

**Note:** If you're running frontend only (no backend), the portfolio will work fine as it doesn't make any API calls.

### Step 4: Start the Development Server

```bash
yarn start
```

The application will start on `http://localhost:3000`

### Step 5: Open in Browser

Navigate to: **http://localhost:3000**

You should see the portfolio with:
- Hero section with gradient headline
- All 9 sections loading properly
- Smooth animations
- Hover effects working

---

## Option 2: Full Stack (Frontend + Backend)

If you want to run both frontend and backend (for future features like contact forms):

### Backend Setup

#### Step 1: Navigate to Backend Directory

```bash
cd /app/backend
```

#### Step 2: Create Python Virtual Environment

```bash
# Create virtual environment
python -m venv venv

# Activate it:
# On Windows:
venv\Scripts\activate

# On Mac/Linux:
source venv/bin/activate
```

#### Step 3: Install Python Dependencies

```bash
pip install -r requirements.txt
```

#### Step 4: Configure Backend Environment

Create or modify `.env` file in `/app/backend/`:

```bash
# Backend Environment Variables
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_database
CORS_ORIGINS=http://localhost:3000
```

#### Step 5: Start MongoDB (if needed)

```bash
# On Mac (with Homebrew):
brew services start mongodb-community

# On Windows:
# Start MongoDB service from Services panel

# On Linux:
sudo systemctl start mongod
```

#### Step 6: Start Backend Server

```bash
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

Backend will run on: **http://localhost:8001**

### Frontend Setup (with Backend)

#### Step 1: Navigate to Frontend

```bash
cd /app/frontend
```

#### Step 2: Update Environment Variables

```bash
REACT_APP_BACKEND_URL=http://localhost:8001
WDS_SOCKET_PORT=0
ENABLE_HEALTH_CHECK=false
```

#### Step 3: Install and Start

```bash
yarn install
yarn start
```

Frontend will run on: **http://localhost:3000**

---

## Troubleshooting

### Port Already in Use

If port 3000 or 8001 is already in use:

```bash
# Find and kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Find and kill process on port 8001
lsof -ti:8001 | xargs kill -9

# On Windows, use:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
cd /app/frontend
rm -rf node_modules yarn.lock
yarn install
```

### Python Dependencies Issues

```bash
# Update pip and reinstall
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall
```

### MongoDB Connection Error

Ensure MongoDB is running:

```bash
# Check MongoDB status (Mac)
brew services list | grep mongodb

# Check MongoDB status (Linux)
sudo systemctl status mongod
```

---

## Building for Production

### Frontend Production Build

```bash
cd /app/frontend
yarn build
```

This creates an optimized production build in `/app/frontend/build/` directory.

### Test Production Build Locally

```bash
# Install serve globally
npm install -g serve

# Serve the build folder
serve -s build -l 3000
```

---

## Development Tips

### Hot Reload
- Frontend has hot reload enabled - changes appear instantly
- Backend has auto-reload with `--reload` flag

### Code Formatting
- Frontend uses Prettier (if configured)
- Backend uses Black/Ruff for Python formatting

### Browser DevTools
- Open Chrome DevTools (F12)
- Check Console for errors
- Use React DevTools extension for component inspection

---

## Next Steps

1. ✅ Run the project locally
2. 📝 Customize content (name, projects, achievements)
3. 🎨 Adjust colors/styling if needed
4. 🚀 Deploy to Hostinger (see HOSTINGER_DEPLOYMENT_GUIDE.md)

---

## Need Help?

Common issues:
- **Blank page**: Check browser console for errors
- **API errors**: Ensure backend is running (if using)
- **Styling issues**: Clear browser cache and restart
- **Build errors**: Delete node_modules and reinstall

For deployment guide, see: `HOSTINGER_DEPLOYMENT_GUIDE.md`