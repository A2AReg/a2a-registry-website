# Agent-to-Agent Registry

## Overview

The A2A Registry is an enterprise-grade platform for discovering and managing AI agents across different frameworks, companies, and cloud providers. Built as "Docker Hub for AI Agents," it provides a centralized catalog for agent discovery, semantic search capabilities, granular access control with OAuth 2.0, and cross-registry federation. The application serves as a professional landing page showcasing the registry's capabilities with a modern, enterprise-focused design inspired by developer tools like GitHub and Stripe.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
**React 18 + TypeScript Single Page Application**: Built using modern React with TypeScript for type safety and maintainability. Uses Vite as the build tool for fast development and optimized production builds.

**Component-Based Design System**: Implements shadcn/ui component library with Radix UI primitives for accessibility and consistency. Components follow atomic design principles with reusable UI elements, feature sections, and layout containers.

**Styling Framework**: Tailwind CSS with custom design tokens for enterprise aesthetics. Configured with custom color palette (deep blue primary, emerald green accents), Inter font family, and consistent spacing scales.

**State Management**: TanStack React Query for server state management and API interactions. Wouter for lightweight client-side routing.

### Backend Architecture
**Express.js Server**: Node.js backend with Express framework using ES modules. Configured for development with Vite integration and production builds with esbuild.

**Modular Storage Interface**: Abstracted storage layer with IStorage interface allowing for multiple implementations. Currently implements in-memory storage with plans for database integration.

**API Structure**: RESTful API design with `/api` prefix for all endpoints. Includes middleware for request logging, error handling, and JSON parsing.

### Data Storage Solutions
**Drizzle ORM with PostgreSQL**: Database schema management using Drizzle ORM configured for PostgreSQL. Includes user authentication schema with username/password fields and UUID primary keys.

**Session Management**: PostgreSQL session storage using connect-pg-simple for secure session handling.

**Migration System**: Drizzle Kit for database migrations and schema synchronization.

### Authentication and Authorization
**User Management**: Basic user authentication system with username/password credentials. Database schema includes user table with unique constraints and password hashing capabilities.

**Security Middleware**: Request logging and error handling middleware. Plans for OAuth 2.0 client credentials flow for enterprise agent access control.

### Design and User Experience
**Enterprise Design Language**: Professional aesthetic drawing inspiration from GitHub, Stripe, and Linear. Uses consistent typography hierarchy, subtle animations, and accessibility-first component design.

**Responsive Layout**: Mobile-first design with Tailwind's responsive utilities. Consistent container sizing and spacing across all screen sizes.

**Performance Optimization**: Code splitting with React lazy loading, optimized asset bundling with Vite, and efficient component re-rendering patterns.

## External Dependencies

**UI Component Libraries**: Radix UI for accessible component primitives, Lucide React for consistent iconography, shadcn/ui for enterprise design system components.

**Database and ORM**: PostgreSQL as primary database, Drizzle ORM for type-safe database operations, Neon Database serverless PostgreSQL integration.

**Development Tools**: Vite for fast development and building, TypeScript for type safety, Tailwind CSS for utility-first styling, ESBuild for production bundling.

**Runtime and Hosting**: Node.js runtime environment, Express.js web framework, support for Replit deployment platform with specialized plugins and error handling.

**Fonts and Assets**: Google Fonts (Inter for body text, JetBrains Mono for code), custom SVG icons and graphics, optimized image assets for web performance.