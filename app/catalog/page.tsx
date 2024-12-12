"use client";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import db from "../../lib/firebase/firebase";
import { useParams, useRouter } from "next/navigation";

export default function Catalog() {
  const [itemseEstate, setItemsEstate] = useState([]);


  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "smart_estate"));
      let temp:any = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItemsEstate(temp);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemseEstate.map(
          (listing: {
            id: string;
            name: string;
            price: string;
            amenities: string;
            mainImage:string
            photos: { image1: string };
          }) => (
            <Link
              key={listing.id}
              href={`/catalog/${listing.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={listing?.mainImage}
                alt={listing?.name}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-l font-semibold truncate ... pb-4">
                  {listing?.name}
                </h3>
                <p className="text-primary-300 text-lg font-bold">
                  {listing?.price}
                </p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
