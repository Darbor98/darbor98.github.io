// ==== ENTRY ==== //
//
// This file replaces the old Gulp "scripts-bundle" task. It bundles, in order:
// 1. the smooth-scroll polyfill (used globally as `SmoothScroll` by core.js)
// 2. the theme's core.js
// 3. the theme's custom.js (empty by default; add your own JS here)
//
// esbuild concatenates these into a single IIFE at assets/scripts.js.

import 'smooth-scroll/dist/smooth-scroll.polyfills.min.js';
import './core.js';
import './custom.js';
