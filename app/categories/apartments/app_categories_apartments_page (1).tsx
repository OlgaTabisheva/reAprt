'use client'

import { useState } from 'react'
import PropertyList from '@/app/components/PropertyList'

export default function ApartmentsPage() {
  const [filters, setFilters] = useState({
    area: '',
    floor: '',
    layout: '',
    parking: false,
    furniture: false,
  })

  const [sortBy, setSortBy] = useState('price')

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Apartments</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2">Area (sqm)</label>
              <input
                type="number"
                name="area"
                value={filters.area}
                onChange={handleFilterChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Floor</label>
              <input
                type="number"
                name="floor"
                value={filters.floor}
                onChange={handleFilterChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Layout</label>
              <select
                name="layout"
                value={filters.layout}
                onChange={handleFilterChange}
                className="w-full border p-2 rounded"
              >
                <option value="">Any</option>
                <option value="studio">Studio</option>
                <option value="1br">1 Bedroom</option>
                <option value="2br">2 Bedrooms</option>
                <option value="3br+">3+ Bedrooms</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="parking"
                  checked={filters.parking}
                  onChange={handleFilterChange}
                  className="mr-2"
                />
                Parking Available
              </label>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="furniture"
                  checked={filters.furniture}
                  onChange={handleFilterChange}
                  className="mr-2"
                />
                Furnished
              </label>
            </div>
          </form>
        </div>
        
        <div className="md:col-span-3">
          <div className="mb-4 flex justify-end">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="price">Sort by Price</option>
              <option value="date">Sort by Date Added</option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>
          <PropertyList category="apartments" filters={filters} sortBy={sortBy} />
        </div>
      </div>
    </div>
  )
}

