export default function ListingCard({ listing, lang }: { listing: any, lang: 'en' | 'es' }) {
  // Select English or Spanish fields based on 'lang'
  const title = lang === 'en' ? listing.title_en : listing.title_es;
  const description = lang === 'en' ? listing.description_en : listing.description_es;
  const priceText = lang === 'en' ? 'Price' : 'Precio';

  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white">
      <img 
        src={listing.images || 'https://via.placeholder.com/400x300?text=No+Image'} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{title}</h3>
          {listing.itinFriendly && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">ITIN ✅</span>
          )}
        </div>
        <p className="text-gray-600 mt-2 line-clamp-2">{description}</p>
        <p className="text-blue-600 font-bold mt-4 text-lg">
          {priceText}: ${listing.price.toLocaleString()}
        </p>
        <div className="mt-2 text-sm text-gray-500">
          📍 {listing.county} County
        </div>
      </div>
    </div>
  );
}
