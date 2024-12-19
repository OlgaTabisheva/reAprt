'use client'

import { useState } from 'react'
import { Button } from "./../components/shared/button/button"
import { Input } from "./../components/shared/input/input"
import { Label } from "./../components/shared/label/label"
import { Switch } from "./../components/shared/swith/swith"
import { Textarea } from "./../components/shared/textarea/textarea"
import { MapPin, PlusIcon, X } from 'lucide-react'
import { Plus } from './../components/shared/plus'



export default function CreateListing() {
  const [listing, setListing] = useState({
    propertyName: '',
    price: 0,
    mainPhoto: null,
    allPhotos: [],
    rooms: 1,
    bathrooms: 1,
    squareFootage: 0,
    floorLevel: 1,
    parking: false,
    furnished: false,
    elevator: false,
    garden: false,
    heating: false,
    airConditioning: false,
    additionalAmenities: [],
    coordinates: { lat: '', lng: '' },
    address: '',
    agentName: '',
    agentPhone: '',
    agentEmail: ''
  })

  const [newAmenity, setNewAmenity] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setListing(prev => ({ ...prev, [name]: value }))
  }

  const handleNumericChange = (name: string) => (value: number) => {
    setListing(prev => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string) => {
    setListing(prev => ({ ...prev, [name]: !prev[name as keyof typeof prev] }))
  }

  const handleMainPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setListing(prev => ({ ...prev, mainPhoto: e.target.files![0] }))
    }
  }

  const handleAllPhotosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setListing(prev => ({ ...prev, allPhotos: [...prev.allPhotos, ...Array.from(e.target.files)] }))
    }
  }

  const addAmenity = () => {
    if (newAmenity.trim()) {
      setListing(prev => ({
        ...prev,
        additionalAmenities: [...prev.additionalAmenities, newAmenity.trim()]
      }))
      setNewAmenity('')
    }
  }

  const removeAmenity = (index: number) => {
    setListing(prev => ({
      ...prev,
      additionalAmenities: prev.additionalAmenities.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log(listing)
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create Rental Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Property Details</h2>
          <div>
            <Label htmlFor="propertyName">Property Name</Label>
            <Input
              id="propertyName"
              name="propertyName"
              value={listing.propertyName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Plus
              value={listing.price}
              onChange={handleNumericChange('price')}
              min={0}
            />
          </div>
          <div>
            <Label htmlFor="mainPhoto">Main Photo</Label>
            <Input
              id="mainPhoto"
              name="mainPhoto"
              type="file"
              onChange={handleMainPhotoChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="allPhotos">All Photos</Label>
            <Input
              id="allPhotos"
              name="allPhotos"
              type="file"
              multiple
              onChange={handleAllPhotosChange}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Property Specifications</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="rooms">Number of Rooms</Label>
              <Plus
                value={listing.rooms}
                onChange={handleNumericChange('rooms')}
                min={1}
              />
            </div>
            <div>
              <Label htmlFor="bathrooms">Number of Bathrooms</Label>
              <Plus
                value={listing.bathrooms}
                onChange={handleNumericChange('bathrooms')}
                min={1}
              />
            </div>
            <div>
              <Label htmlFor="squareFootage">Total Square Footage</Label>
              <Plus
                value={listing.squareFootage}
                onChange={handleNumericChange('squareFootage')}
                min={0}
              />
            </div>
            <div>
              <Label htmlFor="floorLevel">Floor Level</Label>
              <Plus
                value={listing.floorLevel}
                onChange={handleNumericChange('floorLevel')}
                min={0}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="parking"
              checked={listing.parking}
              onCheckedChange={() => handleSwitchChange('parking')}
            />
            <Label htmlFor="parking">Parking Available</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="furnished"
              checked={listing.furnished}
              onCheckedChange={() => handleSwitchChange('furnished')}
            />
            <Label htmlFor="furnished">Furnished</Label>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Additional Amenities</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="elevator"
                checked={listing.elevator}
                onCheckedChange={() => handleSwitchChange('elevator')}
              />
              <Label htmlFor="elevator">Elevator</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="garden"
                checked={listing.garden}
                onCheckedChange={() => handleSwitchChange('garden')}
              />
              <Label htmlFor="garden">Garden</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="heating"
                checked={listing.heating}
                onCheckedChange={() => handleSwitchChange('heating')}
              />
              <Label htmlFor="heating">Heating</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="airConditioning"
                checked={listing.airConditioning}
                onCheckedChange={() => handleSwitchChange('airConditioning')}
              />
              <Label htmlFor="airConditioning">Air Conditioning</Label>
            </div>
          </div>
          <div>
            <Label htmlFor="newAmenity">Add More Amenities</Label>
            <div className="flex space-x-2">
              <Input
                id="newAmenity"
                value={newAmenity}
                onChange={(e) => setNewAmenity(e.target.value)}
                placeholder="Enter amenity"
              />
              <Button type="button" onClick={addAmenity}>
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {listing.additionalAmenities.map((amenity, index) => (
              <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                <span>{amenity}</span>
                <button type="button" onClick={() => removeAmenity(index)} className="ml-2 text-red-500">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Location</h2>
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <MapPin className="h-12 w-12 text-gray-400" />
            <span className="ml-2 text-gray-500">Map Placeholder</span>
          </div>
          <div>
            <Label htmlFor="address">Property Address</Label>
            <Textarea
              id="address"
              name="address"
              value={listing.address}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Agent Information</h2>
          <div>
            <Label htmlFor="agentName">Name</Label>
            <Input
              id="agentName"
              name="agentName"
              value={listing.agentName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="agentPhone">Phone Number</Label>
            <Input
              id="agentPhone"
              name="agentPhone"
              type="tel"
              value={listing.agentPhone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="agentEmail">Email</Label>
            <Input
              id="agentEmail"
              name="agentEmail"
              type="email"
              value={listing.agentEmail}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full">Create Listing</Button>
      </form>
    </div>
  )
}
