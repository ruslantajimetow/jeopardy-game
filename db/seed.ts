import { PrismaClient } from '@prisma/client';
import { jeopardyCategories } from './sample-data';

async function main() {
  const prisma = new PrismaClient();
  await prisma.questions.deleteMany();
  await prisma.user.deleteMany();

  await prisma.questions.createMany({ data: jeopardyCategories.questions });
  await prisma.user.createMany({ data: jeopardyCategories.users });

  console.log('data seeded');
}

main();
