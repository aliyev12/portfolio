---
title: "Reminders App"
thumbnail:
  url: https://placehold.co/800x450/6366f1/ffffff/png?text=Reminders+App
  alt: Reminders App Thumbnail
mainImage:
  url: https://placehold.co/1600x900/6366f1/ffffff/png?text=Reminders+App
  alt: Reminders App Dashboard
additionalImages: []
projectURL: "https://reminders.aaliyev.com"
githubRepoLinks:
  - "https://github.com/aliyev12/reminders-client"
  - "https://github.com/aliyev12/reminders-server"
excerpt: "A full-stack reminder management system with multi-channel notifications, intelligent alerts, and recurring reminders—built with modern React patterns and real-time server state synchronization."
tags: ["React", "TypeScript", "TanStack Router", "TanStack Query", "TanStack Store", "Vite", "better-auth", "Zod"]
weight: 3
status: published
slug: reminders
---

# Reminders App

A sophisticated reminder management application designed for users who need flexible, multi-channel notification capabilities with intelligent pre-reminder alerts and recurring event support.

## Technical Architecture

The Reminders App showcases a **modern React architecture** built with cutting-edge state management patterns and developer experience optimizations:

### Frontend Stack
- **TanStack Router**: File-based routing with automatic code-splitting for optimal bundle sizes
- **TanStack Query**: Server state management with automatic caching, background refetching, and optimistic updates
- **TanStack Store**: Reactive observable stores for local UI state (modes, alerts, forms, dialogs)
- **better-auth**: Cookie-based authentication with secure credential management
- **Vite**: Lightning-fast development server and optimized production builds
- **Zod**: Runtime type validation for forms and API responses

### State Management Strategy
The application uses a **hybrid state management approach**:
- **Server state** via TanStack Query for all backend data (reminders, user settings)
- **Local state** via multiple TanStack Store instances for:
  - `reminderFormStore` - Form state with title, date, modes, alerts, recurring settings
  - `modeStore` / `modesStore` - Notification delivery channels (email, SMS, push)
  - `alertStore` / `alertsStore` - Pre-reminder alert configurations
  - `dialogStore` - Global modal dialog state

All stores are **synchronously reactive**, ensuring components re-render instantly on state changes without prop drilling or context nesting.

## Key Features

### 1. Multi-Channel Notifications
Users can configure multiple notification modes for each reminder:
- **Email notifications** with customizable addresses
- **SMS alerts** for critical reminders
- **Push notifications** for in-app alerts
- Dynamic mode management with add/remove capabilities

### 2. Intelligent Alert System
Pre-reminder alerts notify users before the actual reminder time:
- Configure alerts like "1 hour before", "1 day before", "1 week before"
- Multiple alerts per reminder (e.g., 1 week + 1 day + 1 hour)
- Reusable alert templates stored globally

### 3. Recurring Reminders
Support for recurring events with flexible scheduling:
- Daily, weekly, monthly, yearly patterns
- Custom recurrence rules
- Automatic generation of future instances

### 4. Form-Driven UX
Intuitive reminder creation flow with real-time validation:
- Zod schemas for bulletproof form validation
- Inline error messages with accessible feedback
- Modular form components (`UpdateModes`, `UpdateAlerts`)
- Auto-save and optimistic updates

## Technical Implementation

### Routing & Code-Splitting
File-based routing structure automatically generates optimized route chunks:
```
routes/
├── __root.tsx          # Root layout wrapper
├── index.tsx           # Home page
├── login/index.tsx     # Authentication
├── reminders/
│   ├── index.tsx       # Reminders list
│   └── new/index.tsx   # Create reminder
```

The TanStack Router plugin auto-generates the route tree at build time, ensuring type-safe navigation and lazy-loaded route components.

### Authentication Flow
Secure authentication via `better-auth` with:
- Cookie-based sessions (HttpOnly, SameSite)
- Credentials included in all fetch requests
- Environment-based server URL configuration
- Exported hooks: `useSession`, `signIn`, `signUp`, `signOut`

### Component Architecture
Modular component design with clear separation of concerns:
- **Layout components** (`Navbar`, `Footer`, `MobileNav`) for consistent UI
- **Feature components** (`ReminderForm`, `ModeForm`, `AlertForm`) for business logic
- **Common utilities** (`Dialog`, `Tile`, `Misc`) for reusable patterns

### CSS Architecture
**Design system-driven styling** with CSS custom properties:
- All colors defined in `:root` with `light-dark()` for automatic dark mode
- Spacing scale: `--spacing-xs` through `--spacing-2xl`
- Typography scale: `--fs-xs` through `--fs-2xl`
- BEM-style naming: `.ComponentName__element` for scoped styles
- Minimal color palette: `--primary`, `--secondary`, validation colors only

### Type Safety
End-to-end type safety with TypeScript strict mode:
```typescript
interface IMode {
  id: string;
  mode: string;    // "email" | "sms" | "push"
  address: string; // email address, phone number, etc.
}

interface ICreateReminder {
  title: string;
  date: Date;
  reminders: string[];      // mode IDs
  alerts: string[];         // alert IDs
  recurring?: RecurringConfig;
  description?: string;
}
```

Zod validation ensures runtime type checking matches compile-time types.

## Development Experience

### Developer Tools
- TanStack Router DevTools for route debugging
- TanStack Query DevTools for cache inspection
- Vite HMR for instant feedback
- Path alias `@` → `./src` for clean imports

### Build Optimizations
- Automatic code-splitting by route
- Tree-shaking for unused code elimination
- TypeScript strict mode with unused variable checking
- Environment variable validation at startup

## Future Roadmap

- **Calendar integration** with Google Calendar, Outlook sync
- **Smart scheduling** with ML-powered optimal reminder times
- **Team reminders** with shared notification groups
- **Analytics dashboard** showing reminder completion rates
- **Mobile apps** with native push notifications (React Native)
- **Voice commands** via browser Speech API
- **Geofencing** for location-based reminders
- **Attachment support** for reminder notes and files

---

This project demonstrates proficiency in modern React patterns, advanced state management, type-safe development workflows, and production-ready application architecture.
