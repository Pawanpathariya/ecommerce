'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Joy:React.FC = () => {
  const router = useRouter();
  return (
    <>
      <div className='m-4 text-center'>
        <h2 className='font-bold text-2xl' >Gifts that Spark Joy</h2>
        <div className='flex flex-wrap justify-center'>
          <div className='m-4 cursor-pointer '  onClick={()=>router.push('/pages/weding')} >
            <img src="/images/joy1.webp" alt="" className='w-20 h-20' />
            <p className='font-light text-lg'>Weding Gifts</p>
          </div>
          <div  className='m-4 cursor-pointer '  onClick={()=>router.push('/pages/Food')} >
            <img src="/images/joy2.webp" alt="" className='w-20 h-20' />
            <p className='font-light text-lg'>Food Hampers</p>
          </div>
          <div  className='m-4 cursor-pointer '  onClick={()=>router.push('/pages/plants')} >
            <img src="/images/joy3.webp" alt="" className='w-20 h-20' />
            <p className='font-light text-lg'>Plants</p>
          </div>
          <div  className='m-4 cursor-pointer '  onClick={()=>router.push('/pages/sameday')} >
            <img src="/images/joy4.webp" alt="" className='w-20 h-20' />
            <p className='font-light text-lg'>New Arrival</p>
          </div>
          <div  className='m-4 cursor-pointer '  onClick={()=>router.push('/pages/fashion')} >
            <img src="/images/joy5.webp" alt="" className='w-20 h-20' />
            <p className='font-light text-lg'>Fashion & Beauty</p>
          </div>
          <div className='m-4 cursor-pointer '  onClick={()=>router.push('/pages/flowers')} >
            <img src="/images/joy6.webp" alt="" className='w-20 h-20' />
            <p className='font-light text-lg'>Gifts on Sale</p>
          </div>
          <div  className='m-4 cursor-pointer '  onClick={()=>router.push('/pages/living')} >
            <img src="/images/joy7.jpg" alt="" className='w-20 h-20' />
            <p className='font-light text-lg'>Home & Living</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Joy

