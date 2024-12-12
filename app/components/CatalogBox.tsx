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
export default function CatalogBox({}) {
  




  return (
    <section>
  
    </section>
  )
}
