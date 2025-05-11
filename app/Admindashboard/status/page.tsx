'use client'
import { getProductAdmin } from '../../actions/getProductAdmin';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const initialState = {
  success: false,
  error: '',
  product: null,
};

const Page: React.FC = () => {
  const [product, setProduct] = useState<any>([]);
  const user = localStorage.getItem('user');
  const id = user ? JSON.parse(user).id : null;
  const loadData = async () => {
    const response = await getProductAdmin();
    console.log(response?.products);
    const filteredProducts = await response?.products.filter((item: any) => item.userId== id);
   setProduct(filteredProducts);
  }
  

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>

      <div className='w-full'>
        <h1 className="text-2xl font-bold mb-4 text-center">Product List</h1>
        <div className="w-310 overflow-y-auto h-screen" style={{height: 'calc(100vh - 200px)'}}>
            <table className="table w-full m-auto ">
              <thead>
                <tr className="bg-gray-200 sticky top-0">
                  <th className="px-6 py-3 text-center">Name</th>
                  <th className="px-6 py-3 text-center">Price</th>
                  <th className="px-6 py-3 text-center">Description</th>
                  <th className="px-6 py-3 text-center">Category</th>
                  <th className="px-6 py-3 text-center">Same Day Delivery</th>
                  <th className="px-6 py-3 text-center">Type</th>
                  <th className="px-6 py-3">Image</th>
                  <th>Status</th>
               
                </tr>
              </thead>
              <tbody>
                {product.map((item: any) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-center">{item.proName}</td>
                    <td className="px-6 py-4 text-center">{item.proPrice}</td>
                    <td className="px-6 py-4 text-center">{item.proDescription}</td>
                    <td className="px-6 py-4 text-center">{item.proCategory}</td>
                    <td className="px-6 py-4 text-center">{item.sameDay ? 'Yes' : 'No'}</td>
                    <td className="px-6 py-4 text-center">{item.type}</td>
                    <td className="px-6 py-4 text-center">
                      <Image
                        src={item.proImage}
                        alt={item.proName}
                        width={100}
                        height={100}
                        className="rounded"
                      />
                    </td>
               <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </>
  );
}

export default Page;

