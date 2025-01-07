"use client";

import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24 ">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-24 ">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4  flex flex-col gap-8 ">
          <Link href={"/"}>
            <div className="text-2xl tracking-widest">MYE</div>
          </Link>
          <p>
            Address: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <span className="font-semibold ">hello@gmail.com</span>
          <span className="font-semibold ">+91 9897786726</span>
          <div className="flex gap-6">
            <Image src={"/facebook.png"} alt="" width={16} height={16} />
            <Image src={"/instagram.png"} alt="" width={16} height={16} />
            <Image src={"/youtube.png"} alt="" width={16} height={16} />
            <Image src={"/pinterest.png"} alt="" width={16} height={16} />
            <Image src={"/x.png"} alt="" width={16} height={16} />
          </div>
        </div>
        {/* Center */}
        <div className="w-1/2 hidden lg:flex justify-between">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about">About</Link>
              <Link href="/carrer">Careers</Link>
              <Link href="/Affiliates">Affiliates</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact us</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about">New Arrives</Link>
              <Link href="/carrer">Accesories</Link>
              <Link href="/Affiliates">Men</Link>
              <Link href="/blog">Women</Link>
              <Link href="/contact">All Products</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about">Customer Service</Link>
              <Link href="/carrer">My Account</Link>
              <Link href="/Affiliates">Find a Store</Link>
              <Link href="/blog">Legal & Privacy</Link>
              <Link href="/contact">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4  flex flex-col gap-8 ">
          <h1 className="font-medium text-lg ">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more
          </p>
          <div className="flex">
            <input
              type="text "
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-redCart text-white">JOIN</button>
          </div>

          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src={"/discover.png"} alt="" width={40} height={20} />
            <Image src={"/skrill.png"} alt="" width={40} height={20} />
            <Image src={"/mastercard.png"} alt="" width={40} height={20} />
            <Image src={"/visa.png"} alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className=" mt-16 flex flex-col justify-between items-center gap-8 md:flex-row">
        {/* left */}
        <div>@2024 deepDix MYE</div>

        {/* right */}
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex gap-4">
            <span className="text-black/50">Languages</span>
            <span>United States/English</span>
          </div>
          <div className="flex gap-4">
            <span className="text-black/50">Currency</span>
            <span>$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
