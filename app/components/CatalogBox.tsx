import Image from 'next/image'
import Link from 'next/link'

const catalog = [
  { id: 1, title: 'Modern Apartment', price: '$250,000', image: '/1.jpeg' },
  { id: 2, title: 'Cozy House', price: '$350,000', image: '/1.jpeg' },
  { id: 3, title: 'Downtown Office', price: '$500,000', image: '/1.jpeg' },
  { id: 4, title: 'Modern Apartment', price: '$250,000', image: '/1.jpeg' },
  { id: 5, title: 'Cozy House', price: '$350,000', image: '/1.jpeg' },
  { id: 6, title: 'Downtown Office', price: '$500,000', image: '/1.jpeg' },
  { id: 7, title: 'Modern Apartment', price: '$250,000', image: '/1.jpeg' },
  { id: 8, title: 'Cozy House', price: '$350,000', image: '/1.jpeg' },
  { id: 9, title: 'Downtown Office', price: '$500,000', image: '/1.jpeg' },
  { id: 10, title: 'Modern Apartment', price: '$250,000', image: '/1.jpeg' },
  { id: 11, title: 'Cozy House', price: '$350,000', image: '/1.jpeg' },
  { id: 12, title: 'Downtown Office', price: '$500,000', image: '/1.jpeg' },
]

export default function CatalogBox() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {catalog.map((listing) => (
          <Link key={listing.id} href={`/property/${listing.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <Image src={listing.image} alt={listing.title} width={300} height={200} className="w-full" />
            <div className="p-4">
              <h3 className="text-primary-300 font-semibold mb-2">{listing.title}</h3>
              <p className="text-primary-300 text-lg font-bold">{listing.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
