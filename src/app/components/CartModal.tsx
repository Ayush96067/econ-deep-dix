"use client";

import Image from "next/image";

function CartModal() {
  const carItems = true;
  return (
    <div className=" w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20 ">
      {!carItems ? (
        <div>Cart is empty</div>
      ) : (
        <>
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* Item */}
            <div className="flex gap-4">
              <Image
                src="/testimg.jpg"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between w-full">
                {/* top */}
                <div className="">
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold ">Product Name</h3>
                    <div className=" p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* description */}
                  <div className="text-sm text-black/60">Available</div>
                </div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-black/60">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$46</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 hover:bg-gray-100  ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 hover:bg-black/80 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartModal;
