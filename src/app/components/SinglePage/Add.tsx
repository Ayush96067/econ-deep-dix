"use client";
import { useState } from "react";

function Add() {
  const [quantity, setQuantity] = useState(1);
  // TEMP
  const stock = 4;

  const handleQuantity = (h: String) => {
    if (h === "i" && quantity < stock) {
      setQuantity((qty) => qty + 1);
    }
    if (h === "d" && quantity > 1) {
      setQuantity((qty) => qty - 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h4>Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4 ">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">4 items</span> left!
            <br /> {" Don't"} miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-redCart text-redCart py-2 px-4 hover:bg-redCart hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default Add;
