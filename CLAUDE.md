# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 landing page project (atlas-lp) bootstrapped with `create-next-app`, using:
- **React 19** - Latest React with App Router
- **TypeScript 5** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS with PostCSS integration
- **ESLint 9** - Code linting with Next.js configs

## Development Commands

### Core Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build production bundle
npm run start        # Start production server (after build)
npm run lint         # Run ESLint
```

## Architecture

### Project Structure
```
app/                    # Next.js App Router directory
  ├── layout.tsx       # Root layout with Geist fonts
  ├── page.tsx         # Home page (landing page)
  └── globals.css      # Global styles with Tailwind CSS v4
public/                 # Static assets (SVGs for logos, icons)
```

### Key Configuration Files
- `next.config.ts` - Next.js configuration (currently minimal)
- `tsconfig.json` - TypeScript with path alias `@/*` pointing to root
- `postcss.config.mjs` - Tailwind CSS v4 PostCSS plugin
- `eslint.config.mjs` - ESLint with Next.js TypeScript and Core Web Vitals configs

### Styling Approach
- **Tailwind CSS v4** with `@import "tailwindcss"` (not v3's `@tailwind` directives)
- **CSS Variables** for theming (background/foreground colors)
- **Dark mode** via `prefers-color-scheme` media query
- **Geist Sans & Geist Mono** fonts loaded via `next/font/google`

### Path Aliases
The `@/*` alias maps to the project root, so you can import files using `@/app/page` instead of relative paths.

## Technology Notes

### Next.js 16 Features
- Using **App Router** (not Pages Router)
- **React Server Components** by default
- Font optimization via `next/font/google`

### Tailwind CSS v4
- Uses new `@import "tailwindcss"` syntax instead of `@tailwind` directives
- CSS variables defined in `:root` and `@theme inline` for custom properties
- Dark mode automatically applied based on system preference
