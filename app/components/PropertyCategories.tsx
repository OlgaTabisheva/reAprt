import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import db from '../../lib/firebase/firebase'
import Image from "next/image";

const categories = [
  { name: 'Apartments', href: '/categories/apartments' },
  { name: 'Houses', href: '/categories/houses' },
  { name: 'Commercial', href: '/categories/commercial' },
]





export default function PropertyCategories() {

  const [items, setItems] = useState([])


  useEffect(() => {
  const fetchItems = async () => {
  const querySnapshot = await getDocs(collection(db, "smart_categories"))
  setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(),id: doc.id })))
  }
  fetchItems()


  },[])

  console.log(items,'items')



  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Popular Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items?.map((category:{name:string,image:string, description:string,  id:string}) => (
          <Link 
            key={category.id} 
            href={''}
            className=" border border-primary-500 border-solid flex flex-col items-stretch bg-primary-200 shadow-md rounded-2xl p-6 text-center shadow-inner hover:shadow-lg transition duration-300"
          >
            <div className='flex flex-col items-center'>
            <h3 className="text-l font-semibold truncate ... pb-4">{category.name}</h3>
            <Image className='rounded-2xl text-center' src={category.image} alt='category' width={200} height={350}/>
            </div>
            <p className="text-xs truncate ... pt-4">{category.description}</p>
          
          </Link>
        ))}
      </div>
    </div>
  )
}

