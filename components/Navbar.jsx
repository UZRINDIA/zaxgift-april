"use client"
import React from "react";
import { assets, BagIcon, CartIcon } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
//import { useClerk, UserButton } from "@clerk/nextjs";
import SearchBar from "./SearchBar";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  //const { openSignIn } = useClerk();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-2 border-b border-gray-300 text-gray-700 bg-[#363b57ff]">
      <Image
        className="cursor-pointer h-10 w-auto " 
        onClick={() => router.push('/')}
        src={assets.logo4}
        alt="logo4"
      />
      {/* <div className="flex items-center gap-6 lg:gap-10 max-md:hidden">
      <Link
        href="/"
        className="text-sm font-medium text-black hover:text-black transition"
      >
        Men
      </Link>
      <Link
        href="/all-products"
        className="text-sm font-medium text-black hover:text-black transition"
      >
        Women
      </Link>
      <Link
        href="/about-us"
        className="text-sm font-medium text-black hover:text-black transition"
      >
        Bags
      </Link>
      <Link
        href="/blog"
        className="text-sm font-medium text-black hover:text-black transition"
      >
        Blog
      </Link>
      <Link
        href="/contact-us"
        className="text-sm font-medium text-black hover:text-black transition"
      >
        Gifting
      </Link>
    </div> */}
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="text-white hover:text-black-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="text-white hover:text-white transition duration-200 hover:scale-105">
          Products
        </Link>
        <Link href="/about-us" className=" text-white hover:text-white transition  duration-200 hover:scale-105">
          About Us
        </Link>
        <Link href="/contact-us" className="text-white hover:text-white transition  duration-200 hover:scale-105">
          Contact
        </Link>

       { /*

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
*/}
      </div>
{/*
      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} 
        alt="search icon"  
        onClick={()=> 
        setIsSearchOpen(true)}
        />
        {user ?
          <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="cart" labelIcon={<CartIcon />} onClick={() => router.push('/cart')}></UserButton.Action>
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="order" labelIcon={<BagIcon />} onClick={() => router.push('/my-orders')}></UserButton.Action>
              </UserButton.MenuItems>

            </UserButton>
          </> :
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        {user ?
          <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="cart" labelIcon={<CartIcon />} onClick={() => router.push('/cart')}></UserButton.Action>
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action label="order" labelIcon={<BagIcon />} onClick={() => router.push('/my-orders')}></UserButton.Action>
              </UserButton.MenuItems>

            </UserButton>
          </> :
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>}
          
      </div>
      */}
      <SearchBar isOpen={isSearchOpen} onClose={()=> setIsSearchOpen(false)} />
    </nav>
  );
};

export default Navbar;
