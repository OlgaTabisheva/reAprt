import Image from 'next/image'
import Link from 'next/link'

const properties = [
  { id: 1, title: 'Modern Apartment', price: '$250,000', location: 'New York', type: 'Apartment', rooms: 2, image: '/placeholder.svg?height=200&width=300' },
  { id: 2, title: 'Cozy House', price: '$350,000', location: 'Los Angeles', type: 'House', rooms: 3, image: '/placeholder.svg?height=200&width=300' },
  { id: 3, title: 'Office Space', price: '$500,000', location: 'Chicago', type: 'Commercial', rooms: 5, image: '/placeholder.svg?height=200&width=300' },
]

export default function PropertyList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {properties.map((property) => (
        <Link key={property.id} href={`/properties/${property.id}`} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
          <Image src={property.image} alt={property.title} width={300} height={200} className="w-full" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <p className="text-blue-600 font-bold">{property.price}</p>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-gray-600">{property.type} • {property.rooms} rooms</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

