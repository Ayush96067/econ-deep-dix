"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import CartModal from "./CartModal";
import useClickOutside from "../hooks/useClickOutside";

function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  useClickOutside(profileRef, () => setIsProfileOpen(false));
  useClickOutside(cartRef, () => setIsCartOpen(false));

  const router = useRouter();

  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div ref={profileRef} className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={24}
        height={24}
        className="cursor-pointer "
      />
      <div
        onClick={() => setIsCartOpen((prev) => !prev)}
        ref={cartRef}
        className="cursor-pointer relative"
      >
        <Image
          src="/cart.png"
          alt=""
          width={24}
          height={24}
          className="=  rounded-2xl"
        />
        <div className="absolute   -top-3 -right-3  w-6 h-6 flex justify-center text-sm text-white items-center rounded-full  bg-redCart">
          2
        </div>
        {isCartOpen && <CartModal />}
      </div>
    </div>
  );
}

export default NavIcons;
