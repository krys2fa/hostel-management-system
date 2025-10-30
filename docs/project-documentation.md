# Hostel Management System - Project Documentation

## Overview
This project is a comprehensive hostel management system built for educational institutions to manage students, staff, facilities, payroll, accounting, SMS communications, leave requests, and reporting. It includes a student self-service portal for enhanced user experience.

## Tech Stack
- **Frontend**: Next.js 14 (App Router), Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Neon (PostgreSQL), Prisma ORM
- **Deployment**: Vercel
- **SMS Integration**: Arkesel API
- **Testing**: Jest (unit tests), Playwright (E2E tests)
- **Template**: Dattaable Dashboard Template (converted to Next.js components)

## Core Features

### 1. Student Management
- Student registration and profile management
- Room assignment and allocation
- Payment tracking and billing
- Academic information integration
- Check-in/check-out management

### 2. Staff Management
- Staff registration and profile management
- Role-based access control (Admin, Manager, Staff)
- Attendance tracking
- Performance management

### 3. Facility Management
- Room inventory and maintenance tracking
- Facility booking and scheduling
- Maintenance request handling
- Asset management

### 4. Payroll & Accounting Management
- Salary calculation and processing
- Expense tracking
- Payment processing integration
- Financial reporting

### 5. SMS Management
- Automated SMS notifications for payments, maintenance, events
- Bulk messaging capabilities
- SMS templates and scheduling
- Delivery status tracking

### 6. Leave Management
- Student leave request system
- Staff leave management
- Approval workflows
- Leave balance tracking

### 7. Detailed Reporting
- Occupancy trends analysis
- Payment defaulters identification
- Staff attendance reports
- Expense breakdown analysis
- Custom report generation

### 8. Student Self-Service Portal
- Room assignment viewing
- Payment history access
- Maintenance request submission
- Leave request submission
- Profile management

## Additional Features
- **Notifications**: Email and in-app notifications
- **Inventory Management**: Hostel supplies and equipment tracking
- **Event Management**: Hostel events and announcements
- **Security**: Two-factor authentication, role-based permissions
- **Analytics Dashboard**: Real-time metrics and KPIs
- **Backup & Recovery**: Automated database backups
- **Multi-tenancy**: Support for multiple hostels/institutions
- **Mobile Responsiveness**: Optimized for mobile devices
- **API Documentation**: Swagger/OpenAPI integration

## Database Schema (Prisma)

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  role      Role
  profile   Profile?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Profile {
  id        String   @id @default(cuid())
  userId    String   @unique
  firstName String
  lastName  String
  phone     String?
  address   String?
  user      User     @relation(fields: [userId], references: [id])
}

model Student {
  id            String        @id @default(cuid())
  userId        String        @unique
  studentId     String        @unique
  roomId        String?
  enrollmentDate DateTime
  graduationDate DateTime?
  status        StudentStatus
  payments      Payment[]
  leaveRequests LeaveRequest[]
  maintenanceRequests MaintenanceRequest[]
  user          User          @relation(fields: [userId], references: [id])
  room          Room?         @relation(fields: [roomId], references: [id])
}

model Staff {
  id            String        @id @default(cuid())
  userId        String        @unique
  employeeId    String        @unique
  department    String
  position      String
  salary        Float
  hireDate      DateTime
  status        StaffStatus
  attendance    Attendance[]
  leaveRequests LeaveRequest[]
  payrolls      Payroll[]
  user          User          @relation(fields: [userId], references: [id])
}

model Room {
  id          String     @id @default(cuid())
  roomNumber  String     @unique
  capacity    Int
  type        RoomType
  status      RoomStatus
  floor       String
  building    String
  students    Student[]
  facilities  Facility[]
}

model Facility {
  id          String        @id @default(cuid())
  name        String
  description String?
  roomId      String
  status      FacilityStatus
  room        Room          @relation(fields: [roomId], references: [id])
}

