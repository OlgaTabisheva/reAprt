'use client'
import { collection, getDocs } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import db from '../../lib/firebase/firebase'





const catalog = [
  { id: 1, title: 'Modern Apartment', price: '$250,000', image: '/1.jpeg' },
  { id: 2, title: 'Cozy House', price: '$350,000', image: '/1.jpeg' },
  { id: 3, title: 'Downtown Office', price: '$500,000', image: '/1.jpeg' },
  { id: 4, title: 'Modern Apartment', price: '$250,000', image: '/1.jpeg' },
  { id: 5, title: 'Cozy House', price: '$350,000', image: '/1.jpeg' },
  { id: 6, title: 'Downtown Office', price: '$500,000', image: '/1.jpeg' },
  { id: 7, title: 'Modern Apartment', price: '$250,000', image: '/1.jpeg' },
  { id: 8, title: 'Cozy House', price: '$350,000', image: '/1.jpeg' },
  { id: 9, title: 'Downtown Office', price: '$500,000', image: '/1.jpeg' },
  { id: 10, title: 'Modern Apartment', price: '$250,000', image: '/1.jpeg' },
  { id: 11, title: 'Cozy House', price: '$350,000', image: '/1.jpeg' },
  { id: 12, title: 'Downtown Office', price: '$500,000', image: '/1.jpeg' },
]
export default function CatalogBox({setUseItem}) {
  

  const [itemseEstate, setItemsEstate] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "smart_estate"));
      setItemsEstate(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchItems();
  }, []);



  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemseEstate.map((listing:{id:string, name:string,price:string,amenities:string}) => (
          <Link key={listing.id} href={`/catalog/${listing.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <Image src={listing?.photos?.image1} alt={listing?.name} width={300} height={200} className="w-full" />
          <div className="p-4">
              <h3 className="text-l font-semibold truncate ... pb-4">{listing?.name}</h3>
              <p className="text-primary-300 text-lg font-bold">{listing?.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
