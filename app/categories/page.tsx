'use client'
import Link from 'next/link'
import LatestListings from './../components/LatestListings'
import CatalogBox from './../components/CatalogBox'
import PropertyCategories from './../components/PropertyCategories'
import { useRouter } from 'next/router'

const categories = [
  { name: 'Apartments', href: '/categories/apartments' },
  { name: 'Houses', href: '/categories/houses' },
  { name: 'Commercial', href: '/categories/commercial' },
  { name: 'Land', href: '/categories/land' },
  { name: 'Industrial', href: '/categories/industrial' },
]

export default function Categories() {


  
  return (
    <div>
{/*       <h1 className="text-3xl font-bold mb-6">Property Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link 
            key={category.name} 
            href={category.href}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
          >
            <h2 className="text-primary-300 text-xl font-semibold">{category.name}</h2>
          </Link>
        ))}
    
      </div>
      */}
      <PropertyCategories/>
   
  

    </div>
  )
}

