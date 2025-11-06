# Tiffin Booking Platform

A full-stack blueprint for a subscription-based tiffin (meal) booking service. The repository contains a NestJS backend, a Next.js frontend, and Docker configuration for local development.

## Features

### Backend (NestJS)
- Modular architecture covering authentication, menus, plans, orders, payments, promotions, delivery, reviews, settings, notifications, analytics, and logs modules.
- MongoDB schemas defined with Mongoose for all core entities.
- Global validation, exception handling, and Swagger documentation scaffold.
- JWT-based auth service with refresh tokens and placeholder OAuth/Twilio integration points.
- Seed script to populate demo users, plans, and menu items.

### Frontend (Next.js + Tailwind CSS)
- Responsive, mobile-first UI with dark mode support.
- Customer portal pages: Home, Menu, Plans, Order flow, My Orders, Checkout, Login, Register.
- Admin dashboard and delivery partner view showcasing analytics and delivery assignments.
- Tailwind configuration and reusable layout components (navbar, footer).

### DevOps
- Dockerfiles for frontend and backend services.
- `docker-compose` file with MongoDB service for local development.

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn
- Docker (optional but recommended)

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run start:dev
```
Swagger docs available at `http://localhost:3000/api/docs` once running.

Run the seed script:
```bash
npm run seed
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Access the UI at `http://localhost:3000`.

### Docker Compose
```bash
docker-compose up --build
```

This will start the frontend on port 3000, backend on 3001, and MongoDB on 27017.

## Testing
- Backend unit testing scaffold via Jest: `npm test` inside `/backend`.
- Frontend linting: `npm run lint` inside `/frontend`.

## Project Structure
```
backend/
  src/
    common/
    config/
    modules/
    schemas/
frontend/
  app/
  components/
  public/
```

## Next Steps
- Implement real persistence by connecting services to the MongoDB schemas.
- Add authentication guards and integrate Google/Apple OAuth providers.
- Connect payments, maps, notifications, and storage providers.
- Expand unit and e2e tests.
