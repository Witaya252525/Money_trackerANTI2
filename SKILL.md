---
name: Money Tracker Development
description: Comprehensive guide for developing and maintaining the Money Tracker application.
version: 1.0.0
---

# Money Tracker Development Guide

## Purpose
This guide provides instructions for setting up, running, and developing the Money Tracker application (`Money_trackerANTI2`). It covers the technology stack, project structure, and database management procedures.

## Technology Stack
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database**: [SQLite](https://www.sqlite.org/) (via `better-sqlite3`)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/) (Primitives)
  - [Lucide React](https://lucide.dev/) (Icons)
  - [Recharts](https://recharts.org/) (Charts)
- **Validation**: [Zod](https://zod.dev/) & React Hook Form

## Prerequisites
- **Node.js**: Ensure Node.js (v20+ recommended) is installed.
- **npm**: Package manager.

## Setup Instructions

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Environment Configuration
Ensure `.env.local` exists in the root directory. It should contain:
```env
DATABASE_URL="sqlite.db"
# Add other environment variables as needed
```

### 3. Database Setup
The project uses Drizzle ORM with SQLite.
- **Schema Location**: `db/schema.ts`
- **Push Schema Changes**: To apply changes from `schema.ts` to the database:
  ```bash
  npx drizzle-kit push
  ```
- **View Database**: Open Drizzle Studio to inspect data:
  ```bash
  npx drizzle-kit studio
  ```

### 4. Running Development Server
Start the development server:
```bash
npm run dev
```
The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure
- **`app/`**: Next.js App Router pages and layouts.
  - `page.tsx`: Main dashboard entry point.
- **`components/`**: Reusable UI components.
  - `dashboard/`: specific components for the dashboard (OverviewCards, TransactionForm, etc.).
  - `ui/`: Shared UI components (mostly Shadcn/Radix wrappers).
- **`db/`**: Database configuration and schema definitions.
  - `schema.ts`: Drizzle schema definition.
- **`actions/`**: Server actions for data mutations (if applicable).
- **`lib/`, `utils/`**: Helper functions and utilities.
- **`public/`**: Static assets.

## Common Tasks
- **Add a new component**: Run `npx shadcn@latest add [component-name]` (if configured) or create manually in `components/ui`.
- **Modify Database**: Edit `db/schema.ts`, then run `npx drizzle-kit push`.
