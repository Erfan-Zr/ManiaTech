"use client";

import { products } from "@/app/(data)/Products";
import Image from "next/image";

const Slideshow = () => {
  return (
    <div className="grid grid-cols-4 w-[100%] p-8">
      {products.map((product) => {
        const imageUrl = `/images/${product.image}`;
        return (
          <div className="flex flex-col justify-center" key={product.id}>
            <Image alt={product.name} src={imageUrl} width={200} height={100} />

            <h2>{product.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Slideshow;
