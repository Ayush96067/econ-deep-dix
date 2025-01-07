"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];
function Slider() {
  const [current, setCurrent] = useState(0);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((cur) => (cur === slides.length - 1 ? 0 : cur + 1));
  //     }, 2000);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [current]);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{
          transform: `translateX(-${current * 100}vw)`,
        }}
      >
        {slides.map((slide) => {
          return (
            <div
              key={slide.id}
              className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            >
              {/* Text Container */}
              <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col gap-8 2xl:gap-12 justify-center items-center">
                <h2 className="text-xl  lg:text-3xl 2xl:text-5xl">
                  {slide.description}
                </h2>
                <h1 className="text-center text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                  {slide.title}
                </h1>
                <Link href={slide.url}>
                  <button className="rounded-md bg-black text-white py-3 px-4">
                    Shop Now
                  </button>
                </Link>
              </div>
              {/* Image Container */}
              <div className="h-1/2 xl:h-full xl:w-1/2 relative">
                <Image
                  src={slide.img}
                  alt=""
                  fill={true}
                  sizes="100%"
                  className=" object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, id) => {
          return (
            <div
              onClick={() => setCurrent(id)}
              className={`w-3 h-3 transition-all duration-300 hover:ring-gray-950 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
                current === id ? "scale-150" : ""
              }  `}
              key={slide.id}
            >
              {current === id && (
                <div className="w-[0.4rem] h-[0.4rem] rounded-full bg-gray-600 "></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
