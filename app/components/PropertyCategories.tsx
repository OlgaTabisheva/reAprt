import Link from 'next/link'

const categories = [
  { name: 'Apartments', href: '/categories/apartments' },
  { name: 'Houses', href: '/categories/houses' },
  { name: 'Commercial', href: '/categories/commercial' },
]

export default function PropertyCategories() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Popular Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link 
            key={category.name} 
            href={category.href}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

