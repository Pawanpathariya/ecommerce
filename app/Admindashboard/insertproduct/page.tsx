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
      const formDataObj = new FormData(event.currentTarget);
      formDataObj.append('id', id as string);
      formAction(formDataObj);
      setFormData(null);
    });
  };

  useEffect(() => {
    if (state.success) {
      setFormData(null);
      toast.success('Product added successfully!');
    }
  }, [state.success]);

  const loadData = async () => {
    try {
      const categorys = await getCategory();
      setCategory(categorys.categorys);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen overflow-y-scroll scroll-smooth scrollbar-none">
      <div className="w-200 mx-auto bg-white p-8 rounded-2xl shadow-md overflow-y-scroll h-150 ml-50 scroll-smooth scrollbar-none">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          

          <div className='scroll-smooth scrollbar-none'>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Select Category</label>
            <select
              name="category"
              required
              value={formData?.category || ''}
              onChange={e => setFormData({ ...formData, category: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
            >
              <option value="" disabled className="text-gray-500">
                -- Select --
              </option>
              {category.map((cat: any) => (
                <option key={cat.id} value={cat.cat} className="text-gray-700">
                  {cat.cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData?.name || ''}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              required
              value={formData?.price || ''}
              onChange={e => setFormData({ ...formData, price: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              required
              rows={3}
              value={formData?.description || ''}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
            <input
              type="file"
              id="image"
              name="image"
              required
              className="mt-1 block w-full border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={e => setFormData({ ...formData, image: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Same Day Delivery</label>
            <div className="flex gap-4 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="sameDayDelivery"
                  value="true"
                  checked={formData?.sameDayDelivery === 'true'}
                  onChange={e => setFormData({ ...formData, sameDayDelivery: e.target.value })}
                  className="text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="sameDayDelivery"
                  value="false"
                  checked={formData?.sameDayDelivery === 'false'}
                  onChange={e => setFormData({ ...formData, sameDayDelivery: e.target.value })}
                  className="text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type of Gift</label>
            <select
              name="type"
              required
              value={formData?.type || ''}
              onChange={e => setFormData({ ...formData, type: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
            >
              <option value="" disabled className="text-gray-500">
                -- Select --
              </option>
              <option value="birthday" className="text-gray-700">
                Birthday
              </option>
              <option value="anniversary" className="text-gray-700">
                Anniversary
              </option>
              <option value="marriage" className="text-gray-700">
                Marriage
              </option>
              <option value="other" className="text-gray-700">
                Other
              </option>
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow-sm transition"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;

