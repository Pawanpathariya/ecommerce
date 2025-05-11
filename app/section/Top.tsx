'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Top:React.FC = () => {
  const router = useRouter();
  return (
  <>

    <div className='flex flex-wrap justify-center gap-4 m-auto'>
      <div className='m-4' onClick={()=>router.push('/pages/weding')} >
        <img src="/images/top1.webp" alt="" className='w-35 h-20' />
        <p className='font-light text-lg'>Weding Gifts</p>
      </div>
      <div className='m-4'  onClick={()=>router.push('/pages/Food')} >
        <img src="/images/top2.webp" alt="" className='w-35 h-20' />
        <p className='font-light text-lg'>Food Hampers</p>
      </div>
      <div className='m-4'  onClick={()=>router.push('/pages/plants')}>
        <img src="/images/top3.webp" alt="" className='w-35 h-20' />
        <p className='font-light text-lg'>Plants</p>
      </div>
      <div className='m-4'  onClick={()=>router.push('/pages/sameday')}>
        <img src="/images/top4.webp" alt="" className='w-35 h-20' />
        <p className='font-light text-lg'>New Arrival</p>
      </div>
      <div className='m-4' onClick={()=>router.push('/pages/fashion')}>
        <img src="/images/top5.webp" alt="" className='w-35 h-20' />
        <p className='font-light text-lg' >Fashion & Beauty</p>
      </div>
      <div className='m-4'>
        <img src="/images/top6.webp" alt="" className='w-35 h-20' onClick={()=>router.push('/pages/flowers')}/>
        <p className='font-light text-lg'>Gifts on Sale</p>
      </div>
      <div className='m-4' onClick={()=>router.push('/pages/living')}>
        <img src="/images/top7.webp" alt="" className='w-35 h-20' />
        <p className='font-light text-lg'>Home & Living</p>
      </div>
    </div>
  </>
  )
}

export default Top
