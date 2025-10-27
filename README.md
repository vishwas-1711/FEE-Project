# ShowStorm - Netflix Clone React App

A React-based Netflix clone with landing page and streaming interface.

## Features

- **Landing Page (Index)**: 
  - Hero section with email signup
  - Feature showcase
  - FAQ accordion
  - Sign-in modal
  - Footer

- **Main Streaming Page**:
  - Hero slider with movie showcases
  - Watch trailer functionality (video player modal)
  - Multiple movie sections (Top Picks, Popular Movies, Trending, Sports)
  - Responsive carousel sliders
  - Fixed navigation header

## Setup Instructions

### 1. Install Dependencies

```bash
cd react-netflix-app
npm install
```

### 2. Add Images and Video

Copy your images and video from the original project:

- Copy the `images` folder from `Nerflix-website-main` to `react-netflix-app/public/images`
- Copy the `video` folder from `Nerflix-website-main` to `react-netflix-app/public/video`

Your folder structure should look like:
```
react-netflix-app/
  public/
    images/
      favorite/
      popular/
      trending/
      suggested/
      ...
    video/
      trailer.mp4
```

### 3. Run the Application

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
react-netflix-app/
├── public/
│   ├── index.html
│   ├── images/          # Your movie/show images
│   └── video/           # Trailer video
├── src/
│   ├── pages/
│   │   ├── Index.js     # Landing page component
│   │   ├── Index.css    # Landing page styles
│   │   ├── Main.js      # Streaming page component
│   │   └── Main.css     # Streaming page styles
│   ├── App.js           # Main app with routing
│   ├── App.css          # Global styles
│   ├── index.js         # Entry point
│   └── index.css        # Base styles
└── package.json
```

## Key Components

### Index Page (Landing)
- Navbar with language selector and sign-in
- Hero section with email form
- Features section with videos
- FAQ accordion
- Footer
- Sign-in modal

### Main Page (Streaming)
- Fixed header with navigation and user menu
- Hero slider with movie information and "Watch Trailer" button
- Multiple content sections with carousels
- Video modal for trailer playback
- Logout functionality (returns to landing page)

## Navigation

- **Landing Page**: `/` - Sign up and learn about the service
- **Streaming Page**: `/main` - Browse and watch content (accessible after email signup or sign-in)

## Technologies Used

- React 18
- React Router DOM (for navigation)
- React Slick (for carousels)
- CSS3 (custom styling)
- Font Awesome (icons)
- Google Fonts (Poppins, Roboto)

## Features Implemented

### Video Functionality
- Click "Watch Trailer" on hero slides to open video modal
- Video plays from `/public/video/trailer.mp4`
- Close modal by clicking X or outside the video

### State Management
- Email storage in localStorage
- Modal state management (sign-in, video player)
- FAQ accordion state

### Responsive Design
- Mobile-friendly layouts
- Adaptive sliders (show fewer items on smaller screens)
- Responsive typography and spacing

## Customization

### Adding More Movies
Edit the map functions in `Main.js` to add more movie cards or change the displayed numbers.

### Changing Colors
The main brand color is `#e50914` (Netflix red). Update this in CSS files to rebrand:
- `Index.css`
- `Main.css`
- `App.css`

### Adding More Slides
In `Main.js`, duplicate the hero slide `<div>` blocks inside the `<Slider>` component and update content.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

The built app can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Make sure to copy the `images` and `video` folders to your deployment as well.

## Notes

- Images are referenced from `/public/images/` - make sure to copy them over
- The trailer video should be placed in `/public/video/trailer.mp4`
- Sign-in is simulated (no backend) - email is stored in localStorage
- For production, implement proper authentication and backend API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Enjoy your Netflix clone! 🎬🍿
