'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
const TopCard: React.FC = () => {
  const router = useRouter();
  return (
    <div className="sel-pnl-re sel-pnl-revamp flex flex-wrap justify-space-evenly gap-10 border w-[95%] m-auto  rounded-2xl mt-3 mb-3" style={{ borderColor: "#DD2745" }}>
      <div className='pl-10 p-1'>
        <div onClick={()=>{router.push('/pages/sameday')}} className='cursor-pointer'>
          <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-SDD-v202306.png" alt="Same Day Delivery Gifts" width={60} />
          <p>Same Day Delivery</p>
        </div>
      </div>
      <div style={{width:"1px", backgroundColor:'red',height:"80px",marginTop:"10px"}}></div>
      <div className='p-2'>
        <div onClick={()=>{router.push('/pages/flowers')}} className='cursor-pointer'>
          <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-flower-v202306.png" alt="Flowers" width={60} />
          <p>Flowers</p>
        </div>
      </div>
      <div style={{width:"1px", backgroundColor:'red',height:"80px",marginTop:"10px"}}></div>
      <div className='p-2'>
        <div onClick={()=>{router.push('/pages/cakes')}} className='cursor-pointer'>
          <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-cakes-v202306.png" alt="Cakes" width={60} />
          <p>Cakes</p>
        </div>
      </div>
      <div style={{width:"1px", backgroundColor:'red',height:"80px",marginTop:"10px"}}></div>
      <div className='p-2'>
        <div onClick={()=>{router.push('/pages/personalized')}} className='cursor-pointer'>
          <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-personalize-v202306.png" alt="Personalized Gifts" width={60} />
          <p>Personalized</p>
        </div>
      </div>
      <div style={{width:"1px", backgroundColor:'red',height:"80px",marginTop:"10px"}}></div>
      <div className='p-2'>
        <div onClick={()=>{router.push('/pages/plants')}} className='cursor-pointer' >
          <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-plants-v202306.png" alt="Plants" width={60} />
          <p>Plants</p>
        </div>
      </div>
      <div style={{width:"1px", backgroundColor:'red',height:"80px",marginTop:"10px"}}></div>
      <div className='p-2'>
        <div onClick={()=>{router.push('/pages/sameday')}} className='cursor-pointer' >
          <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-new-arrivals-v202306-v2.png" alt="New Arrival Gifts" width={60} />
          <p>New Arrivals</p>
        </div>
      </div>
      <div style={{width:"1px", backgroundColor:'red',height:"80px",marginTop:"10px"}}></div>
      <div className='p-2'>
        <div onClick={()=>{router.push('/pages/cakes')}} className='cursor-pointer'>
          <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/international_d_tiles_5_20240530184913.png" alt="International" width={60} />
          <p>International</p>
        </div>
      </div>
      <div style={{width:"1px", backgroundColor:'red',height:"80px",marginTop:"10px"}}></div>
      <div className='p-2'>
        <div>
          <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-bulk-order-v202306.png" alt="Bulk/Corp. Gifts" width={60} />
          <p>Bulk/Corp. Gifts</p>
        </div>
      </div>
    </div>
  );
};

export default TopCard;

