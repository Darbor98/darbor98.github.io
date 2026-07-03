// ==== BUILD ==== //
//
// Modern replacement for the old Gulp 3 pipeline.
// Compiles SCSS -> CSS (dart-sass) and bundles JS (esbuild) into /assets,
// exactly where the theme's HTML expects them (see _includes/core/head.html
// and _includes/core/scripts.html).
//
// Usage:
//   node build.mjs            build once
//   node build.mjs --watch    build and rebuild on change

import * as sass from 'sass';
import esbuild from 'esbuild';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

const watch = process.argv.includes('--watch');

const styleEntries = [
  { src: '_scss/styles.scss', dest: 'assets/styles.css' },
  { src: '_scss/styles-dark.scss', dest: 'assets/styles-dark.css' },
];

function buildStyles() {
  for (const { src, dest } of styleEntries) {
    try {
      const result = sass.compile(src, {
        style: 'compressed',
        sourceMap: true,
        sourceMapIncludeSources: true,
        loadPaths: ['node_modules'],
        // The theme still uses `@import` and Open Color still uses `map-get`.
        // Both work fine under Dart Sass today; this just quiets the noise.
        // TODO (optional, not urgent): migrate `@import` to `@use`/`@forward`.
        silenceDeprecations: ['import', 'global-builtin'],
      });
      mkdirSync(dirname(dest), { recursive: true });
      writeFileSync(dest, `${result.css}\n/*# sourceMappingURL=${dest.split('/').pop()}.map */\n`);
      writeFileSync(`${dest}.map`, JSON.stringify(result.sourceMap));
      console.log(`✓ styles  ${src} -> ${dest}`);
    } catch (err) {
      console.error(`✗ styles  ${src}`);
      console.error(err.message);
      if (!watch) process.exitCode = 1;
    }
  }
}

const esbuildOptions = {
  entryPoints: ['_js/entry.js'],
  outfile: 'assets/scripts.js',
  bundle: true,
  minify: true,
  sourcemap: true,
  format: 'iife',
  target: ['es2018'],
  logLevel: 'info',
};

async function buildScripts() {
  try {
    await esbuild.build(esbuildOptions);
    console.log('✓ scripts _js/entry.js -> assets/scripts.js');
  } catch (err) {
    console.error('✗ scripts');
    if (!watch) process.exitCode = 1;
  }
}

async function run() {
  buildStyles();
  await buildScripts();
}

if (watch) {
  const chokidar = await import('chokidar');
  await run();
  chokidar.watch(['_scss/**/*.scss'], { ignoreInitial: true }).on('all', buildStyles);
  const ctx = await esbuild.context(esbuildOptions);
  await ctx.watch();
  console.log('Watching for changes in _scss and _js...');
} else {
  await run();
}
