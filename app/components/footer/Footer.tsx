import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white p-4 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Property Types</h3>
          <ul className="space-y-1">
            <li><Link href="/categories/apartments">Apartments</Link></li>
            <li><Link href="/categories/houses">Houses</Link></li>
            <li><Link href="/categories/commercial">Commercial</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <ul className="space-y-1">
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        © 2023 Real Estate Marketplace. All rights reserved.
      </div>
    </footer>
  )
}

