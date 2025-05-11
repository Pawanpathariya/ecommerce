import Image from 'next/image';

const Cele: React.FC = () => {
  const categories = [
    { imgSrc: '/images/cel1.webp', title: 'Cakes' },
    { imgSrc: '/images/cel2.webp', title: 'Cakes' },
    { imgSrc: '/images/cel5.webp', title: 'Cakes' },
    { imgSrc: '/images/cel3.webp', title: 'Cakes' },
    { imgSrc: '/images/cel4.jpg', title: 'Cakes' },
  ];

  return (
    <>
      <div className="hdr-ttl ml-3">
        <div className="hdr-ctr">
          <h3>Categories</h3>
          <p>Wide range of gifts for your celebration</p>
          <div className='flex flex-wrap gap-5'>
            {categories.map((category, index) => (
              <div key={index} className="flex gap-5 p-2 border rounded-lg shadow-lg w-1/1.7">
                <div className="h-full">
                  <Image src={category.imgSrc} alt="" className="rounded-lg" height={200} width={200} />
                </div>
                <div className="w-1/2 p-4 shadow-md">
                  <h3 className="font-semibold text-center text-lg mb-2">{category.title}</h3>
                  <ul className="list-none pl-6 space-y-1">
                    <li className="text-gray-700 font-light">Birthday Cakes</li>
                    <li className="text-gray-700 font-light">Chocolate Cakes</li>
                    <li className="text-gray-700 font-light">Wedding Cakes</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cele;

