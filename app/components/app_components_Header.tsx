import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-green-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Real Estate Marketplace</Link>
        <ul className="flex space-x-4">
          <li><Link href="/categories">Categories</Link></li>
          <li><Link href="/catalog">Catalog</Link></li>
          <li><Link href="/register">Register</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

