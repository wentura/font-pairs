# Development Guidelines & Best Practices

This document outlines the coding standards, best practices, and architectural rules established during the optimization of the Google Font Pairs project. These guidelines should be followed for all future development.

---

## 📜 **Table of Contents**

1. [Font Loading](#1-font-loading)
2. [CSS & Styling](#2-css--styling)
3. [Component Architecture](#3-component-architecture)
4. [TypeScript](#4-typescript)
5. [Accessibility](#5-accessibility)
6. [SEO & Metadata](#6-seo--metadata)
7. [Project Structure](#7-project-structure)
8. [Performance](#8-performance)
9. [Code Quality](#9-code-quality)

---

## 1. 🔤 Font Loading

### ✅ **DO: Use Next.js Font Optimization**

Always use `next/font/google` or `next/font/local` for font loading:

```typescript
// CORRECT: Self-hosted, optimized
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
});
```

### ❌ **DON'T: Use CSS @import for Google Fonts**

Avoid external CSS imports:

```css
/* WRONG: External request, render-blocking */
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
```

### 📌 **Rules**

- [ ] Load each font with **only the weights you need**
- [ ] Use `variable: '--font-name'` for CSS variable support
- [ ] Always specify `display: 'swap'` for better UX
- [ ] Use `subsets: ['latin']` (add others if needed)
- [ ] Load fonts at the **layout level** to make them available globally
- [ ] Combine all font `.variable` classNames in the root `<body>` element

### 💡 **Font Weight Mapping**

| Purpose | Recommended Weight |
|---------|-------------------|
| Headings | 700 (bold) or 800 (extrabold) |
| Body text | 400 (regular) |
| Accents | 500 (medium) or 600 (semibold) |

---

## 2. 🎨 CSS & Styling

### ✅ **DO: Use CSS Variables for Fonts**

Define font families in `:root` and use CSS variables:

```css
/* CORRECT: Centralized font definitions */
:root {
  --font-inter: 'Inter', sans-serif;
  --font-lora: 'Lora', serif;
}
```

### ❌ **DON'T: Create Manual Font Classes**

Avoid creating individual font classes for each weight/style:

```css
/* WRONG: 600+ lines of redundant classes */
.inter-100 { font-family: 'Inter', sans-serif; font-weight: 100; }
.inter-200 { font-family: 'Inter', sans-serif; font-weight: 200; }
/* ... 500+ more lines ... */
```

### ✅ **DO: Use Tailwind CSS**

Leverage Tailwind for utility classes:

```jsx
// CORRECT
<div className="p-8 bg-neutral-50 rounded-xl shadow-sm">
  <h1 className="text-4xl font-bold text-gray-900">Title</h1>
</div>
```

### ❌ **DON'T: Write Custom CSS for Layout**

Avoid manual CSS for spacing, colors, etc.:

```css
/* WRONG: Tailwind can handle this */
.custom-card {
  padding: 2rem;
  background-color: #f9fafb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
```

### 📌 **CSS Rules**

- [ ] Keep `globals.css` **minimal** (< 100 lines)
- [ ] Use CSS variables **only** for font families
- [ ] All other styles should use **Tailwind classes**
- [ ] Add `scroll-behavior: smooth` to HTML for better UX
- [ ] Add `*:focus-visible` styles for accessibility
- [ ] Never use `!important` unless absolutely necessary

---

## 3. 🧩 Component Architecture

### ✅ **DO: Create Reusable Components**

Break UI into small, focused components:

```jsx
// CORRECT: Dedicated component
// app/components/FontCard.tsx
interface FontCardProps {
  pair: FontPair;
  index: number;
}

export default function FontCard({ pair }: FontCardProps) {
  return (
    <article className="p-8 bg-neutral-50 rounded-xl">
      {/* component logic */}
    </article>
  );
}
```

### ❌ **DON'T: Put Everything in Page Component**

Avoid monolithic page components:

```jsx
// WRONG: Everything in one file
// app/page.tsx
export default function Home() {
  // 200 lines of mixed concerns
  const fonts = [...]; // Data
  // Rendering logic
  // Styling
  // Business logic
}
```

### ✅ **DO: Separate Concerns**

Organize by responsibility:

```
app/
├── components/      # Reusable UI components
├── data/           # Static data and types
├── lib/            # Utility functions and services
└── page.tsx        # Page composition only
```

### 📌 **Component Rules**

- [ ] Components should be **single-purpose**
- [ ] Use **TypeScript interfaces** for props
- [ ] Keep components **small** (< 100 lines)
- [ ] Use **semantic HTML** (`<article>`, `<section>`, `<header>`, `<footer>`)
- [ ] Add **accessibility attributes** (aria-labels, role, etc.)
- [ ] Prefix component files with **PascalCase** (e.g., `FontCard.tsx`)

---

## 4. ⚡ TypeScript

### ✅ **DO: Use TypeScript Everywhere**

All new files should be `.ts` or `.tsx`:

```typescript
// CORRECT
interface User {
  id: string;
  name: string;
  email: string;
}

const user: User = { id: '1', name: 'John', email: 'john@example.com' };
```

### ❌ **DON'T: Use Plain JavaScript for New Files**

```javascript
// WRONG: No type safety
const user = { id: '1', name: 'John', email: 'john@example.com' };
```

### ✅ **DO: Define Interfaces for Data**

Create type definitions for complex data structures:

```typescript
// CORRECT
interface FontInfo {
  name: string;
  fontFamily: string;
  weight: number;
}

interface FontPair {
  id: string;
  heading: FontInfo;
  paragraph: FontInfo;
}

export const fontPairs: FontPair[] = [...];
```

### 📌 **TypeScript Rules**

- [ ] Always define **interfaces** for component props
- [ ] Use **type annotations** for function parameters
- [ ] Use `Record<string, Type>` for dynamic object access
- [ ] Use `ReactNode` for children props
- [ ] Use `Metadata` type from Next.js for metadata exports
- [ ] Run `npm run build` to verify **no type errors**

---

## 5. ♿ Accessibility

### ✅ **DO: Use Semantic HTML**

Use proper HTML elements:

```jsx
// CORRECT
<main>
  <header>
    <h1>Page Title</h1>
  </header>
  <article aria-labelledby="section-title">
    <h2 id="section-title">Section</h2>
    <p>Content</p>
  </article>
  <footer>Footer</footer>
</main>
```

### ❌ **DON'T: Use Divs for Everything**

```jsx
// WRONG: No semantic meaning
<div>
  <div>
    <div>Page Title</div>
  </div>
  <div>
    <div>Section</div>
    <div>Content</div>
  </div>
</div>
```

### ✅ **DO: Add ARIA Labels**

Add accessibility attributes where needed:

```jsx
// CORRECT
<article 
  aria-labelledby={`font-pair-${id}-title`}
  aria-describedby={`font-pair-${id}-description`}
>
  <h2 id={`font-pair-${id}-title`}>Title</h2>
  <p id={`font-pair-${id}-description`}>Description</p>
</article>
```

### ✅ **DO: Add Focus Styles**

Ensure keyboard navigation is visible:

```css
/* CORRECT */
*:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
```

### 📌 **Accessibility Rules**

- [ ] Always use `lang="en"` (or appropriate language) on `<html>`
- [ ] Use **semantic elements** (`<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`, `<footer>`)
- [ ] Add `aria-label` to interactive elements without text
- [ ] Add `aria-labelledby` or `aria-describedby` for complex components
- [ ] Ensure **color contrast** meets WCAG standards (4.5:1 for text)
- [ ] Use `alt` text for all images
- [ ] Test with keyboard navigation only

---

## 6. 🔍 SEO & Metadata

### ✅ **DO: Define Comprehensive Metadata**

Use Next.js 14 metadata API:

```typescript
// CORRECT
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title - Site Name',
  description: 'Clear, concise description under 160 characters',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Author Name' }],
  openGraph: {
    title: 'Open Graph Title',
    description: 'Open Graph Description',
    url: 'https://example.com/page',
    siteName: 'Site Name',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Title',
    description: 'Twitter Description',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### ❌ **DON'T: Use Generic Metadata**

```typescript
// WRONG: No SEO value
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
```

### 📌 **Metadata Rules**

- [ ] Title should be **descriptive** and include site name
- [ ] Description should be **< 160 characters**
- [ ] Include **keywords** array for search engines
- [ ] Always define **OpenGraph** metadata for social sharing
- [ ] Always define **Twitter** metadata
- [ ] Include **images** with proper dimensions (1200x630 for OG)
- [ ] Set `robots` to control indexing

---

## 7. 📁 Project Structure

### ✅ **DO: Follow This Structure**

```
project/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   ├── data/               # Static data and configurations
│   │   ├── fonts.ts
│   │   ├── constants.ts
│   │   └── ...
│   ├── lib/                # Utility functions and services
│   │   ├── fonts.ts        # Font loading (optional)
│   │   ├── api.ts
│   │   └── utils.ts
│   ├── types/              # TypeScript type definitions (if needed)
│   │   └── index.ts
│   ├── fonts/              # Local font files
│   │   ├── Font1.woff
│   │   └── Font2.woff
│   ├── globals.css         # Global styles only
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Page content
├── public/                # Static assets
│   ├── images/
│   ├── favicon.ico
│   └── og-image.png
├── types/                 # Global type declarations
│   └── css.d.ts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind configuration
├── next.config.mjs        # Next.js configuration
└── package.json
```

### ❌ **DON'T: Create Flat Structure**

```
# WRONG: No organization
project/
├── app/
│   ├── page.tsx          # 500+ lines
│   ├── globals.css       # 1000+ lines
│   └── layout.tsx
└── ...
```

### 📌 **Structure Rules**

- [ ] Use **lowercase kebab-case** for directories
- [ ] Use **PascalCase** for component files
- [ ] Use **lowercase** for utility/config files
- [ ] Keep **related files together** (co-location)
- [ ] Separate by **feature/domain**, not by file type
- [ ] Don't create directories with **only one file** (unless it's a special case)

---

## 8. ⚡ Performance

### ✅ **DO: Optimize Assets**

- Use Next.js Image component for images:

```jsx
// CORRECT
import Image from 'next/image';

<Image 
  src="/image.png" 
  alt="Description" 
  width={500} 
  height={300}
  priority={true}  // For above-the-fold images
/>
```

### ✅ **DO: Lazy Load Below-the-Fold Content**

```jsx
// CORRECT
import { Suspense } from 'react';

<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

### ✅ **DO: Use Font Optimization**

```typescript
// CORRECT
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],  // Only needed weights
  variable: '--font-inter',
  display: 'swap',
});
```

### 📌 **Performance Rules**

- [ ] **Minimize external requests** (fonts, APIs, etc.)
- [ ] **Self-host assets** when possible
- [ ] **Lazy load** non-critical content
- [ ] **Optimize images** (use next/image)
- [ ] **Reduce bundle size** (tree-shaking, code splitting)
- [ ] **Avoid large inline data** (move to separate files)
- [ ] **Use CSS variables** instead of duplicate classes
- [ ] **Test with Lighthouse** before deployment

---

## 9. ✨ Code Quality

### ✅ **DO: Write Clean Code**

- Use descriptive variable names
- Keep functions small (< 50 lines)
- Use consistent formatting
- Add comments for complex logic

### ✅ **DO: Use Consistent Naming**

```typescript
// CORRECT
interface UserProfile {
  userId: string;
  displayName: string;
  emailAddress: string;
}

const getUserProfile = (userId: string): UserProfile => {...};
```

### ❌ **DON'T: Use Generic Names**

```typescript
// WRONG: Unclear meaning
const x = getData();
const arr = [1, 2, 3];
const obj = { a: 1, b: 2 };
```

### 📌 **Code Quality Rules**

- [ ] Use **descriptive names** for variables, functions, components
- [ ] Keep **functions small** and single-purpose
- [ ] Use **consistent naming conventions**
- [ ] **Comment complex logic**, not obvious code
- [ ] **Remove dead code** and unused imports
- [ ] **Follow existing patterns** in the codebase
- [ ] **Test your changes** before committing

---

## 📝 **Pre-Commit Checklist**

Before committing any changes, verify:

- [ ] **Build succeeds**: `npm run build`
- [ ] **No TypeScript errors**
- [ ] **No linting errors**: `npm run lint`
- [ ] **Accessibility**: Semantic HTML, ARIA labels
- [ ] **Performance**: No large inline data, optimized assets
- [ ] **Structure**: Files in correct locations
- [ ] **Naming**: Consistent with existing patterns
- [ ] **Documentation**: README updated if needed

---

## 🎯 **Quick Reference Card**

### Font Loading
```typescript
import { Inter } from 'next/font/google';
const font = Inter({ subsets: ['latin'], weight: ['400'], variable: '--font-inter' });
```

### Component
```typescript
interface Props { data: Type; }
export default function Component({ data }: Props) { ... }
```

### Metadata
```typescript
import type { Metadata } from 'next';
export const metadata: Metadata = { title: '...', description: '...' };
```

### CSS
```css
:root { --font-name: 'Font', sans-serif; }
html { scroll-behavior: smooth; }
*:focus-visible { outline: 2px solid #3b82f6; }
```

---

## 🔗 **Resources**

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

*Last updated: 2026-06-16*
*Project: Google Font Pairs*
