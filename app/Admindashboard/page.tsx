'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Orderdetails } from '../actions/oderManage';
import { getProductAdmin } from '../actions/getProductAdmin';
import { getVendorAdmin } from '../actions/getVendorAct';
import SalesChart from '../component/chart';

const Page: React.FC = () => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [totalOrders, setTotalOrders] = useState<number>(0);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [totalVendors, setTotalVendors] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData);
          const roleName = parsedUser?.role?.name;
          if (roleName === 'admin' || roleName === 'superadmin') {
            setAuthorized(true);
            fetchData();
          }
        } catch (error) {
          console.error('Invalid user data in localStorage:', error);
        }
      }
    }
  }, []);

  const fetchData = () => {
    getOrders();
    getProducts();
    getVendors();
  };

  const getOrders = async () => {
    const response = await Orderdetails();
    setTotalOrders(response.orders.length || 0);
  };

  const getProducts = async () => {
    const response = await getProductAdmin();
    setTotalProducts(response.products.length || 0);
  };

  const getVendors = async () => {
    const response = await getVendorAdmin();
    setTotalVendors(response.vendors.length || 0);
  };

  if (!authorized) {
    return (
      <div className="text-center p-4 text-4xl font-semibold text-red-500 bg-white rounded-md shadow-md">
        Welcome to Vendor Dashboard
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 overflow-y-auto h-150 w-full sm:3/6 md:w-3/4 lg:w-full xl:w-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" onClick={() => router.push('/Admindashboard/allproduct')}>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold">Total Orders</h2>
          <p className="text-4xl font-bold">{totalOrders}</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold">Total Products</h2>
          <p className="text-4xl font-bold">{totalProducts}</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold">Total Vendors</h2>
          <p className="text-4xl font-bold">{totalVendors}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Sales Chart</h2>
        <SalesChart />
      </div>
    </div>
  );
};

export default Page;

