## 🍱 Tiffin Service Platform
Full-stack tiffin booking web app built using **Next.js (frontend)** and **NestJS (backend)**.

### 🌐 Live URLs
- Frontend (GitHub Pages): https://pareshgehlot.github.io/tiffin-service
- Backend (Render): https://tiffin-service-api.onrender.com

### 🧩 Tech Stack
| Layer | Technology |
|-------|-------------|
| Frontend | Next.js + TailwindCSS |
| Backend | NestJS + MongoDB |
| Auth | JWT + Role-based Guards |
| Payments | Stripe + Interac |
| Deployment | GitHub Pages + Render |

### 🔐 Default Admin
- **Email:** gehlot.paresh2@gmail.com  
- **Password:** Tiffin@Secure2025!  
You can change this in backend `.env`.

### 👥 User Roles
- **Super Admin:** Manage all users, menus, orders, and settings  
- **Admin:** Manage tiffin menus, orders, and deliveries  
- **Customer:** Place orders, view history  
- **Delivery:** View assigned deliveries and update status  

### ⚙️ Commands
```bash
# Frontend
cd frontend
npm install
npm run deploy  # publishes to GitHub Pages

# Backend
cd ../backend
npm install
npm run build
npm run start:prod
```

### 🌱 Environment Configuration
Create a `.env` file in `backend/` based on `.env.example` and provide:
- `FRONTEND_URL`
- `MONGO_URI`
- `JWT_SECRET` and `JWT_REFRESH_SECRET`
- `STRIPE_SECRET_KEY`, `INTERAC_EMAIL`
- `ADMIN_EMAIL`, `ADMIN_PASSWORD`

For the frontend deployment, configure `NEXT_PUBLIC_API_URL=https://tiffin-service-api.onrender.com/api` so static pages call the hosted API.

### 🚀 Deployment Notes
- The frontend uses `next export` with `basePath` and `assetPrefix` set to `/tiffin-service`, producing static assets compatible with GitHub Pages.
- The backend exposes REST endpoints under `/api/*`, enables CORS for the GitHub Pages origin, and seeds the default super admin on startup.
- Render build command: `npm install && npm run build`
- Render start command: `npm run start:prod`
