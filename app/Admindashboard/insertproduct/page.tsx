'use client'
import { Productaction } from '../../actions/productaction';
import { getCategory } from '../../actions/addCategory';
import { useActionState, useEffect, useState, startTransition } from 'react';
import { toast } from 'react-hot-toast';
const initialState = {
  success: false,
  error: ''
};

const Page: React.FC = () => {
  const user = localStorage.getItem('user');
  const id = user ? JSON.parse(user).id : null;
  const [state, formAction] = useActionState(Productaction, initialState);
  const [category, setCategory] = useState<any>([]);
  const [formData, setFormData] = useState<any>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startTransition(() => {
      const formData = new FormData(event.currentTarget);
      formData.append('id', id as string);
      formAction(formData);
      setFormData(null);
    });
  };

  useEffect(() => {
    if (state.success) {
      setFormData(null);
      toast.success('Data inserted successfully!');
    }
  }, [state.success]);

  const loadData = async () => {
    try {
      const categorys = await getCategory();
      setCategory(categorys.categorys);
    } catch (error) {
      console.error('Error fetching categorys:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className='w-full'>
        <h1 className='text-2xl font-bold text-center'>Insert Page</h1>
        <form onSubmit={handleSubmit} className='ml-40 mt-10 flex flex-col justify-center items-center'>
          <div className='flex flex-col'>
            <div className="flex bg-white rounded-md shadow-md p-4 h-16 gap-2">
              <label htmlFor="category" className="text-gray-600 w-50 font-semibold block mb-2">Select Category:</label>
              <select name="category" required value={formData?.category || ''} onChange={e => setFormData({...formData, category: e.target.value})}>
                <option value="" className='w-full'>----Select-----</option>
                {category.map((category: any) => (
                  <option key={category.id} value={category.cat} className='w-full'>{category.cat}</option>
                ))}
              </select>
            </div>

            <div className="flex bg-white rounded-md shadow-md p-4 h-16 gap-2">
              <label htmlFor="name" className="text-gray-600 w-43 font-semibold block mb-2">Product Name:</label>
              <input type="text" id="name" name="name" className="border-2 border-gray-500 p-2 rounded-md w-full" required value={formData?.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>

            <div className="flex bg-white rounded-md shadow-md p-4 h-16 gap-2">
              <label htmlFor="price" className="text-gray-600 w-43 font-semibold block mb-2">Price:</label>
              <input type="number" id="price" name="price" className="border-2 border-gray-500 p-2 rounded-md w-full" required value={formData?.price || ''} onChange={e => setFormData({...formData, price: e.target.value})} />
            </div>

            <div className="flex bg-white rounded-md shadow-md p-4 h-16 gap-2">
              <label htmlFor="description" className="text-gray-600 w-43 font-semibold block mb-2">Description:</label>
              <textarea id="description" name="description" className="border-2 border-gray-500 p-2 rounded-md w-full" required value={formData?.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} />
            </div>

            <div className="flex bg-white rounded-md shadow-md p-4 h-16 gap-2">
              <label htmlFor="image" className="text-gray-600 w-43 font-semibold block mb-2">Image:</label>
              <input type="file" id="image" name="image" className="border-2 border-gray-500 p-2 rounded-md w-full" required onChange={e => setFormData({...formData, image: e.target.value})} />
            </div>

            <div className="flex bg-white rounded-md shadow-md p-4 h-16 gap-2">
              <label htmlFor="sameDayDelivery" className="text-gray-600 w-50 font-semibold block mb-2">Same Day Delivery:</label>
              <div className="flex gap-2">
                <input type="radio" id="sameDayDeliveryYes" name="sameDayDelivery" value="true" className="border-2 border-gray-500 p-2 rounded-md" checked={formData?.sameDayDelivery === 'true'} onChange={e => setFormData({...formData, sameDayDelivery: e.target.value})} />
                <label htmlFor="sameDayDeliveryYes" className="text-gray-600 font-semibold block mb-2">Yes</label>
                <input type="radio" id="sameDayDeliveryNo" name="sameDayDelivery" value="false" className="border-2 border-gray-500 p-2 rounded-md" checked={formData?.sameDayDelivery === 'false'} onChange={e => setFormData({...formData, sameDayDelivery: e.target.value})} />
                <label htmlFor="sameDayDeliveryNo" className="text-gray-600 font-semibold block mb-2">No</label>
              </div>
            </div>

            <div className="flex bg-white rounded-md shadow-md p-4 h-16 gap-2">
              <label htmlFor="type" className="text-gray-600 w-50 font-semibold block mb-2">Type of Gift:</label>
              <select name="type" required value={formData?.type || ''} onChange={e => setFormData({...formData, type: e.target.value})}>
                <option value="" className='w-full'>----Select-----</option>
                <option value="birthday" className='w-full'>birthday</option>
                <option value="anniversary" className='w-full'>anniversary</option>
                <option value="marriage" className='w-full'>marriage</option>
                <option value="other" className='w-full'>other</option>
              </select>
            </div>

            <div className="flex justify-center mt-4">
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Add Product</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;


