'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Favourite:React.FC = () => {
  const router=useRouter();
  return (
   <div className='m-4'>
<h2 className='pl-4'>Your Favourite Picks</h2>
<div className='flex flex-wrap justify-evenly'> 
<div className='cursor-pointer' onClick={()=>router.push('/pages/cakes')}>
    <img src="/images/fav1.webp" alt="" width={700}/>
</div>
<div className='cursor-pointer'  onClick={()=>router.push('/pages/flowers')}>
    <img src="/images/fav2.webp" alt="" width={700}/>
</div>
</div>

<div className='flex flex-wrap  justify-evenly'>
<div className='cursor-pointer'  onClick={()=>router.push('/pages/living')} >
<img src="/images/fav3.webp" alt="" />
</div>
<div className='cursor-pointer'  onClick={()=>router.push('/pages/personalized')}>
<img src="/images/fav4.webp" alt="" />
</div>
<div className='cursor-pointer'  onClick={()=>router.push('/pages/plants')}>
<img src="/images/fav5.webp" alt="" />
</div>
<div className='cursor-pointer'  onClick={()=>router.push('/pages/Food')} >
<img src="/images/fav6.webp" alt="" />
</div>

</div>
   </div>
  )
}

export default Favourite