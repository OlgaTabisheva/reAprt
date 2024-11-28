import Link from 'next/link'

const categories = [
  { name: 'Apartments', href: '/categories/apartments' },
  { name: 'Houses', href: '/categories/houses' },
  { name: 'Commercial', href: '/categories/commercial' },
]

export default function PopularCategories() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

