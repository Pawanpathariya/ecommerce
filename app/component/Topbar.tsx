// 'use client';
// import React, { useState, useEffect } from 'react';
// import { FaBars, FaTimes } from "react-icons/fa";
// import { AiOutlineShoppingCart, AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
// import { CiHeart } from "react-icons/ci";
// import { useRouter } from "next/navigation";
// import { useSelector } from 'react-redux';
// import Image from 'next/image';
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
//   useUser,
// } from '@clerk/nextjs';

// const Topbar: React.FC = () => {
//   const { user, isSignedIn } = useUser();
//   const product = useSelector((state: any) => state.addtocart.cart);
//   const prolen = product.length;
//   const product1 = useSelector((state: any) => state.addtofav.fav);
//   const prolen1 = product1.length;
//   const route = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);

//   useEffect(() => {
//     if (isSignedIn && user) {
//       const fullName = user.fullName; 
//       const email = user.primaryEmailAddress?.emailAddress; 
//       localStorage.setItem('name', fullName);
//       localStorage.setItem('email', email);
//       localStorage.setItem('user', 'user');
//     }
//   }, [isSignedIn, user]);

//   return (
//     <>
//       <nav className='bg-gray-100 h-16 flex justify-between items-center px-4 z-20'>
//         {/* left side */}
//         <div className='flex space-x-4 justify-center items-center'>
//           {isOpen ? (
//             <FaTimes className='text-2xl' onClick={() => setIsOpen(false)} />
//           ) : (
//             <FaBars className='text-2xl' onClick={() => setIsOpen(true)} />
//           )}
//           <Image src='/images/logo.png' width={80} height={80} alt='logo' />
//         </div>

       
//         <div className='flex space-x-4'>
//           <div className='flex items-center bg-white rounded-full px-2 py-1' onClick={() => route.push('/pages/favourite')}>
//             <CiHeart className='text-2xl mr-1' />
//             <span className='text-sm'>{prolen1}</span>
//           </div>

//           <div className='flex items-center bg-white rounded-full px-2 py-1' onClick={() => route.push('/pages/cart')}>
//             <AiOutlineShoppingCart className='text-2xl mr-1' />
//             <span className='text-sm'>{prolen}</span>
//           </div>

//           <SignedOut>
//             <div className="flex items-center justify-center mt-3">
//               <SignInButton>
//                 <button className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md">
//                   Sign In
//                 </button>
//               </SignInButton>
//               <div className="mx-2"></div>
//               <SignUpButton>
//                 <button className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white shadow-md">
//                   Sign Up
//                 </button>
//               </SignUpButton>
//             </div>
//           </SignedOut>

//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </div>
//       </nav>
//       {isOpen && (
//         <div style={{ zIndex: 999 }} className='absolute top-16 left-0 w-64 bg-gray-100 shadow-lg rounded-md px-4 py-8 text-blue-700'>
//           <ul className='space-y-2'>
//             <li className='hover:bg-white hover:text-black p-2 rounded cursor-pointer' onClick={()=>route.push('/')}>Home</li>
//             <li className='hover:bg-white hover:text-black p-2 rounded cursor-pointer' onClick={()=>route.push('/pages/order')}>My orders</li>
//             <li className='hover:bg-white hover:text-black p-2 rounded cursor-pointer' onClick={()=>route.push('/pages/birthday')}>Birthday Gift</li>
//             <li className='hover:bg-white hover:text-black p-2 rounded cursor-pointer' onClick={()=>route.push('/pages/wedding')} >Wedding Gift</li>
//             <li className='hover:bg-white hover:text-black p-2 rounded cursor-pointer' onClick={()=>route.push('/pages/anniversary')} >Anniversary Gift</li>
//             <li className='hover:bg-white hover:text-black p-2 rounded cursor-pointer' onClick={()=>route.push('/pages/other')} >Other Gift</li>
//             <li className=' p-2 rounded cursor-pointer ' onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
//               <span className='flex items-center'>
//                 Category
//                 {isCategoryOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
//               </span>
//               {isCategoryOpen && (
//                 <ul className='absolute space-y-2 pl-5 top-70 bg-gray-100 w-46 p-2 text-center left-64'>
//                   <li className='hover:bg-white hover:text-black p-2 rounded cursor-pointer' onClick={()=>route.push('/pages/allproduct')} >All</li>
//                   <li className='hover:bg-white hover:text-black p-2 rounded cursor-pointer' onClick={()=>route.push('/pages/birthday')} >Birthday Gift</li>
//                   <li className='hover:bg-white hover:text-black p-2 rounded cursor-pointer'  onClick={()=>route.push('/pages/wedding')} >Wedding Gift</li>
//                   <li className='hover:bg-white hover:text-black p-2 rounded cursor-pointer'  onClick={()=>route.push('/pages/anniversary')}>Anniversary Gift</li>
//                   <li className='hover:bg-white hover:text-black p-2 rounded cursor-pointer'  onClick={()=>route.push('/pages/other')}>Other Gift</li>
//                 </ul>
//               )}
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }

// export default Topbar;

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
      <nav className='bg-gray-100 h-16 flex justify-between items-center px-4 z-50'>
        <div className='flex space-x-4 items-center'>
          {isOpen
            ? <FaTimes className='text-2xl cursor-pointer' onClick={() => setIsOpen(false)} />
            : <FaBars className='text-2xl cursor-pointer' onClick={() => setIsOpen(true)} />
          }
          <Image src="/images/logo.png" alt="logo" width={80} height={80} onClick={() => router.push('/')} className='cursor-pointer' />
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
              <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="ml-2 px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600">Sign Up</button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>

      {isOpen && (
        <div className='fixed top-16 left-0 w-72 h-screen bg-gray-50 z-40 p-4 shadow-lg'>
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

