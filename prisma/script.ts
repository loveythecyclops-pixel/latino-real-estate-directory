import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite } from '@prisma/adapter-better-sqlite3'
import Database from 'better-sqlite3'
import path from 'path'

const connection = new Database(path.join(__dirname, 'dev.db'))
const adapter = new PrismaBetterSqlite(connection)
const prisma = new PrismaClient({ adapter })

async function main() {
  // 1. Create a new listing with images
  const newListing = await prisma.listing.create({
    data: {
      title_en: "Modern Family Home",
      title_es: "Casa Familiar Moderna",
      description_en: "Spacious 3-bedroom home with a large backyard.",
      description_es: "Amplia casa de 3 dormitorios con gran patio trasero.",
      price: 350000,
      bedrooms: 3,
      bathrooms: 2.5, // Float value
      sqft: 2100,
      county: "Travis",
      address: "123 Maple Ave, Austin, TX",
      itinFriendly: true,
      images: {
        create: [
          { url: "https://example.com/image1.jpg" },
          { url: "https://example.com/image2.jpg" },
        ],
      },
    },
    include: {
      images: true, // Return the images in the result
    },
  })

  console.log('Created Listing:', newListing)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })