import Image from 'next/image'
import Link from 'next/link'

const latestAds = [
  { id: 1, title: 'Modern Apartment', price: '$250,000', image: '/placeholder.svg?height=200&width=300' },
  { id: 2, title: 'Cozy House', price: '$350,000', image: '/placeholder.svg?height=200&width=300' },
  { id: 3, title: 'Office Space', price: '$500,000', image: '/placeholder.svg?height=200&width=300' },
]

export default function LatestAds() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Latest Ads</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {latestAds.map((ad) => (
          <Link key={ad.id} href={`/properties/${ad.id}`} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
            <Image src={ad.image} alt={ad.title} width={300} height={200} className="w-full" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{ad.title}</h3>
              <p className="text-blue-600 font-bold">{ad.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

