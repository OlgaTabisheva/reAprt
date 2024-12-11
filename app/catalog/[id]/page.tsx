import Image from 'next/image'
import ContactForm from './../../components/ContactForm'

// This is mock data. In a real application, you would fetch this data from an API based on the property ID.
const property = {
  id: 1,
  title: 'Modern Apartment',
  price: 250000,
  description: 'A beautiful modern apartment in the heart of the city. Features include a spacious living room, fully equipped kitchen, and a balcony with a stunning view.',
  images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'],
  details: {
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    floor: 3,
    parking: true,
    furnished: false,
  },
  amenities: ['Elevator', 'Security System', 'Central Heating', 'Air Conditioning'],
  location: {
    address: '123 Main St, Anytown, USA',
    coordinates: { lat: 40.7128, lng: -74.0060 },
  },
  agent: {
    name: 'John Doe',
    phone: '+1 234 567 8900',
    email: 'john.doe@example.com',
  },
}

export default function PropertyPage({ params }: { params: { id: string } }) {

  const router = useRouter()
  const { id } = router.query


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <p className="text-2xl font-bold mb-6">${property.price.toLocaleString()}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <Image src={property.images[0]} alt={property.title} width={600} height={400} className="rounded-lg" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {property.images.slice(1).map((image, index) => (
              <Image key={index} src={image} alt={`${property.title} ${index + 2}`} width={200} height={150} className="rounded-lg" />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
          <ul className="mb-6">
            <li>Bedrooms: {property.details.bedrooms}</li>
            <li>Bathrooms: {property.details.bathrooms}</li>
            <li>Area: {property.details.area} sqm</li>
            <li>Floor: {property.details.floor}</li>
            <li>Parking: {property.details.parking ? 'Yes' : 'No'}</li>
            <li>Furnished: {property.details.furnished ? 'Yes' : 'No'}</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
          <ul className="mb-6">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <p className="mb-2">{property.location.address}</p>
          <div className="bg-gray-200 h-64 rounded-lg mb-6">
            {/* Add a map component here */}
            <p className="p-4">Map placeholder</p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Contact Agent</h2>
          <p className="mb-2">{property.agent.name}</p>
          <p className="mb-2">{property.agent.phone}</p>
          <p className="mb-4">{property.agent.email}</p>

          <ContactForm />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p>{property.description}</p>
      </div>
    </div>
  )
}

