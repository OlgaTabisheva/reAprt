import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Apart</Link>
        <div className="space-x-4">
          <Link href="/categories" className="text-gray-600 hover:text-blue-600">Categories</Link>
          <Link href="/properties" className="text-gray-600 hover:text-blue-600">Properties</Link>
          <Link href="/register" className="text-gray-600 hover:text-blue-600">Register</Link>
          <Link href="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
        </div>
      </nav>
    </header>
  )
}

