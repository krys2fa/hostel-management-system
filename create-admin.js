import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createAdminUser() {
  try {
    const hashedPassword = await bcrypt.hash('admin123', 10);

    const user = await prisma.user.create({
      data: {
        email: 'admin@hostel.com',
        password: hashedPassword,
        role: 'ADMIN',
        profile: {
          create: {
            firstName: 'Admin',
            lastName: 'User',
          },
        },
      },
    });

    console.log('Admin user created successfully:', user.email);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();