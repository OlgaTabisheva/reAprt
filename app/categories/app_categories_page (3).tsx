import Link from 'next/link'

const categories = [
  { name: 'Apartments', href: '/categories/apartments' },
  { name: 'Houses', href: '/categories/houses' },
  { name: 'Commercial', href: '/categories/commercial' },
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Property Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

