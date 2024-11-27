import Image from 'next/image'

// This is a mock function to simulate fetching property data
async function getProperty(id: string) {
  // In a real application, you would fetch this data from an API or database
  return {
    id,
    title: 'Luxurious Apartment',
    price: '$500,000',
    location: 'New York City',
    type: 'Apartment',
    rooms: 3,
    area: 1200,
    description: 'A beautiful and spacious apartment in the heart of New York City.',
    amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security'],
    images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'],
    owner: {
      name: 'John Doe',
      phone: '+1 234 567 8900',
      email: 'john@example.com'
    }
  }
}

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const property = await getProperty(params.id)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <div className="mb-6">
        <Image src={property.images[0]} alt={property.title} width={600} height={400} className="w-full rounded-lg" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Details</h2>
          <p className="text-blue-600 font-bold text-xl mb-2">{property.price}</p>
          <p className="mb-2"><strong>Location:</strong> {property.location}</p>
          <p className="mb-2"><strong>Type:</strong> {property.type}</p>
          <p className="mb-2"><strong>Rooms:</strong> {property.rooms}</p>
          <p className="mb-2"><strong>Area:</strong> {property.area} sq ft</p>
          <p className="mb-4">{property.description}</p>
          <h3 className="text-xl font-semibold mb-2">Amenities</h3>
          <ul className="list-disc list-inside mb-4">
            {property.amenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="mb-2"><strong>
Owner:</strong> {property.owner.name}</p>
          <p className="mb-2"><strong>Phone:</strong> {property.owner.phone}</p>
          <p className="mb-4"><strong>Email:</strong> {property.owner.email}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Contact Owner
          </button>
        </div>
      </div>
    </div>
  )
}

