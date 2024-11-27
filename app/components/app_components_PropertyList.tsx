import Image from 'next/image'
import Link from 'next/link'

// This is a mock data array. In a real application, you would fetch this data from an API.
const properties = [
  { id: 1, title: 'Modern Apartment', price: 250000, area: 75, floor: 3, layout: '2br', parking: true, furniture: false, image: '/placeholder.svg?height=200&width=300' },
  { id: 2, title: 'Cozy Studio', price: 150000, area: 40, floor: 5, layout: 'studio', parking: false, furniture: true, image: '/placeholder.svg?height=200&width=300' },
  { id: 3, title: 'Luxury Penthouse', price: 500000, area: 120, floor: 10, layout: '3br+', parking: true, furniture: true, image: '/placeholder.svg?height=200&width=300' },
]

interface PropertyListProps {
  category: string
  filters: {
    area: string
    floor: string
    layout: string
    parking: boolean
    furniture: boolean
  }
  sortBy: string
}

export default function PropertyList({ category, filters, sortBy }: PropertyListProps) {
  // Filter and sort properties based on the given filters and sortBy
  const filteredProperties = properties
    .filter(property => {
      if (filters.area && property.area < parseInt(filters.area)) return false
      if (filters.floor && property.floor !== parseInt(filters.floor)) return false
      if (filters.layout && property.layout !== filters.layout) return false
      if (filters.parking && !property.parking) return false
      if (filters.furniture && !property.furniture) return false
      return true
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price
      if (sortBy === 'date') return b.id - a.id // Assuming id represents the order of addition
      return 0 // Add more sorting options as needed
    })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProperties.map((property) => (
        <Link key={property.id} href={`/property/${property.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <Image src={property.image} alt={property.title} width={300} height={200} className="w-full" />
          <div className="p-4">
            <h3 className="font-semibold mb-2">{property.title}</h3>
            <p className="text-lg font-bold mb-2">${property.price.toLocaleString()}</p>
            <p className="text-sm text-gray-600">
              {property.area} sqm • Floor {property.floor} • {property.layout.toUpperCase()}
            </p>
            <div className="mt-2 text-sm">
              {property.parking && <span className="mr-2">🚗 Parking</span>}
              {property.furniture && <span>🪑 Furnished</span>}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

