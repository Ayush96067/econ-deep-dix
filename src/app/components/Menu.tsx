"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Item } from "@/app/Types/Item";

interface MenuProps {
  items: Item[];
}

function Menu({ items }: MenuProps) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((op) => !op)}
      />
      {open && (
        <div className=" absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-center  items-center gap-6 text-lg transition-all duration-700">
          {items.map((item, id) => {
            return (
              <Link
                href={item.src}
                onClick={() => setOpen((op) => !op)}
                key={id}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Menu;
