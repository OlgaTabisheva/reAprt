import { collection, getDocs, addDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import db from "../../lib/firebase/firebase";
import Image from "next/image";

const categories = [
  { name: "Apartments", href: "/categories/apartments" },
  { name: "Houses", href: "/categories/houses" },
  { name: "Commercial", href: "/categories/commercial" },
];

export default function PropertyCategories() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "smart_categories"));
      setItems(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchItems();
  }, []);

/*   useEffect(() => {
    const docRef = addDoc(collection(db, "smart_estate"), {
      name: "Кваритира с четырьмя комнатами",
      amenities: "smart",
      area: "28",
      email: "tyi@gmail.com",
      location: "ul. biar 45",
      owner: "owner",
      phone: "+6452321",
      photos: {
        image1:
          "https://firebasestorage.googleapis.com/v0/b/knot-store.appspot.com/o/Gemini_Generated_Image_fhq8nofhq8nofhq8.jpeg?alt=media&token=ab3c0e85-64a0-4664-94dc-0e78d016c479",
   
      },
      price: "2000",
      rooms: "4",
      type: "Апартаменты",
      year: "2000",
    });
  }, []); */

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Popular Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items?.map(
          (category: {
            name: string;
            image: string;
            description: string;
            id: string;
          }) => (
            <Link
              key={category.id}
              href={""}
              className=" border border-primary-500 border-solid flex flex-col items-stretch bg-primary-200 shadow-md rounded-2xl p-6 text-center shadow-inner hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col items-center">
                <h3 className="text-l font-semibold truncate ... pb-4">
                  {category.name}
                </h3>
                <Image
                  className="rounded-2xl text-center"
                  src={category.image}
                  alt="category"
                  width={200}
                  height={350}
                />
              </div>
              <p className="text-xs truncate ... pt-4">
                {category.description}
              </p>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
