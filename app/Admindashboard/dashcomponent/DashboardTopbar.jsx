"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
const DashboardTopbar = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-700 p-4 fixed top-0 left-0 w-full h-16 flex justify-between items-center">
      <h1 className="text-white text-2xl font-semibold ml-4 md:ml-10 pl-4">
        <Link href="/Admindashboard" >
           Dashboard
        </Link>
      </h1>
      <div className="flex justify-end items-center mr-4 md:mr-10">
       
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
          onClick={() => { localStorage.clear(), router.push('/login') }  }>
          Logout
        </button>
      </div>
    </div>
  );
}

export default DashboardTopbar;

