# Personal Portfolio Application

## Overview

This is a modern, full-stack personal portfolio website built for Ahana Kulkarni, showcasing multi-disciplinary creative work in UI/UX Design, Frontend Development, and Scriptwriting. The application features a responsive design with smooth animations, contact forms, and project galleries.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API endpoints
- **Database**: PostgreSQL with Neon serverless adapter
- **ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod for runtime type validation

### Data Storage Solutions
- **Primary Database**: PostgreSQL (configured for Neon serverless)
- **Schema Management**: Drizzle migrations with automatic schema generation
- **Connection Pooling**: Neon serverless connection pooling
- **Development Storage**: In-memory storage implementation for development

## Key Components

### Database Schema
Located in `shared/schema.ts`:
- **Users**: Authentication system with username/password fields
- Schema uses Drizzle ORM with PostgreSQL dialect
- Zod validation schemas for type safety

### Frontend Features
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Navigation**: Smooth scrolling navigation with fixed header
- **Hero Section**: Personal branding with avatar and specialties showcase
- **About Section**: Skills showcase with categorized expertise
- **Projects Gallery**: Filterable project showcase with category-based navigation
- **Contact Forms**: Multi-field contact form with project type and budget selection
- **Footer**: Social media links and additional navigation

### Backend API Structure
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Routes**: Modular route registration system in `server/routes.ts`
- **Middleware**: Request logging and error handling
- **Development Setup**: Vite integration for hot module replacement

## Data Flow

### Frontend to Backend
1. Client makes API requests to `/api/*` endpoints
2. Express server processes requests through registered routes
3. Business logic interacts with storage interface
4. Responses returned as JSON with proper error handling

### Development Workflow
1. Vite serves frontend with hot reload
2. Express server handles API routes
3. Drizzle manages database schema and migrations
4. TypeScript provides end-to-end type safety

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI components
- **Styling**: Tailwind CSS with PostCSS processing
- **Form Handling**: React Hook Form with Zod resolvers
- **Icons**: Lucide React icon library
- **Date Utilities**: date-fns for date manipulation

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL adapter
- **ORM**: Drizzle ORM with PostgreSQL support
- **Validation**: Zod for runtime type checking
- **Build Tools**: ESBuild for production bundling

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Full type coverage across client and server
- **Replit Integration**: Cartographer plugin for Replit environment

## Deployment Strategy

### Development
- Vite dev server with Express backend
- Hot module replacement for rapid development
- In-memory storage for testing

### Production
1. **Frontend Build**: Vite builds optimized React bundle to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Neon PostgreSQL with connection pooling
4. **Environment**: Node.js production server

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string for Neon
- `NODE_ENV`: Environment detection for development features

## Changelog

Changelog:
- July 06, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.