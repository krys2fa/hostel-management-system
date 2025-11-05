import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Hash passwords
  const adminPassword = await bcrypt.hash("admin123", 10);
  const managerPassword = await bcrypt.hash("manager123", 10);
  const staffPassword = await bcrypt.hash("staff123", 10);
  const studentPassword = await bcrypt.hash("student123", 10);

  // Create Admin User
  const adminUser = await prisma.user.create({
    data: {
      email: "admin@hostel.edu",
      password: adminPassword,
      role: "ADMIN",
      profile: {
        create: {
          firstName: "John",
          lastName: "Admin",
          phone: "+1234567890",
          address: "123 Admin Street, Campus City",
        },
      },
    },
  });

  // Create Manager User
  const managerUser = await prisma.user.create({
    data: {
      email: "manager@hostel.edu",
      password: managerPassword,
      role: "MANAGER",
      profile: {
        create: {
          firstName: "Sarah",
          lastName: "Manager",
          phone: "+1234567891",
          address: "456 Manager Avenue, Campus City",
        },
      },
    },
  });

  // Create Staff Users
  const staffUser1 = await prisma.user.create({
    data: {
      email: "staff1@hostel.edu",
      password: staffPassword,
      role: "STAFF",
      profile: {
        create: {
          firstName: "Mike",
          lastName: "Johnson",
          phone: "+1234567892",
          address: "789 Staff Road, Campus City",
        },
      },
    },
  });

  const staffUser2 = await prisma.user.create({
    data: {
      email: "staff2@hostel.edu",
      password: staffPassword,
      role: "STAFF",
      profile: {
        create: {
          firstName: "Lisa",
          lastName: "Davis",
          phone: "+1234567893",
          address: "321 Staff Lane, Campus City",
        },
      },
    },
  });

  // Create Student Users
  const studentUser1 = await prisma.user.create({
    data: {
      email: "student1@hostel.edu",
      password: studentPassword,
      role: "STUDENT",
      profile: {
        create: {
          firstName: "Alex",
          lastName: "Thompson",
          phone: "+1234567894",
          address: "654 Student Street, Campus City",
        },
      },
    },
  });

  const studentUser2 = await prisma.user.create({
    data: {
      email: "student2@hostel.edu",
      password: studentPassword,
      role: "STUDENT",
      profile: {
        create: {
          firstName: "Emma",
          lastName: "Wilson",
          phone: "+1234567895",
          address: "987 Student Avenue, Campus City",
        },
      },
    },
  });

  const studentUser3 = await prisma.user.create({
    data: {
      email: "student3@hostel.edu",
      password: studentPassword,
      role: "STUDENT",
      profile: {
        create: {
          firstName: "James",
          lastName: "Brown",
          phone: "+1234567896",
          address: "147 Student Road, Campus City",
        },
      },
    },
  });

  // Create Staff Records
  const staff1 = await prisma.staff.create({
    data: {
      userId: staffUser1.id,
      employeeId: "EMP001",
      department: "Maintenance",
      position: "Maintenance Technician",
      salary: 35000,
      hireDate: new Date("2024-01-15"),
      status: "ACTIVE",
    },
  });

  const staff2 = await prisma.staff.create({
    data: {
      userId: staffUser2.id,
      employeeId: "EMP002",
      department: "Administration",
      position: "Administrative Assistant",
      salary: 32000,
      hireDate: new Date("2024-02-01"),
      status: "ACTIVE",
    },
  });

  // Create Rooms
  const room1 = await prisma.room.create({
    data: {
      roomNumber: "101",
      capacity: 2,
      type: "DOUBLE",
      status: "OCCUPIED",
      floor: "1",
      building: "Block A",
    },
  });

  const room2 = await prisma.room.create({
    data: {
      roomNumber: "102",
      capacity: 1,
      type: "SINGLE",
      status: "OCCUPIED",
      floor: "1",
      building: "Block A",
    },
  });

  const room3 = await prisma.room.create({
    data: {
      roomNumber: "201",
      capacity: 4,
      type: "DORMITORY",
      status: "AVAILABLE",
      floor: "2",
      building: "Block A",
    },
  });

  const room4 = await prisma.room.create({
    data: {
      roomNumber: "103",
      capacity: 3,
      type: "TRIPLE",
      status: "MAINTENANCE",
      floor: "1",
      building: "Block A",
    },
  });

  // Create Facilities
  await prisma.facility.createMany({
    data: [
      {
        name: "Bed",
        description: "Standard single bed with mattress",
        roomId: room1.id,
        status: "WORKING",
      },
      {
        name: "Desk",
        description: "Study desk with chair",
        roomId: room1.id,
        status: "WORKING",
      },
      {
        name: "Air Conditioning",
        description: "Wall-mounted AC unit",
        roomId: room1.id,
        status: "WORKING",
      },
      {
        name: "Bed",
        description: "Standard single bed with mattress",
        roomId: room2.id,
        status: "WORKING",
      },
      {
        name: "Desk",
        description: "Study desk with chair",
        roomId: room2.id,
        status: "WORKING",
      },
      {
        name: "Air Conditioning",
        description: "Wall-mounted AC unit",
        roomId: room2.id,
        status: "BROKEN",
      },
    ],
  });

  // Create Student Records
  const student1 = await prisma.student.create({
    data: {
      userId: studentUser1.id,
      studentId: "STU001",
      roomId: room1.id,
      enrollmentDate: new Date("2024-09-01"),
      graduationDate: new Date("2028-06-30"),
      status: "ACTIVE",
    },
  });

  const student2 = await prisma.student.create({
    data: {
      userId: studentUser2.id,
      studentId: "STU002",
      roomId: room1.id,
      enrollmentDate: new Date("2024-09-01"),
      graduationDate: new Date("2028-06-30"),
      status: "ACTIVE",
    },
  });

  const student3 = await prisma.student.create({
    data: {
      userId: studentUser3.id,
      studentId: "STU003",
      roomId: room2.id,
      enrollmentDate: new Date("2024-09-01"),
      graduationDate: new Date("2028-06-30"),
      status: "ACTIVE",
    },
  });

  // Create Payments
  await prisma.payment.createMany({
    data: [
      {
        studentId: student1.id,
        amount: 2500,
        type: "ACCOMMODATION",
        status: "PAID",
        dueDate: new Date("2024-09-01"),
        paidDate: new Date("2024-08-28"),
        description: "September 2024 accommodation fee",
      },
      {
        studentId: student1.id,
        amount: 500,
        type: "TUITION",
        status: "PENDING",
        dueDate: new Date("2024-10-01"),
        description: "October 2024 tuition fee",
      },
      {
        studentId: student2.id,
        amount: 2500,
        type: "ACCOMMODATION",
        status: "PAID",
        dueDate: new Date("2024-09-01"),
        paidDate: new Date("2024-08-30"),
        description: "September 2024 accommodation fee",
      },
      {
        studentId: student3.id,
        amount: 3000,
        type: "ACCOMMODATION",
        status: "OVERDUE",
        dueDate: new Date("2024-09-01"),
        description: "September 2024 accommodation fee",
      },
    ],
  });

  // Create Attendance Records
  await prisma.attendance.createMany({
    data: [
      {
        staffId: staff1.id,
        date: new Date("2024-10-30"),
        checkIn: new Date("2024-10-30T08:00:00"),
        checkOut: new Date("2024-10-30T17:00:00"),
        status: "PRESENT",
      },
      {
        staffId: staff1.id,
        date: new Date("2024-10-29"),
        checkIn: new Date("2024-10-29T08:15:00"),
        checkOut: new Date("2024-10-29T17:30:00"),
        status: "LATE",
      },
      {
        staffId: staff2.id,
        date: new Date("2024-10-30"),
        checkIn: new Date("2024-10-30T09:00:00"),
        checkOut: new Date("2024-10-30T18:00:00"),
        status: "PRESENT",
      },
      {
        staffId: staff2.id,
        date: new Date("2024-10-29"),
        status: "ABSENT",
      },
    ],
  });

  // Create Payroll Records
  await prisma.payroll.createMany({
    data: [
      {
        staffId: staff1.id,
        amount: 2916.67, // Monthly salary / 12
        period: "October 2024",
        status: "PAID",
        paidDate: new Date("2024-10-31"),
      },
      {
        staffId: staff2.id,
        amount: 2666.67,
        period: "October 2024",
        status: "PAID",
        paidDate: new Date("2024-10-31"),
      },
    ],
  });

  // Create Maintenance Requests
  await prisma.maintenanceRequest.createMany({
    data: [
      {
        studentId: student3.id,
        roomId: room2.id,
        description: "Air conditioning unit is not working properly",
        priority: "HIGH",
        status: "PENDING",
      },
      {
        studentId: student1.id,
        roomId: room1.id,
        description: "Light bulb in study area needs replacement",
        priority: "LOW",
        status: "APPROVED",
      },
    ],
  });

  // Create Leave Requests
  await prisma.leaveRequest.createMany({
    data: [
      {
        requesterId: studentUser1.id,
        type: "SICK",
        startDate: new Date("2024-11-05"),
        endDate: new Date("2024-11-07"),
        reason: "Medical appointment and recovery",
        status: "PENDING",
      },
      {
        requesterId: staffUser1.id,
        type: "ANNUAL",
        startDate: new Date("2024-12-20"),
        endDate: new Date("2024-12-27"),
        reason: "Family vacation",
        status: "APPROVED",
      },
    ],
  });

  // Create SMS Messages
  await prisma.sMSMessage.createMany({
    data: [
      {
        recipient: "+1234567894",
        message:
          "Reminder: Your accommodation fee of $500 is due on October 1st, 2024.",
        status: "DELIVERED",
        sentAt: new Date("2024-09-25"),
        type: "PAYMENT_REMINDER",
      },
      {
        recipient: "+1234567896",
        message:
          "Your maintenance request for room 102 AC unit has been received and is being processed.",
        status: "DELIVERED",
        sentAt: new Date("2024-10-30"),
        type: "MAINTENANCE_UPDATE",
      },
    ],
  });

  console.log("✅ Database seeding completed successfully!");
  console.log("\n🔐 Login Credentials:");
  console.log("Admin: admin@hostel.edu / admin123");
  console.log("Manager: manager@hostel.edu / manager123");
  console.log("Staff: staff1@hostel.edu / staff123");
  console.log("Staff: staff2@hostel.edu / staff123");
  console.log("Student: student1@hostel.edu / student123");
  console.log("Student: student2@hostel.edu / student123");
  console.log("Student: student3@hostel.edu / student123");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