model Payment {
  id          String        @id @default(cuid())
  studentId   String
  amount      Float
  type        PaymentType
  status      PaymentStatus
  dueDate     DateTime
  paidDate    DateTime?
  description String?
  student     Student       @relation(fields: [studentId], references: [id])
}

model Payroll {
  id        String   @id @default(cuid())
  staffId   String
  amount    Float
  period    String
  status    PayrollStatus
  paidDate  DateTime?
  staff     Staff    @relation(fields: [staffId], references: [id])
}

model Attendance {
  id        String            @id @default(cuid())
  staffId   String
  date      DateTime
  checkIn   DateTime?
  checkOut  DateTime?
  status    AttendanceStatus
  staff     Staff             @relation(fields: [staffId], references: [id])
}

model LeaveRequest {
  id          String       @id @default(cuid())
  requesterId String
  type        LeaveType
  startDate   DateTime
  endDate     DateTime
  reason      String
  status      RequestStatus
  requester   User         @relation(fields: [requesterId], references: [id])
}

model MaintenanceRequest {
  id          String       @id @default(cuid())
  studentId   String
  roomId      String
  description String
  priority    Priority
  status      RequestStatus
  createdAt   DateTime     @default(now())
  student     Student      @relation(fields: [studentId], references: [id])
  room        Room         @relation(fields: [roomId], references: [id])
}

model SMSMessage {
  id          String      @id @default(cuid())
  recipient   String
  message     String
  status      SMSStatus
  sentAt      DateTime?
  type        SMSType
}

model Report {
  id          String     @id @default(cuid())
  name        String
  type        ReportType
  parameters  Json
  generatedAt DateTime   @default(now())
  data        Json
}

enum Role {
  ADMIN
  MANAGER
  STAFF
  STUDENT
}

enum StudentStatus {
  ACTIVE
  INACTIVE
  GRADUATED
  SUSPENDED
}

enum StaffStatus {
  ACTIVE
  INACTIVE
  TERMINATED
}

enum RoomType {
  SINGLE
  DOUBLE
  TRIPLE
  DORMITORY
}

enum RoomStatus {
  AVAILABLE
  OCCUPIED
  MAINTENANCE
  UNAVAILABLE
}

enum FacilityStatus {
  WORKING
  BROKEN
  MAINTENANCE
}

enum PaymentType {
  TUITION
  ACCOMMODATION
  FEES
  OTHER
}

enum PaymentStatus {
  PENDING
  PAID
  OVERDUE
  CANCELLED
}

enum PayrollStatus {
  PENDING
  PROCESSED
  PAID
}

enum AttendanceStatus {
  PRESENT
  ABSENT
  LATE
  HALF_DAY
}

enum LeaveType {
  ANNUAL
  SICK
  EMERGENCY
  MATERNITY
  STUDY
}

enum RequestStatus {
  PENDING
  APPROVED
  REJECTED
  CANCELLED
}

enum Priority {
  LOW
  MEDIUM
  HIGH
  URGENT
}

enum SMSStatus {
  SENT
  DELIVERED
  FAILED
}

enum SMSType {
  PAYMENT_REMINDER
  MAINTENANCE_UPDATE
  EVENT_NOTIFICATION
  GENERAL
}

enum ReportType {
  OCCUPANCY
  PAYMENT_DEFAULTERS
  STAFF_ATTENDANCE
  EXPENSE_BREAKDOWN
  CUSTOM
}
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Students
- `GET /api/students` - List all students
- `POST /api/students` - Create new student
- `GET /api/students/[id]` - Get student details
- `PUT /api/students/[id]` - Update student
- `DELETE /api/students/[id]` - Delete student

### Staff
- `GET /api/staff` - List all staff
- `POST /api/staff` - Create new staff
- `GET /api/staff/[id]` - Get staff details
- `PUT /api/staff/[id]` - Update staff
- `DELETE /api/staff/[id]` - Delete staff

### Rooms
- `GET /api/rooms` - List all rooms
- `POST /api/rooms` - Create new room
- `GET /api/rooms/[id]` - Get room details
- `PUT /api/rooms/[id]` - Update room

