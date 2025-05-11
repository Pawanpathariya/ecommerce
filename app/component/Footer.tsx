import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#f6f6f6] text-black px-6 md:px-20 py-12 mt-4">
      <div className="flex flex-col md:flex-row gap-12 md:gap-8">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h1 className="text-[2.5rem] font-bold text-[#7ab630] mb-2">
            <span className="text-black">
              <img src="/images/logo.png" alt="logo" className="w-32 h-auto" />
            </span>
          </h1>
          <p className="text-black/50 mt-1 mb-4 text-justify text-sm">
            Tax No. 08AAECT7203P1ZX
          </p>
          <p className="text-black/50 text-justify text-sm mb-4">
            IGP is your Trusted Online Gift Shop Near You with a vast assortment of
            Personalized Gifts, Flowers, Cakes, Home & Living, Fashion & Lifestyle
            Gifts, Toys & Games, Jewellery, Gourmet & Plants. <br />
            Cakes and flower are one of the most appreciated gifts for all special
            occasions. IGP is an online gift shop that houses some of the tastiest
            cakes and fresh flowers. <br />
            Our range of cakes comprises of tempting chocolate, black forest,
            strawberry, vanilla, butterscotch and much more. We also provide you
            designer cakes that are exclusive gifts available at IGP. We also house
            photo cakes in vanilla, chocolate and dark chocolate flavours. <br />
            If you wish to send cake online for your loved ones, you can easily do so
            by choosing online cake delivery from our website. We house fresh flower
            bouquets that you can pick to please a dear one on a special occasion.
            Fresh roses, carnations, orchids, gerberas are some flowers that are
            always high in demand on our website. <br />
            Order cakes online along with flowers and make your dear one's occasions
            even more special with your thoughtful gifts. We offer same day delivery
            and midnight delivery of flowers and cakes in India.
            <br />
            Be it sweets, savoury, dry fruits, dried fruits or hampers, all the
            offerings of Shahi Swad promise premium quality, delectable taste, hygiene
            and a smile on your face.
          </p>
          <h6 className="uppercase tracking-widest text-sm font-medium mb-4">
            Follow Us
          </h6>
          <div className="flex gap-2">
            {[FaInstagram, FaFacebook, FaLinkedin, FaSquareXTwitter].map(
              (Icon, i) => (
                <span
                  key={i}
                  className="w-9 h-9 flex items-center justify-center border border-[#77ab38] text-[#7ab730] hover:text-white hover:bg-[#7ab730] cursor-pointer transition-all"
                >
                  <Icon />
                </span>
              )
            )}
          </div>
        </div>

        {/* Middle Column */}
        <div className="md:w-1/4">
          <h5 className="text-black text-lg uppercase tracking-widest font-semibold mb-6">
            our services
          </h5>
          <div className="flex flex-col gap-2 text-black/50 text-sm">
            {[
              "About",
              "Bulk orders",
              "Careers",
              "Contact us",
              "Our Story",
            ].map((item, i) => (
              <span
                key={i}
                className="hover:text-black cursor-pointer flex items-center gap-1"
              >
                <CiLocationArrow1 />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/4">
          <h5 className="text-black text-lg uppercase tracking-widest font-semibold mb-6 mt-6 md:mt-0">
            useful links
          </h5>
          <div className="flex flex-col gap-2 text-black/50 text-sm">
            {[
              "Refund & Cancellation Policy",
              "Store Policy",
              "Disclaimer",
              "Store Locator",
              "Shop Global",
              "Online Payment Policy",
              "Terms & Conditions",
            ].map((link, i) => (
              <span
                key={i}
                className="hover:text-black cursor-pointer flex items-center gap-1"
              >
                <FaAngleRight />
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
