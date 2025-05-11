'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { Personalized } from '../../actions/Productcategory';
import { useDispatch } from 'react-redux';
import {add} from '../../redux/cartSlice'
import { addfav } from '../../redux/favSlice';
import Image from 'next/image'
import { AiOutlineTruck } from "react-icons/ai";
const page:React.FC = () => {
    const dispatch=useDispatch();
    const [product,setProduct]=useState<any>([]);
    const loaddata=async()=>{
        const response= await Personalized();
        setProduct(response?.products);
    }
    
    useEffect(()=>{
       loaddata() 
    },[])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-indigo-500 mt-5 mb-4 text-center ">Personalized </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
       {product?.map((item:any,index:number)=>(
                <div key={index} className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg card card3">
                  <Image src={item.proImage} alt="Product Image" width={350} height={300} style={{ height:'200px' }} />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{item.proName}</h3>
                    <p className="text-gray-600 mt-2">{item.proDescription}</p>
                    <p className="text-gray-700 font-bold mt-2">Price {item.proPrice}</p>
                    <div className="flex space-x-4 mt-4">
                      <button className="flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all
                       duration-300" onClick={() => dispatch(add({...item,quantity:1}))}>
                        Add to Cart
                      </button>
                      <button className="flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300" onClick={() => dispatch(addfav(item))}>
                        Favourite
                      </button>
                    </div>
      
      
                  </div>
                </div>
              ))}
      </div>
    </div>
  )
}

export default page