### Payments
- `GET /api/payments` - List all payments
- `POST /api/payments` - Create new payment
- `GET /api/payments/[id]` - Get payment details
- `PUT /api/payments/[id]` - Update payment

### SMS
- `POST /api/sms/send` - Send SMS
- `GET /api/sms/history` - Get SMS history

### Reports
- `GET /api/reports` - List available reports
- `POST /api/reports/generate` - Generate report
- `GET /api/reports/[id]` - Get report data

## 2-Week Development Roadmap

### Week 1: Foundation & Core Setup
**Day 1-2: Project Setup & Authentication**
- Initialize Next.js project with TypeScript
- Set up Tailwind CSS
- Configure Prisma with Neon database
- Implement authentication system (NextAuth.js)
- Create basic user roles and permissions

**Day 3-4: Database Schema & Basic CRUD**
- Define and migrate Prisma schema
- Create API routes for basic CRUD operations
- Implement user management (students, staff)
- Set up room and facility management

**Day 5-7: Core Features Implementation**
- Student management module
- Staff management module
- Room assignment functionality
- Basic payment tracking
- Leave request system

### Week 2: Advanced Features & Testing
**Day 8-10: Advanced Features**
- Payroll and accounting management
- SMS integration with Arkesel
- Reporting system (basic reports)
- Student self-service portal

**Day 11-12: UI/UX & Template Integration**
- Convert Dattaable template to Next.js components
- Implement responsive dashboard layouts
- Add data visualization components
- Polish user interfaces

**Day 13-14: Testing & Deployment**
- Write unit tests with Jest
- Implement E2E tests with Playwright
- Performance optimization
- Deploy to Vercel
- Final testing and bug fixes

## Testing Strategy

### Unit Tests (Jest)
- Component testing
- Utility function testing
- API route testing
- Database model testing

### E2E Tests (Playwright)
- User authentication flow
- Student registration and management
- Payment processing
- Report generation
- SMS sending functionality

## Deployment & Infrastructure

### Vercel Deployment
- Automatic deployments from GitHub
- Environment variable management
- Domain configuration
- Performance monitoring

### Neon Database
- Serverless PostgreSQL
- Automatic scaling
- Built-in backup and recovery
- Connection pooling

### Arkesel SMS Integration
- API key configuration
- SMS template management
- Delivery tracking
- Bulk messaging support

## Pricing & Cost Estimation

### Development Costs
- **Developer Time**: 2 weeks × 40 hours/week × $50/hour = $4,000
- **Design/Mockups**: $500 (if outsourced)
- **Total Development**: ~$4,500

### Infrastructure Costs (Monthly)
- **Vercel**: Free tier (up to 100GB bandwidth, suitable for MVP)
- **Neon**: Free tier (512MB storage, 100 hours compute time)
- **Arkesel SMS**: ~$0.05 per SMS (depending on volume)
- **Domain**: ~$10-20/year

### Operational Costs
- **Maintenance**: 10-20% of development cost annually
- **SMS Costs**: Variable based on usage (e.g., 1000 SMS/month = $50)
- **Database Scaling**: As needed when exceeding free tiers

## Security Considerations
- JWT-based authentication
- Role-based access control
- Input validation and sanitization
- SQL injection prevention (Prisma ORM)
- HTTPS encryption
- Data encryption at rest
- Regular security audits

## Performance Optimization
- Database query optimization
- Image optimization
- Code splitting
- Caching strategies
- CDN integration

## Future Enhancements
- Mobile app development
- AI-powered analytics
- Integration with learning management systems
- Multi-language support
- Advanced notification systems
- Blockchain-based payment verification

## Conclusion
This hostel management system provides a comprehensive solution for educational institutions to efficiently manage their accommodation facilities. The 2-week timeline focuses on delivering core functionality with room for future enhancements. The chosen tech stack ensures scalability, maintainability, and cost-effectiveness.