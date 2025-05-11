'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHome, FaEdit, FaUser } from 'react-icons/fa';
import { BsDisplay, BsFillCartFill } from 'react-icons/bs';
import {CanComponent} from '../../lib/casl/ability'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
    
        <button
          className="fixed top-4 left-4 z-20 text-white bg-[#212529] p-2 rounded"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <div
          className={`absolute top-0 left-0 h-screen w-64 bg-[#212529] p-4 mt-18 transition-transform transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ marginRight: isOpen ? 0 : '64px' }}
        >
          <div className="flex bg-[#212529] flex-col">
            <ul className="mt-4 flex flex-col gap-5 justify-center">
          
       <CanComponent I="manage" a="Vendor">
          <li>
    <Link href="/Admindashboard" className="text-white hover:underline text-lg font-semibold">
      <FaEdit className="inline-block mr-2" /> Home
    </Link>
  </li>
       </CanComponent>

              <CanComponent I="create" a="Role">
                <li>
                  <Link href="/Admindashboard/createrole" className="text-white hover:underline text-lg font-semibold">
                    <BsDisplay className="inline-block mr-2" /> Create Role
                  </Link>
                </li>
              </CanComponent>

              <CanComponent I="manage" a="Role">
                <li>
                  <Link href="/Admindashboard/adduser" className="text-white hover:underline text-lg font-semibold">
                    <FaUser className="inline-block mr-2" /> Add User
                  </Link>
                </li>
              </CanComponent>
              <CanComponent I="manage" a="Role">
                <li>
                  <Link href="/Admindashboard/assignrole" className="text-white hover:underline text-lg font-semibold">
                    <FaUser className="inline-block mr-2" /> Assign Role
                  </Link>
                </li>
              </CanComponent>

              <CanComponent I="manage" a="Permission">
                <li>
                  <Link href="/Admindashboard/permission" className="text-white hover:underline text-lg font-semibold">
                    <BsFillCartFill className="inline-block mr-2" /> Manage Permission
                  </Link>
                </li>
              </CanComponent>
              <CanComponent I="create" a="Product">
          <li>
    <Link href="/Admindashboard/insertproduct" className="text-white hover:underline text-lg font-semibold">
      <FaEdit className="inline-block mr-2" /> Insert Product
    </Link>
  </li>
       </CanComponent>

       <CanComponent I="read" a="Product">
          <li>
    <Link href="/Admindashboard/displayproduct" className="text-white hover:underline text-lg font-semibold">
      <BsDisplay className="inline-block mr-2" /> Display Product
    </Link>
  </li>
       </CanComponent>
       <CanComponent I="update" a="Product">
          <li>
    <Link href="/Admindashboard/edit" className="text-white hover:underline text-lg font-semibold">
      <FaEdit className="inline-block mr-2" /> Edit Product
    </Link>
  </li>
       </CanComponent>
       <CanComponent I="manage" a="Permission">
          <li>
    <Link href="/Admindashboard/newproductreq" className="text-white hover:underline text-lg font-semibold">
      <BsFillCartFill className="inline-block mr-2" /> New Product Request
    </Link>
  </li>
       </CanComponent>
       <CanComponent I="read" a="Product">
          <li>
    <Link href="/Admindashboard/order" className="text-white hover:underline text-lg font-semibold">
      <BsFillCartFill className="inline-block mr-2" /> Orders
    </Link>
  </li>
       </CanComponent>

       <CanComponent I="manage" a="Vendor">
          <li>
    <Link href="/Admindashboard/vendor" className="text-white hover:underline text-lg font-semibold">
      <FaEdit className="inline-block mr-2" /> Manage Vendor
    </Link>
  </li>
       </CanComponent>
       <CanComponent I="manage" a="Category">
          <li>
    <Link href="/Admindashboard/category" className="text-white hover:underline text-lg font-semibold">
      <FaEdit className="inline-block mr-2" /> Manage Category
    </Link>
  </li>
       </CanComponent>

            </ul>
          </div>
        </div>
        {isOpen ? <div className="ml-64"></div> : null}
    </>
  );
};

export default Sidebar;

