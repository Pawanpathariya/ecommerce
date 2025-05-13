'use client';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineShoppingCart, AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from '@clerk/nextjs';

const Topbar: React.FC = () => {
  const router = useRouter();
  const { user, isSignedIn } = useUser();
  const cart = useSelector((state: any) => state.addtocart.cart);
  const fav = useSelector((state: any) => state.addtofav.fav);
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    if (isSignedIn && user) {
      localStorage.setItem('name', user.fullName || '');
      localStorage.setItem('email', user.primaryEmailAddress?.emailAddress || '');
      localStorage.setItem('user', 'user');
    }
  }, [isSignedIn, user]);

  return (
    <>
      <nav className='bg-gray-100 h-16 flex items-center justify-between px-4 lg:px-8 z-50'>
        <div className='flex space-x-4 items-center'>
          {isOpen
            ? <FaTimes className='text-2xl lg:text-3xl cursor-pointer' onClick={() => setIsOpen(false)} />
            : <FaBars className='text-2xl lg:text-3xl cursor-pointer' onClick={() => setIsOpen(true)} />
          }
          <Image src="/images/logo.png" alt="logo" width={80} height={80} onClick={() => router.push('/')} className='cursor-pointer lg:w-20 lg:h-20' />
        </div>

        <div className='flex space-x-4 items-center'>
          <div className='flex items-center bg-white rounded-full px-2 py-1 cursor-pointer' onClick={() => router.push('/pages/favourite')}>
            <CiHeart className='text-2xl mr-1' />
            <span className='text-sm'>{fav.length}</span>
          </div>

          <div className='flex items-center bg-white rounded-full px-2 py-1 cursor-pointer' onClick={() => router.push('/pages/cart')}>
            <AiOutlineShoppingCart className='text-2xl mr-1' />
            <span className='text-sm'>{cart.length}</span>
          </div>

          <SignedOut>
            <SignInButton>
              <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 " style={{fontSize:"14px",marginRight:"10px"}}>Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="ml-2 px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"  style={{fontSize:"14px"}} >Sign Up</button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>

      {isOpen && (
        <div className={`fixed top-16 left-0 w-full h-screen bg-gray-50 z-40 p-4 shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
          <div className='text-blue-700 font-semibold text-lg mb-4'>Top Collections</div>
          <ul className='space-y-2'>
            <li className='cursor-pointer hover:text-red-500' onClick={() => router.push("/pages/sameday")}>Same Day Delivery</li>
            <li className='cursor-pointer hover:text-red-500' onClick={() => router.push("/pages/cakes")}>Birthday Gifts</li>
            <li className='cursor-pointer hover:text-red-500' onClick={() => router.push("/pages/personalized")}>Personalized Gifts</li>
          </ul>

          <div className='mt-4'>
            <span className='text-gray-500 text-sm'>Shop By</span>

            <div className='mt-2 space-y-2'>
              <select className='w-full p-2 border rounded'>
                <option  onClick={() => router.push("/pages/personalized")}>Personal Occasions</option>
                <option  onClick={() => router.push("/pages/birthday")} >Birthday</option>
                <option  onClick={() => router.push("/pages/anniversary")} >Anniversary</option>
                <option  onClick={() => router.push("/pages/wedding")} >Wedding & Engagement</option>
              </select>
              <select className='w-full p-2 border rounded'>
                <option>Categories</option>
                <option>Cakes</option>
                <option>Flowers</option>
                <option>Plants</option>
                <option>Home & Living</option>
              </select>
              <select className='w-full p-2 border rounded'>
                <option>Festivals</option>
                <option>Easter</option>
                <option>Diwali</option>
                <option>Raksha Bandhan</option>
              </select>
              <select className='w-full p-2 border rounded'>
                <option>Special Days</option>
                <option>Mothers Day</option>
                <option>Fathers Day</option>
                <option>Valentine's Day</option>
              </select>
              <select className='w-full p-2 border rounded'>
                <option>Recipient</option>
                <option>For Him</option>
                <option>For Her</option>
                <option>Kids</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;

