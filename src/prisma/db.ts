import { PrismaClient } from "@prisma/client"

const globadForPrisma = global as unknown as { prisma: PrismaClient}

export const prisma = globadForPrisma.prisma || new PrismaClient({
  log: ["query"]
})

if (process.env.NODE_ENV !== "production") {
  globadForPrisma.prisma = prisma
}