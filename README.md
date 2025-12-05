# PM-Test

Landing page implementation for Obermind's Web Developer technical assessment.

This project implements the Home Page design from the provided Figma file using React, TypeScript, and Tailwind CSS.

## How to Install and Run

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone 'https://github.com/gncao523/PM-Test'
cd PM-Test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Project Structure

```
PM-Test/
├── src/
│   ├── assets/         # Images, fonts, and other assets
│   │   ├── fonts/      # Font files
│   │   └── images/     # Image files
│   ├── components/     # Reusable React components
│   │   ├── chart/      # Chart-related components
│   │   └── ...         # Other section components
│   ├── pages/          # Page components
│   │   └── HomePage.tsx # Main landing page
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles with Tailwind
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## Assumptions Made

During implementation, the following assumptions were made:

1. **Responsive Design**: The page is implemented to be responsive across mobile, tablet, and desktop viewports. Breakpoints follow standard Tailwind conventions (sm, md, lg, xl).

2. **Assets**: All images and fonts were extracted from the Figma design and placed in `src/assets/`. Some assets may have been optimized or adjusted for web use.

3. **Typography**: Custom fonts (Gilroy, Urbanist, Roboto) are loaded from local files. Font weights and sizes were matched to the Figma design as closely as possible.

4. **Colors**: Colors were extracted from Figma and configured in Tailwind CSS. Some color values may have slight variations due to color space conversions.

5. **Interactive Elements**: 
   - Buttons and links are styled but may not have full functionality (no backend integration)
   - Chart components display static data or placeholder content
   - Form elements are presentational only

6. **Animations**: Subtle hover effects and transitions were added where appropriate, but complex animations from Figma may have been simplified for implementation.

7. **Browser Compatibility**: The implementation targets modern browsers (Chrome, Firefox, Safari, Edge) with ES6+ support.

8. **Content**: All text content matches the Figma design. Placeholder or sample data is used where dynamic content would be expected.

## Ambiguities Encountered

When certain aspects of the design were unclear or ambiguous, the following reasonable assumptions were made:

1. **Chart/Graph Implementation**: The Figma design showed static chart images for market data visualization. Since no specific charting library or interactive behavior was specified, I implemented these as static images matching the design. In a production environment, these would be replaced with interactive charting libraries (e.g., Chart.js, Recharts, or TradingView widgets) connected to real-time data sources.

2. **Video Content**: Video sections in the design were represented as static frames. Without explicit video source requirements or player specifications, I implemented these sections using static images that match the design. In production, these would be implemented using HTML5 video players or embedded video solutions with proper controls and responsive behavior.

## What I Would Improve With More Time

1. **Performance Optimization**
   - Implement code splitting and lazy loading for components
   - Optimize images with next-gen formats (WebP, AVIF) and responsive images
   - Add image lazy loading with Intersection Observer
   - Implement virtual scrolling for long lists if needed

2. **Accessibility**
   - Enhanced ARIA labels and semantic HTML
   - Comprehensive keyboard navigation support
   - Screen reader optimization
   - Focus management and visible focus indicators
   - Color contrast verification for WCAG compliance

3. **Testing**
   - Unit tests with Vitest for utility functions
   - Component tests with React Testing Library
   - Visual regression testing
   - Cross-browser testing automation

4. **Code Quality**
   - More comprehensive TypeScript types and interfaces
   - Extract reusable hooks for common patterns
   - Better error boundaries and error handling
   - Consistent code formatting with Prettier
   - Pre-commit hooks with Husky for quality checks

5. **Features & Polish**
   - Smooth scroll animations with Intersection Observer
   - Parallax effects where appropriate
   - Loading states and skeleton screens
   - Form validation if interactive forms are needed
   - Analytics integration hooks

6. **Developer Experience**
   - Storybook for component documentation and visual testing
   - Better component prop documentation
   - Development environment improvements
   - Build optimization and bundle analysis

7. **Design Fidelity**
   - Pixel-perfect spacing and alignment verification
   - Exact color matching with design tokens
   - Animation timing and easing curve matching
   - Responsive breakpoint refinement

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
