import Link from 'next/link'

export default function Header() {
  return (
    <header className="shadow-md bg-primary-300">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-50 no-underline">Smart Rent</Link>
        <div className="space-x-4">
          <Link href="/categories" className="no-underline text-primary-50 hover:text-primary-100 no-underline">Categories</Link>
          <Link href="/createRealEstate" className="no-underline text-primary-50 hover:text-primary-100 no-underline">Create</Link>
          <Link href="/register" className="no-underline text-primary-50 hover:text-primary-100 no-underline">Register</Link>
          <Link href="/login" className="no-underline text-primary-50 hover:text-primary-100 no-underline">Login</Link>
        </div>
      </nav>
    </header>
  )
}

