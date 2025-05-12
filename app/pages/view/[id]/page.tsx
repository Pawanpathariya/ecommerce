'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { GetPro } from '../../../actions/getSelectPro'
import { useDispatch } from 'react-redux'
import { add} from '../../../redux/cartSlice'
import { addfav as addfavourite } from '../../../redux/favSlice'

const ProductView = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await GetPro(id as string)
      setProduct(response.products)
    }
    fetchProduct()
  }, [id])

  if (!product) {
    return <div className="text-center py-20 text-gray-500 text-xl">Loading Product...</div>
  }

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(add(product))
  }

  const handleAddToFavourite = () => {
    dispatch(addfavourite(product))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src={product.proImage}
              alt={product.proName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{product.proName}</h2>
            <p className="text-sm text-gray-500">{product.proCategory}</p>

            <p className="text-gray-700">{product.proDescription}</p>

            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-green-600">₹{product.proPrice}</span>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  product.status === 'Accepted'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-yellow-100 text-yellow-600'
                }`}
              >
       
              </span>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Same Day Delivery:{' '}
                <span className="font-medium">
                  {product.sameDay ? 'Available' : 'Not Available'}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Type: <span className="font-medium">{product.type}</span>
              </p>
              <p className="text-sm text-gray-600">
                Seller ID: <span className="font-medium">{product.userId}</span>
              </p>
            </div>

            <div className="mt-6 flex gap-4">
              <button
                className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="px-5 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
                onClick={handleAddToFavourite}
              >
                Add to Favourite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView

