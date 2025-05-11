'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Delivery:React.FC = () => {
  const router=useRouter();
  return (
   <div className='m-4' >
<h2 className='pl-4'>Same Day Delivery</h2>
<div className='flex flex-wrap  justify-evenly'>
<div className='cursor-pointer'  onClick={()=>router.push('/pages/sameday')} >
<img src="/images/del1.webp" alt="" />
</div>
<div onClick={()=>router.push('/pages/sameday')} >
<img src="/images/del2.webp" alt="" />
</div>
<div onClick={()=>router.push('/pages/personalized')} >
<img src="/images/del3.webp" alt="" />
</div>
<div onClick={()=>router.push('/pages/cakes')} >
<img src="/images/del4.webp" alt="" />
</div>
</div>
<div className='flex flex-wrap  justify-evenly'>
<div onClick={()=>router.push('/pages/plants')} >
<img src="/images/del5.webp" alt="" />
</div>
<div onClick={()=>router.push('/pages/Food')} >
<img src="/images/del6.webp" alt="" />
</div>
<div onClick={()=>router.push('/pages/flowers')} >
<img src="/images/del7.webp" alt="" />
</div>
<div onClick={()=>router.push('/pages/cakes')} >
<img src="/images/del8.webp" alt="" />
</div>
</div>
   </div>
  )
}

export default Delivery