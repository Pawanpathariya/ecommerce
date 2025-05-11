'use client';

import { getProductAdmin } from '../../actions/getProductAdmin';
import { useEffect, useState } from 'react';
import { DeleteProduct } from '../../actions/deleteProduct';
import { Editproduct } from '../../actions/editaction';
import Image from 'next/image';
import { getCategory } from '../../actions/addCategory';

const Page: React.FC = () => {
  const [product, setProduct] = useState<any>([]);
  const [editdata, setEditData] = useState<any>({});
  const [edit, setEdit] = useState(true);
  const [category, setCategory] = useState<any>([]);

  const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
  const id = user ? JSON.parse(user).id : null;

  const loadData = async () => {
    const response = await getProductAdmin();
    const filteredProducts = response?.products.filter((item: any) => item.userId == id);
    setProduct(filteredProducts);
  };

  const handleSub = async (e: any) => {
    e.preventDefault();
    await Editproduct({ ...editdata, id: editdata.id, userId: id });
    setEdit(true);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData1 = async () => {
    try {
      const categorys = await getCategory();
      setCategory(categorys.categorys);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    loadData1();
  }, []);

  const handleDelete = async (id: any) => {
    await DeleteProduct(id);
    loadData();
  };

  return (
    <div className='w-full'>
      <h1 className="text-2xl font-bold mb-4 text-center">Product List</h1>
      <div className="w-310 overflow-y-auto h-screen">
        {!edit ? (
          <form className="bg-white p-4 rounded-md shadow-md" onSubmit={handleSub}>
            <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 block mb-2">Select Category:</label>
                <select
                  value={editdata.proCategory || ''}
                  onChange={(e) => setEditData({ ...editdata, proCategory: e.target.value })}
                  className="border-2 border-gray-500 p-2 rounded-md w-full"
                >
                  <option value="">----Select-----</option>
                  {category.map((category: any) => (
                    <option key={category.id} value={category.cat}>{category.cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-gray-600 block mb-2">Product Name:</label>
                <input
                  type="text"
                  value={editdata.proName}
                  onChange={(e) => setEditData({ ...editdata, proName: e.target.value })}
                  className="border-2 border-gray-500 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label className="text-gray-600 block mb-2">Price:</label>
                <input
                  type="number"
                  value={editdata.proPrice}
                  onChange={(e) => setEditData({ ...editdata, proPrice: e.target.value })}
                  className="border-2 border-gray-500 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label className="text-gray-600 block mb-2">Description:</label>
                <textarea
                  value={editdata.proDescription}
                  onChange={(e) => setEditData({ ...editdata, proDescription: e.target.value })}
                  className="border-2 border-gray-500 p-2 rounded-md w-full"
                />
              </div>
              <div>
                <label className="text-gray-600 block mb-2">Type of Gift:</label>
                <select
                  value={editdata.type}
                  onChange={(e) => setEditData({ ...editdata, type: e.target.value })}
                  className="border-2 border-gray-500 p-2 rounded-md w-full"
                >
                  <option value={editdata.type}>{editdata.type}</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="marriage">Marriage</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
                Save changes
              </button>
            </div>
          </form>
        ) : (
          <div className="overflow-y-auto h-300">
            <table className="table w-full m-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-3 text-center">Name</th>
                  <th className="px-6 py-3 text-center">Price</th>
                  <th className="px-6 py-3 text-center">Description</th>
                  <th className="px-6 py-3 text-center">Category</th>
                  <th className="px-6 py-3 text-center">Same Day Delivery</th>
                  <th className="px-6 py-3 text-center">Type</th>
                  <th className="px-6 py-3">Image</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {product.map((item: any) =>
                  item.status === 'Accepted' && (
                    <tr key={item.id} className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-center">{item.proName}</td>
                      <td className="px-6 py-4 text-center">{item.proPrice}</td>
                      <td className="px-6 py-4 text-center">{item.proDescription}</td>
                      <td className="px-6 py-4 text-center">{item.proCategory}</td>
                      <td className="px-6 py-4 text-center">{item.sameDay ? 'Yes' : 'No'}</td>
                      <td className="px-6 py-4 text-center">{item.type}</td>
                      <td className="px-6 py-4 text-center">
                        <Image src={item.proImage} alt={item.proName} width={100} height={100} className="rounded" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          className="text-white bg-red-500 hover:bg-red-700 py-2 px-5 rounded-md"
                          onClick={() =>handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-5 rounded-md"
                          onClick={() => { setEditData(item); setEdit(false); }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
