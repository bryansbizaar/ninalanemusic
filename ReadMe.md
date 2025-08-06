# Nina Lane Music

A customized, performance-optimized website for New Zealand singer-songwriter Nina Lane, featuring links to bio, music, videos, and her duo.

## Architecture

### File Structure

```
/
├── index.html          # Landing page
├── about.html          # Bio and background
├── video.html          # YouTube video gallery
├── contact.html        # Contact information
├── duo.html           # Duo information
├── css/
│   └── shared-base.css # Common styles and CSS variables
├── js/
│   └── shared.js       # Shared navigation and functionality
└── images/            # Optimized images
```

### Design Approach

- **Hybrid Architecture**: Shared components with page-specific critical CSS
- **Performance First**: Inline critical CSS, optimized fonts, preloaded resources
- **Minimal Duplication**: Navigation and footer dynamically inserted via JavaScript
- **Responsive Design**: Mobile-first with hamburger navigation

## Key Features

- **Instant Loading**: Critical CSS inlined, zero render-blocking requests
- **Font Optimization**: Primary font loads immediately, secondary font lazy-loaded
- **Accessibility**: Skip links, semantic markup, proper ARIA labels
- **Security**: Content Security Policy headers
- **Mobile Optimized**: Touch-friendly navigation with outside-click-to-close

## Development

### CSS Variables

Global theming controlled via CSS custom properties in `shared-base.css`:

```css
:root {
  --font-primary: "Viaoda Libre", cursive;
  --font-secondary: "Thasadith", sans-serif;
  --text-light: white;
  --text-dark: black;
  /* ... */
}
```

### Adding New Pages

1. Copy existing page structure
2. Add `data-page="pagename"` to `<body>`
3. Include `<div id="nav-container">` for navigation
4. Include `<div id="footer-container">` for footer
5. Load `css/shared-base.css` and `js/shared.js`

### Navigation Updates

Modify navigation links in `js/shared.js` - changes apply to all pages automatically.

## Performance Features

- **Critical CSS**: Inlined for instant rendering
- **Resource Preloading**: Hero images preloaded
- **Font Strategy**: Optimized Google Fonts loading
- **Caching**: Shared CSS file cached across page visits
- **Security**: CSP headers prevent XSS attacks

## Browser Support

Modern browsers supporting ES6 classes and CSS custom properties (IE11+).

## Deployment

Static site - deploy to any web server or CDN. No build process required.
