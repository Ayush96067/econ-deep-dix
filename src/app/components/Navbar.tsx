"use client";

import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import { Item } from "../Types/Item";

const items: Item[] = [
  {
    src: "/",
    name: "Home",
  },
  {
    src: "/shop",
    name: "Shop",
  },
  {
    src: "/deals",
    name: "Deals",
  },
  {
    src: "/about",
    name: "About",
  },
  {
    src: "/contact",
    name: "Contact",
  },
  {
    src: "/logout",
    name: "Logout",
  },
  {
    src: "/cart",
    name: "Cart",
  },
];

function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      <div className="md:hidden h-full flex justify-between items-center">
        {/* mobile */}
        <Link href={"/"}>
          <div className="text-2xl tracking-widest">MYE</div>
        </Link>
        <Menu items={items} />
      </div>

      {/* Bigger screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 flex items-center gap-12 xl:w-1/2">
          <Link
            href={"/"}
            className="flex hover:animate-pulse items-center gap-3"
          >
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl">MYE</div>
          </Link>
          <div className="hidden text-black xl:flex gap-4">
            {items.map((item, id) => {
              return (
                <Link
                  key={id}
                  className="  hover:bg-gray-50 rounded-md p-1 transition-all duration-300"
                  href={item.src}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
