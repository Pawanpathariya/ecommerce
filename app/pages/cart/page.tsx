'use client'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { increaseQuantity, decreaseQuantity, removeProduct } from '../../redux/cartSlice';
import { useRouter } from 'next/navigation';

interface RootState {
  addtocart: {
    cart: {
      id: string;
      proImage: string;
      proName: string;
      proPrice: number;
      quantity: number;
    }[];
  };
}

const page: React.FC = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.addtocart.cart);
  const [total, setTotal] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    let totalPrice = 0;
    product.forEach((p) => {
      totalPrice += p.quantity * p.proPrice;
    });
    setTotal(totalPrice);
  }, [product]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-x-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Cart</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left"> </th>
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-center">Quantity</th>
              <th className="px-6 py-3 text-right">Price</th>
              <th className="px-6 py-3 text-right">Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {product.map((p) => (
              <tr key={p.id} className="hover:bg-gray-100">
                <td className="px-6 py-4">
                  <Image src={p.proImage} alt={p.proName} width={200} height={200} className="object-contain" />
                </td>
                <td className="px-6 py-4">{p.proName}</td>
                <td className="px-6 py-4 text-center">
                  <button onClick={() => dispatch(increaseQuantity(p))} className="bg-rose-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">+</button>
                  {p.quantity}
                  <button onClick={() => dispatch(decreaseQuantity(p))} className="bg-rose-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">-</button>
                </td>
                <td className="px-6 py-4 text-right">{p.proPrice}</td>
                <td className="px-6 py-4 text-right">{p.quantity * p.proPrice}</td>
                <td className="px-6 py-4 text-right">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded" onClick={() => dispatch(removeProduct(p))}>Remove</button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={4} className="px-6 py-4 text-right font-bold">Total: {total}</td>
              <td className="px-6 py-4 text-right">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => router.push('/checkout')}>Checkout</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;

