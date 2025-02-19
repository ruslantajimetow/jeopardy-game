import { PrismaClient } from '@prisma/client';
import { jeopardyCategories } from './sample-data';

async function main() {
  const prisma = new PrismaClient();
  await prisma.questions.deleteMany();

  await prisma.questions.createMany({ data: jeopardyCategories.questions });

  console.log('data seeded');
}

main();
