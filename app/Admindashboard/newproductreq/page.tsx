'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getProductAdmin } from '../../actions/getProductAdmin';
import { ChangeStatus } from '../../actions/acceptReject';

const Page: React.FC = () => {
  const [product, setProduct] = useState<any[]>([]);

  const loadData = async () => {
    const response = await getProductAdmin();
    setProduct(response?.products || []);
  };

  const handleChangeStatus = async (id: string, stat: string) => {
    await ChangeStatus({ id, stat });
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="w-full p-4 overflow-x-auto overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Product List</h1>
      <div className="overflow-x-auto overflow-y-auto h-150">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-center">Name</th>
              <th className="px-6 py-3 text-center">Price</th>
              <th className="px-6 py-3 text-center">Description</th>
              <th className="px-6 py-3 text-center">Category</th>
              <th className="px-6 py-3 text-center">Same Day Delivery</th>
              <th className="px-6 py-3 text-center">Type</th>
              <th className="px-6 py-3 text-center">Vendor Name</th>
              <th className="px-6 py-3 text-center">Image</th>
              <th className="px-6 py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item: any) => (
              item.status === 'pending' && (
                <tr key={item.id} className="hover:bg-gray-100 text-center">
                  <td>{item.proName}</td>
                  <td>{item.proPrice}</td>
                  <td>{item.proDescription}</td>
                  <td>{item.proCategory}</td>
                  <td>{item.sameDay ? 'Yes' : 'No'}</td>
                  <td>{item.type}</td>
                  <td>{item.user?.name || 'N/A'}</td>
                  <td>
                    <Image
                      src={item.proImage}
                      alt={item.proName}
                      width={100}
                      height={100}
                      className="rounded"
                    />
                  </td>
                  <td>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleChangeStatus(item.id, 'Accepted')}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleChangeStatus(item.id, 'Rejected')}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;

