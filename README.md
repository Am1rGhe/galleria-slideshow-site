# 🎨 Galleria Slideshow Site

A fully functional **art gallery slideshow website** built as a solution to the [Frontend Mentor "Galleria slideshow site" challenge](https://www.frontendmentor.io/). This project was developed using **vanilla HTML, CSS, and JavaScript** as my final project before transitioning to React. It showcases advanced DOM manipulation, CSS Grid layouts, and responsive design patterns without any frameworks.

## 📋 Table of Contents

- [Overview](#overview)
- [Challenge](#challenge)
- [Features](#features)
- [What I Built](#what-i-built)
- [Technologies Used](#technologies-used)
- [Key Implementation Details](#key-implementation-details)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)

## 🎯 Overview

This project is an interactive art gallery that displays 15 famous artworks in a beautiful bento-style grid layout. Users can browse the collection, view detailed slideshows for each piece, and explore artwork information with smooth transitions and animations.

## 🏆 Challenge

This was completed as part of the **Frontend Mentor challenges** - a platform that provides real-world design mockups to help developers improve their frontend skills. The challenge required building a responsive gallery site with:

- A masonry/bento grid layout for the artwork gallery
- Interactive slideshow functionality
- Dynamic content updates
- Responsive design for multiple screen sizes
- Smooth animations and transitions

## ✨ Features

### 🖼️ Gallery View
- **Interactive Bento Grid** – A responsive 4-column grid layout (2 columns on tablet, 1 on mobile) displaying all 15 artworks as clickable tiles
- **Hover Effects** – Smooth opacity transitions when hovering over artwork tiles
- **Dynamic Layout** – CSS Grid with custom row spans creating an asymmetrical, visually interesting layout

### 🎬 Slideshow Mode
- **Dynamic Navigation** – Click any artwork tile or use the "START SLIDESHOW" button to enter slideshow mode
- **Content Switching** – JavaScript dynamically shows/hides slideshow sections based on user selection
- **Next/Back Controls** – Arrow buttons to navigate between artworks with proper boundary handling (disabled states at first/last items)
- **Progress Indicator** – A visual progress bar that updates based on the current slide position (calculated as `current / total * 100%`)
- **Dynamic Footer** – Footer content (artwork name and artist) updates automatically when navigating between slides

### 🖼️ Image Overlay
- **Full-Screen View** – Click any artwork image in slideshow mode to view it in a full-screen overlay
- **Click-to-Close** – Click outside the image to close the overlay
- **Smooth Animations** – Zoom-in animation when opening the overlay

### 📱 Responsive Design
- **Mobile-First Approach** – Fully responsive with breakpoints at 1024px (tablet) and 768px (mobile)
- **Adaptive Layouts** – Slideshow transitions from horizontal (desktop) to vertical stacking (tablet/mobile)
- **Flexible Typography** – CSS custom properties for different screen sizes
- **Touch-Friendly** – Optimized button sizes and spacing for mobile devices

## 🔨 What I Built

### HTML Structure
- Semantic HTML5 markup with proper sectioning
- 15 individual slideshow sections, each containing:
  - Artwork image
  - Artwork information (title, artist)
  - Artist portrait
  - Story/description with year
  - Source link

### CSS Implementation
- **CSS Grid Layout** – Custom grid system for the bento-style gallery with individual row spans for each artwork
- **CSS Custom Properties** – Comprehensive design system with typography presets, colors, and spacing variables
- **Flexbox** – Used for slideshow layouts and component alignment
- **Media Queries** – Three breakpoints (1024px, 768px, 375px) with complete responsive styling
- **Animations** – Keyframe animations for overlay zoom effects
- **Positioning** – Complex absolute/relative positioning for the desktop slideshow layout

### JavaScript Functionality
- **Event Delegation** – Efficient event handling on the bento grid using `closest()` method
- **DOM Manipulation** – Dynamic class toggling to show/hide elements
- **State Management** – Global `currentId` variable to track the active slideshow
- **Dynamic Content Updates** – Real-time updates to:
  - Footer text content (artwork name and artist)
  - Progress bar CSS custom property
  - Navigation button states (disabled classes)
- **Image Overlay System** – Clone nodes and append to overlay container for full-screen viewing
- **Boundary Checking** – Prevents navigation beyond the first/last items

## 💻 Technologies Used

- **HTML5** – Semantic markup and structure
- **CSS3** – 
  - CSS Grid for gallery layout
  - Flexbox for component layouts
  - CSS Custom Properties (variables)
  - Media queries for responsive design
  - Keyframe animations
- **Vanilla JavaScript (ES6)** – 
  - DOM manipulation
  - Event listeners and event delegation
  - Query selectors
  - ClassList API
  - Clone nodes for image overlay

## 🔍 Key Implementation Details

### Bento Grid System
The gallery uses CSS Grid with `grid-auto-rows: 10px` to create a dense, masonry-like layout. Each artwork has custom `grid-row` spans (e.g., `grid-row: 1 / span 25`) creating the asymmetric bento-style appearance. On mobile, these spans are reset to `auto` for a simple stacked layout.

### Slideshow State Management
The `changeSlideshow()` function is the core of the application:
- Hides/shows the bento grid and slideshow container
- Updates button text ("START SLIDESHOW" ↔ "STOP SLIDESHOW")
- Dynamically shows the correct slideshow section based on `currentId`
- Extracts and displays artwork information from the DOM
- Updates the progress bar using CSS custom properties
- Manages navigation button states (disabled classes)

### Event Delegation Pattern
Instead of adding 15 separate click listeners, I used event delegation on the bento grid container:
```javascript
bentoGrid.addEventListener("click", (e) => {
  const template = e.target.closest("[id^='template-']");
  // Extract ID and handle click
});
```
This is more efficient and easier to maintain.

### Responsive Typography
CSS custom properties are used to switch between desktop and mobile typography:
- Desktop: Large headings (56px), body text (15px)
- Mobile: Smaller headings (24px), adjusted line heights and spacing

## 📁 Project Structure

```
galleria-slideshow-site/
├── docs/
│   ├── index.html          # Main HTML structure
│   ├── style.css           # All styles including media queries
│   ├── app.js              # JavaScript functionality
│   └── assets/
│       ├── favicon-32x32.png
│       └── [15 artwork folders]/
│           ├── artist.jpg
│           ├── gallery.jpg
│           ├── hero-large.jpg
│           ├── hero-small.jpg
│           └── thumbnail.jpg
└── README.md
```

## 🚀 How to Run

1. Clone this repository or download the project files
2. Navigate to the `docs` folder
3. Open `index.html` in a web browser
   - **Recommended**: Use a local development server (e.g., VS Code Live Server, Python's `http.server`, or Node's `http-server`)
   - **Note**: Some browsers may have CORS restrictions when opening HTML files directly
4. That's it! No build process or dependencies required - pure vanilla web technologies.

### Quick Start with Local Server

**Python 3:**
```bash
cd docs
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Node.js (if you have http-server installed):**
```bash
cd docs
npx http-server
```

---

## 📝 Notes

This project represents my **final vanilla JavaScript project** before learning React and modern frontend frameworks. It demonstrates:

- Proficiency with vanilla JavaScript DOM manipulation
- Understanding of CSS Grid and Flexbox
- Ability to create responsive, accessible web interfaces
- Knowledge of event handling patterns
- Experience with complex layout challenges

The transition to React would simplify state management and component organization, but building this with vanilla JavaScript provided valuable foundational experience in understanding how modern frameworks work under the hood.

---

**Challenge by:** [Frontend Mentor](https://www.frontendmentor.io/)  
**Built with:** Vanilla HTML, CSS, and JavaScript
