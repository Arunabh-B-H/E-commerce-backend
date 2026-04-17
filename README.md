# E-Commerce Backend System

Secure and scalable backend built with Node.js, Express, and MongoDB.

## Features
- **JWT Authentication**: Secure token-based access.
- **Role-Based Access Control (RBAC)**: Roles for `admin`, `user`, and `guest`.
- **Product Management**: CRUD operations with search and filtering by name, category, or price.
- **Order Management**: Secure order placement and tracking.
- **User Profiles**: Manage personal information.
- **Predictive Analytics**: Integrated mock recommendation engine (Simulating RapidMiner API).
- **Security**: Password hashing with bcryptjs and input validation.

## Folder Structure
```
ecommerce-backend/
├── index.js              # Server entry point
├── config/               # Database connection
├── controllers/          # Business logic
├── models/               # MongoDB Schemas
├── routes/               # API endpoints
├── middleware/           # Auth and Error handling
└── .env                  # Environment configurations
```

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure `.env` with your `MONGO_URI` and `JWT_SECRET`.
3. Run the server:
   ```bash
   npm run dev
   ```

## API Endpoints
- **Auth**: `/api/auth/register`, `/api/auth/login`
- **Products**: `/api/products` (GET, POST, PUT, DELETE)
- **Orders**: `/api/orders` (GET, POST, PUT)
- **Profile**: `/api/users/profile` (GET, PUT, DELETE)
- **Analytics**: `/api/analytics/recommendations/:userId` (GET)
