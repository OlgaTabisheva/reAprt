import Image from 'next/image'
import Link from 'next/link'

const listings = [
  { id: 1, title: 'Modern Apartment', price: '$250,000', image: '/placeholder.svg?height=200&width=300' },
  { id: 2, title: 'Cozy House', price: '$350,000', image: '/placeholder.svg?height=200&width=300' },
  { id: 3, title: 'Downtown Office', price: '$500,000', image: '/placeholder.svg?height=200&width=300' },
]

export default function LatestListings() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Latest Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <Link key={listing.id} href={`/property/${listing.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <Image src={listing.image} alt={listing.title} width={300} height={200} className="w-full" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{listing.title}</h3>
              <p className="text-lg font-bold">{listing.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

