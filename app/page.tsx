import Link from 'next/link'
import Image from 'next/image'
import SearchForm from './components/SearchForm'
import PropertyCategories from './components/PropertyCategories'
import LatestAds from './components/LatestAds'

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-blue-600">Find Your Dream Property with Apart</h1>
      
      <div className="relative">
        <Image 
          src="/placeholder.svg?height=400&width=800" 
          alt="Beautiful property" 
          width={800} 
          height={400} 
          className="w-full rounded-lg shadow-lg"
        />
        <Link href="/properties" className="absolute bottom-4 right-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          View Catalog
        </Link>
      </div>

      <SearchForm />
      <PropertyCategories />
      <LatestAds />
    </div>
  )
}

