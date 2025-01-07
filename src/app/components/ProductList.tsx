import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductList() {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-start flex-wrap">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}

const ProductItem = () => {
  return (
    <Link
      href={"/test"}
      className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
    >
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          fill={true}
          sizes="24vw"
          className="absolute z-10 object-cover rounded-lg  transition-opacity ease duration-700 hover:opacity-0"
        />
        <Image
          src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          fill={true}
          sizes="24vw"
          className="absolute object-cover  rounded-lg"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Product Name</span>
        <span className="font-semibold">$49</span>
      </div>
      <div className="text-sm text-black/60">My Description</div>
      <button className="rounded-2xl ring-1 w-max  ring-redCart text-redCart py-2 px-4 text-xs hover:bg-redCart hover:text-white">
        Add to Cart
      </button>
    </Link>
  );
};

export default ProductList;
