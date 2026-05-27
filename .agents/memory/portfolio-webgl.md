---
name: Portfolio WebGL fallback
description: Why the hero shows CSS stars in preview but Three.js in real browsers
---

The Replit sandbox has no GPU, so `THREE.WebGLRenderer` always throws "Error creating WebGL context". `HeroErrorBoundary` (class component) catches this and renders `HeroFallback` — a CSS-only animated starfield.

In real browsers (Chrome/Firefox/Safari with GPU), the full Three.js space scene with rotating stars, nebulae, and parallax mountains renders correctly.

**Why:** Error boundaries must be class components in React. The `HeroErrorBoundary` uses `getDerivedStateFromError` to catch the synchronous throw from Three.js initialization.

**How to apply:** Always keep HeroSection wrapped in HeroErrorBoundary. If adding new WebGL features, test in a real browser, not the Replit preview.
