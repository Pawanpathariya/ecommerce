import React from "react";

const StatsSection:React.FC = () => {
  return (
    <div className="bg-white text-gray-800 p-6">
      <div className="flex flex-col md:flex-row justify-evenly items-center py-10 border-b">
        <div className="text-center">
          <h2 className="text-7xl font-bold text-gray-500">400+</h2>
          <p className="text-red-600 mt-2">Cities having same day delivery</p>
        </div>
        <div className="text-center mt-10 md:mt-0">
          <h2 className="text-6xl font-bold text-gray-500">100+</h2>
          <p className="text-red-600 mt-2">Countries being served with happiness</p>
        </div>
        <div className="text-center mt-10 md:mt-0">
          <h2 className="text-6xl font-bold text-gray-500">5<span className="text-3xl">Million+</span></h2>
          <p className="text-red-600 mt-2">Gift boxes delivered across the globe</p>
        </div>
      </div>

      <div className="text-center my-8">
        <h3 className="font-semibold text-lg">Download our IGP app for a better experience !!</h3>
        <div className="flex justify-center gap-4 mt-4">
          <img src="/images/google.webp" alt="Google Play" className="h-12" />
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-12" />
        </div>
      </div>

      <div className="flex justify-center gap-6 text-2xl mb-10">
        <a href="#"><i className="fab fa-facebook text-blue-600" /></a>
        <a href="#"><i className="fab fa-twitter text-blue-400" /></a>
        <a href="#"><i className="fab fa-instagram text-pink-500" /></a>
        <a href="#"><i className="fab fa-linkedin text-blue-700" /></a>
        <a href="#"><i className="fab fa-youtube text-red-600" /></a>
      </div>

      <div className="px-4 md:px-20 text-sm text-gray-700 leading-relaxed">
        <h4 className="text-base font-bold mb-2">IGP.com - Same Day Online Gift Delivery in India, Send Gifts Online</h4>
        <p>
          IGP is your Trusted Online Gift Shop Near You with a vast assortment of Personalized Gifts, Flowers, Cakes, Home & Living, Fashion & Lifestyle Gifts, Toys & Games, Jewellery, Gourmet & Plants.
        </p>
        <p className="mt-2">
          From Valentine’s Day, Birthdays to Wedding Anniversaries and Rakhi to New Year, we have a gift for every occasion! With Same Day Delivery to 400+ Cities, catering to over 500 million customers in 100+ countries, IGP is all about delights & enhancing the joy of searching gifts for loved ones.
        </p>
        <p className="mt-2">
          Cakes and flower are one of the most appreciated gifts for all special occasions. IGP is an online gift shop that houses some of the tastiest cakes and fresh flowers.
        </p>
        <p className="mt-2">
          Our range of cakes comprises of tempting chocolate, black forest, strawberry, vanilla, butterscotch and much more. We also provide you designer cakes that are exclusive gifts available at IGP. We also house photo cakes in vanilla, chocolate and dark chocolate flavours.
        </p>
        <p className="mt-2">
          If you wish to send cake online for your loved ones, you can easily do so by choosing <a href="#" className="text-red-500 underline">online cake delivery</a> from our website. We house fresh flower bouquets that you can pick to please a dear one on a special occasion. Fresh roses, carnations, orchids, gerberas are some flowers that are always high in demand on our website.
        </p>
        <p className="mt-2">
          Order cakes online along with flowers and make your dear one's occasions even more special with your thoughtful gifts. We offer same day delivery and midnight delivery of flowers and cakes in India.
        </p>
        <p className="mt-2">
          So, pick the best flower and cake gifts for your loved ones in India even if you are abroad and celebrate their moment of joy with great fervor.
        </p>
        <button className="mt-4 px-4 py-2 border border-gray-400 rounded hover:bg-gray-100">SHOW MORE</button>
      </div>
    </div>
  );
};

export default StatsSection;
