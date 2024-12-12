"use client";
import Image from "next/image";
import imgEmpty from './../../../public/logo.svg'
import ContactForm from "./../../components/ContactForm";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { use, useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import db from "../../../lib/firebase/firebase";
//import { useRouter } from 'next/router'

// This is mock data. In a real application, you would fetch this data from an API based on the property ID.
const property = {
  id: 1,
  title: "Modern Apartment",
  price: 250000,
  description:
    "A beautiful modern apartment in the heart of the city. Features include a spacious living room, fully equipped kitchen, and a balcony with a stunning view.",
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  details: {
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    floor: 3,
    parking: true,
    furnished: false,
  },
  amenities: [
    "Elevator",
    "Security System",
    "Central Heating",
    "Air Conditioning",
  ],
  location: {
    address: "123 Main St, Anytown, USA",
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  agent: {
    name: "John Doe",
    phone: "+1 234 567 8900",
    email: "john.doe@example.com",
  },
};
interface rentItemInterface {
  name: string;
  id: string;
  price: number;
  mainImage:string;
  images:string[];
  location:string;
  contacts: {owner:string,email:string,phone:string};
  description:string;
  details:{
    bedrooms:number,
    bathrooms:number,
    area:number,
    floor:number,
    parking:boolean,
    furnished:boolean
  }



}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const { id } = useParams();

  const [rentItem, setRentItem] = useState<rentItemInterface>();


 async function getDocById(){
    const docRef = doc(db, "smart_estate",  `${id}`);
    const docSnap:any = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data(), "id", docSnap.id,);
      setRentItem({...docSnap.data(), id: docSnap.id} )
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

 }
 useEffect(() => {
  getDocById()
}, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{rentItem?.name}</h1>
      <p className="text-2xl font-bold mb-6">${rentItem?.price}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
          <Image src={rentItem?.mainImage ? rentItem?.mainImage : imgEmpty} alt={'image'} width={600} height={400} className="rounded-lg" />
           </div>
       <div className="grid grid-cols-3 gap-4">
            {rentItem?.images?.map((image, index) => (
             <Image key={index} src={image ? image : imgEmpty} alt={'`${rentItem?.name} ${index + 2}`'} width={200} height={150} className="rounded-lg" />

            ))}
          </div>  
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
          <ul className="mb-6">
       <li>Bedrooms: {rentItem?.details?.bedrooms}</li>
            <li>Bathrooms: {rentItem?.details?.bathrooms}</li>
            <li>Area: {rentItem?.details?.area} sqm</li>
            <li>Floor: {rentItem?.details?.floor}</li>
            <li>Parking: {rentItem?.details?.parking ? 'Yes' : 'No'}</li>
            <li>Furnished: {rentItem?.details?.furnished ? 'Yes' : 'No'}</li> 
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
       {/*    <ul className="mb-6">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul> */}

          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <p className="mb-2">{rentItem?.location}</p>
          <div className="bg-gray-200 h-64 rounded-lg mb-6">
            {/* Add a map component here */}
            <p className="p-4">Map placeholder</p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Contact Agent</h2>
          <p className="mb-2">{rentItem?.contacts?.owner}</p>
          <p className="mb-2">{rentItem?.contacts?.phone}</p>
          <p className="mb-4">{rentItem?.contacts?.email}</p>

     {/*      <ContactForm /> */}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p>{rentItem?.description}</p> 
      </div>
    </div>
  );
}
