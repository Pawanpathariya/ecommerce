'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { addfav, removefav } from '../../redux/favSlice';
import { add } from '../../redux/cartSlice';

// Define RootState type for your Redux store
interface RootState {
  addtofav: {
    fav: {
      id: string;
      proImage: string;
      proName: string;
      proDescription: string;
      proPrice: number;
    }[];
  };
}

const FavouritePage: React.FC = () => {
  const dispatch = useDispatch();
  
  // Type the state correctly using RootState
  const favouriteProducts = useSelector((state: RootState) => state.addtofav.fav);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-indigo-500 mt-5 mb-4 text-center">Favourite</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favouriteProducts?.length > 0 ? favouriteProducts?.map((item, index) => (
            <div key={index} className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg card card3">
              {item.proImage && <Image src={item.proImage} alt="Product Image" width={350} height={300} style={{ height: '200px' }} />}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{item.proName}</h3>
                <p className="text-gray-600 mt-2">{item.proDescription}</p>
                <p className="text-gray-700 font-bold mt-2">Price {item.proPrice}</p>
                <div className="flex space-x-4 mt-4">
                  <button
                    className="flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
                    onClick={() => dispatch(add({ ...item, quantity: 1 }))}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
                    onClick={() => dispatch(removefav(item.id))}
                  >
                    Remove from Favourite
                  </button>
                </div>
              </div>
            </div>
          )) : <p className="text-center text-2xl text-gray-600">No favourite products</p>}
        </div>
      </div>
    </>
  );
}

export default FavouritePage;
