"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 0,
    url: "https://images.pexels.com/photos/19727180/pexels-photo-19727180/free-photo-of-a-house-in-the-snow-with-trees-and-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    url: "https://images.pexels.com/photos/19570330/pexels-photo-19570330/free-photo-of-cold-snow-wood-dirty.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/29851698/pexels-photo-29851698/free-photo-of-artisan-desserts-with-strawberry-ice-cream.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/16233277/pexels-photo-16233277/free-photo-of-dog-standing-on-lakeshore.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

function ProductImages() {
  const [index, setIndex] = useState(0);
  const [tempIndex, setTempIndex] = useState(index);

  return (
    <div className="">
      <div className="h-[500px] relative ">
        <div className="">
          <Image
            src={images[tempIndex !== index ? tempIndex : index].url}
            id="img1"
            alt=""
            fill={true}
            sizes="50vw"
            className="object-cover rounded-md "
          />
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-8 ">
        {images.map((img, id) => {
          return (
            <div key={id} className="w-1/4 h-32 relative gap-4 mt-8">
              <Image
                src={img.url}
                alt=""
                fill={true}
                sizes="30vw"
                className="object-cover hover:scale-90 transition-all duration-300 rounded-md cursor-pointer "
                onClick={() => setIndex(id)}
                onMouseEnter={() => setTempIndex(id)}
                onMouseLeave={() => setTempIndex(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImages;
