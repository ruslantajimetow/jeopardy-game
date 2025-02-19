-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "questions" JSONB[],

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);
