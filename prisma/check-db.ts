import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite } from '@prisma/adapter-better-sqlite3'
import Database from 'better-sqlite3'
import path from 'path'

const connection = new Database(path.join(__dirname, 'dev.db'))
const adapter = new PrismaBetterSqlite(connection)
const prisma = new PrismaClient({ adapter })

async function main() {
  // Fetch all listings and include their related images
  const listings = await prisma.listing.findMany({
    include: {
      images: true,
    },
  })

  console.log('Current Listings in Database:')
  console.dir(listings, { depth: null })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())