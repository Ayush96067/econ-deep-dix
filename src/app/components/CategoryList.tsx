import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList() {
  return (
    <div className="px-4 mt-12 overflow-x-scroll scrollbar-hide ">
      <div className="flex gap-2 md:gap-8">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
}

function Category() {
  return (
    <Link
      href={"/list?cat=test"}
      className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
    >
      <div className="relative bg-slate-100 w-full h-96">
        <Image
          src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          fill={true}
          //   sizes="100vw"
          className="object-cover w-full h-full"
        />
      </div>
      <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
    </Link>
  );
}

export default CategoryList;
