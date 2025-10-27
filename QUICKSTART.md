# 🚀 Quick Start Guide

Get your React Netflix clone running in 3 easy steps!

## Step 1: Copy Assets (Images & Video)

**Option A - Automatic (Recommended):**
Double-click `copy-assets.bat` file

**Option B - Manual:**
Run these commands in PowerShell:
```powershell
xcopy /E /I "..\Nerflix-website-main\images" "public\images"
xcopy /E /I "..\Nerflix-website-main\video" "public\video"
```

## Step 2: Install Dependencies

Open terminal in this folder and run:
```bash
npm install
```

## Step 3: Start the App

```bash
npm start
```

That's it! Your app will open at http://localhost:3000

---

## 📱 Using the App

### Landing Page (/)
- Enter your email and click "Get Started"
- Or click "Sign in" to use the sign-in modal
- This takes you to the main streaming page

### Main Page (/main)
- Browse movies in different sections
- Click "Watch Trailer" on hero slides to play the trailer video
- Click the user icon to logout

---

## 📂 What's Inside

- **Index.js** - Landing/signup page
- **Main.js** - Main streaming interface with video player
- React Router for navigation
- React Slick for carousels
- All your original images and video work perfectly!

---

## 🎬 Video Feature

The "Watch Trailer" button opens a modal that plays `/public/video/trailer.mp4`

Make sure the trailer video is copied to the right location!

---

## 💡 Tips

- Images load from `/public/images/`
- Video loads from `/public/video/trailer.mp4`
- Email is saved in localStorage (no backend needed)
- Fully responsive design
- All original functionality preserved

---

## 🛠️ Need More Info?

- **SETUP_GUIDE.txt** - Detailed setup instructions
- **README.md** - Complete documentation
- **src/pages/** - All React components

Happy coding! 🎉
