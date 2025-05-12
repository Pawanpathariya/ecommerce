'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { VendorOrderdetails } from '../../actions/VendorOrder';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const Page: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [vendorId, setVendorId] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const user = localStorage.getItem('user');
      const venId = user ? JSON.parse(user).id : null;
      setVendorId(venId);

      const response = await VendorOrderdetails(venId);
      if (response.orders) {
        const filteredOrders = response.orders.filter((order: any) =>
          order.products.some((item: any) => item.venId === venId)
        );
        setOrders(filteredOrders);
      }
    };

    loadData();
  }, []);

  return (
    <div className="p-6 bg-white rounded-md shadow-md overflow-scroll h-150">
      <h1 className="text-2xl font-bold mb-4">Order List</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order Id</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>User Email</TableCell>
              <TableCell>Mobile Number</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Payment Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order: any) => (
              <TableRow key={order.id} hover>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.userName}</TableCell>
                <TableCell>{order.userEmail}</TableCell>
                <TableCell>{order.phoneNumber}</TableCell>
                <TableCell>{new Date(order.createdAt).toLocaleString()}</TableCell>
                <TableCell>
                  {order.products
                    .filter((item: any) => item.venId === vendorId)
                    .map((item: any) => (
                      <div key={item.id} className="flex items-center mb-2">
                        <Image
                          src={item.image}
                          alt={item.productName}
                          className="rounded-md"
                          width={48}
                          height={48}
                        />
                        <div className="ml-2">
                          <p className="font-bold">{item.productName}</p>
                          <p>Quantity: {item.quantity}</p>
                          <p>Price: ₹ {item.price}</p>
                        </div>
                      </div>
                    ))}
                </TableCell>
                <TableCell>₹ {order.amount}</TableCell>
                <TableCell className="capitalize">{order.paymentStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Page;
