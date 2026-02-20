import { PrismaClient } from '@prisma/client'
import path from 'path'

// This helps Vercel find the SQLite file in the cloud
const dbPath = path.join(process.cwd(), 'prisma', 'dev.db')

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient({
  datasources: {
    db: {
      url: `file:${dbPath}`,
    },
  },
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma