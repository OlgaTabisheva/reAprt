"use client";
import { useState } from "react";
import CatalogBox from "./../components/CatalogBox";

const categories = [
  { name: "Apartments", href: "/categories/apartments" },
  { name: "Houses", href: "/categories/houses" },
  { name: "Commercial", href: "/categories/commercial" },
  { name: "Land", href: "/categories/land" },
  { name: "Industrial", href: "/categories/industrial" },
];

export default function Catalog() {

  const [useItem, setUseItem] = useState()

  console.log(useItem)
  return (
    <div>
      <CatalogBox setUseItem={setUseItem}/>
    </div>
  );
}
