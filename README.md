# Hostel Management System

A comprehensive hostel management system built with Next.js, Tailwind CSS, Prisma, and Neon.

## Features

- Student Management
- Staff Management
- Facility Management
- Payroll & Accounting
- SMS Integration (Arkesel)
- Leave Management
- Detailed Reporting
- Student Self-Service Portal

## Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Neon (PostgreSQL), Prisma ORM
- **Authentication**: NextAuth.js
- **Testing**: Jest, Playwright
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (Neon recommended)
- Arkesel SMS API account

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with:

   ```
   DATABASE_URL="your_neon_connection_string"
   NEXTAUTH_SECRET="your_secret_key"
   NEXTAUTH_URL="http://localhost:3000"
   ARKESEL_API_KEY="your_arkesel_api_key"
   ARKESEL_SENDER_ID="your_sender_id"
   ```

4. Set up the database:

   ```bash
   npx prisma migrate dev
   npx prisma generate
   npm run db:seed
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

### Seeded Data & Login Credentials

After running the seed script, the following test accounts will be available for login:

- **Admin**: `admin@hostel.edu` / `admin123`
- **Manager**: `manager@hostel.edu` / `manager123`
- **Staff**: `staff1@hostel.edu` / `staff123`
- **Staff**: `staff2@hostel.edu` / `staff123`
- **Student**: `student1@hostel.edu` / `student123`
- **Student**: `student2@hostel.edu` / `student123`
- **Student**: `student3@hostel.edu` / `student123`

The seed data includes:

- 7 users with different roles
- 4 rooms with various statuses
- 6 facilities across rooms
- 4 payment records
- 4 attendance records
- 2 payroll records
- 2 maintenance requests
- 2 leave requests
- 2 SMS messages

### Testing

- Unit tests: `npm run test`
- E2E tests: `npx playwright test`

### Deployment

Deploy to Vercel with the following environment variables set in Vercel dashboard.

## Project Structure

```
src/
├── app/                 # Next.js app router
├── components/          # Reusable components
├── lib/                 # Utility functions
├── types/               # TypeScript types
└── styles/              # Global styles
prisma/
├── schema.prisma        # Database schema
docs/
├── project-documentation.md  # Detailed documentation
```

## Roadmap

See `docs/project-documentation.md` for the 2-week development roadmap and detailed specifications.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

MIT
