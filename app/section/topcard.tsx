'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const TopCard: React.FC = () => {
  const router = useRouter();
  const categories = [
    { src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-SDD-v202306.png", alt: "Same Day Delivery Gifts", label: "Same Day Delivery", path: "/pages/sameday" },
    { src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-flower-v202306.png", alt: "Flowers", label: "Flowers", path: "/pages/flowers" },
    { src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-cakes-v202306.png", alt: "Cakes", label: "Cakes", path: "/pages/cakes" },
    { src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-personalize-v202306.png", alt: "Personalized Gifts", label: "Personalized", path: "/pages/personalized" },
    { src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-plants-v202306.png", alt: "Plants", label: "Plants", path: "/pages/plants" },
    { src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-new-arrivals-v202306-v2.png", alt: "New Arrival Gifts", label: "New Arrivals", path: "/pages/sameday" },
    { src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/international_d_tiles_5_20240530184913.png", alt: "International", label: "International", path: "/pages/cakes" },
    { src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt0prodlp/banners/w-tiles-bulk-order-v202306.png", alt: "Bulk/Corp. Gifts", label: "Bulk/Corp. Gifts", path: "" },
  ];

  return (
    <div className="flex flex-wrap justify-evenly gap-4 w-full max-w-6xl mx-auto p-4">
      {categories.map((category, index) => (
        <div key={index} className="flex items-center space-x-8">
          <div className="cursor-pointer" onClick={() => category.path && router.push(category.path)}>
            <img src={category.src} alt={category.alt} width={60} className="mx-auto" />
            <p className="text-center">{category.label}</p>
          </div>
          {index < categories.length - 1 && (
            <div className="hidden lg:block" style={{ width: "1px", backgroundColor: 'red', height: "80px", marginTop: "10px" }}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopCard;

