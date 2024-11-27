import Image from 'next/image'
import Link from 'next/link'
import SearchForm from './components/SearchForm'
import PopularCategories from './components/PopularCategories'
import LatestListings from './components/LatestListings'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Find Your Dream Property</h1>
      
      <div className="mb-12 relative">
        <Image 
          src="/placeholder.svg?height=400&width=800" 
          alt="Beautiful property" 
          width={800} 
          height={400} 
          className="w-full rounded-lg shadow-lg"
        />
        <Link href="/catalog" className="absolute bottom-4 right-4 bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
          View Catalog
        </Link>
      </div>

      <SearchForm />
      
      <PopularCategories />
      
      <LatestListings />
    </div>
  )
}

