"use client";

import Image from "next/image";
import Link from "next/link";
import SearchForm from "./components/SearchForm";
import LatestListings from "./components/LatestListings";
import { Button } from "./components/shared/button/button";
import { Input } from "./components/shared/input/input";
import { Label } from "@radix-ui/react-label";
import * as Switch from "@radix-ui/react-switch";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Find Your Dream Property
      </h1>
      <SearchForm />

      <div className=" p-10 h-96 mb-6 relative bg-white shadow-2xl rounded-lg bg-hero-image h-auto bg-cover  bg-no-repeat bg-center bg-opacity-40">
        <div className=" flex flex-col pb-24 items-center px-4 pt-4 lg:flex-row p-4">
          {/*     <Image
            src={"/3.jpeg"}
            alt="Beautiful property"
            width={500}
            height={700}
            className="w-full rounded-lg  max-w-lg"
          /> */}

          <p className="text-lg ">
            Мир жилья у ваших ног. Не ограничивайте себя рамками. С помощью
            нашего сервиса вы можете выбрать жилье, которое идеально
            соответствует вашим потребностям и стилю жизни. Будь то уютная
            квартира в центре города или просторный дом за городом, у нас есть
            все, чтобы удовлетворить ваши запросы.
          </p>
        </div>
 <div className="h-72"/>
        <Link
          href="/catalog"
          className=" absolute bottom-4 right-4 bg-primary-300 text-white px-6 py-2 rounded-full hover:bg-primary-200 transition"
        >
          View Catalog
        </Link>
      </div>

      <LatestListings />
    </div>
  );
}
