'use client'

import { useState } from 'react'

export default function SearchForm() {
  const [city, setCity] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [price, setPrice] = useState('')
  const [rooms, setRooms] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log({ city, propertyType, price, rooms })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="commercial">Commercial</option>
        </select>
        <input
          type="number"
          placeholder="Max Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Number of Rooms"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <button type="submit" className="mt-4 bg-primary-300 text-white px-6 py-2 rounded hover:bg-primary-200 transition">
        Search
      </button>
    </form>
  )
}

