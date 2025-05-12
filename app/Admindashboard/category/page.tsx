'use client'
import React, { useState, useEffect,useActionState} from 'react'
import { addCategory ,getCategory} from '../../actions/addCategory'
import { FaTrash } from "react-icons/fa";
import { toast } from 'react-hot-toast';
const initialState = {
  success: false,
  error: ''
};
import Image from 'next/image';
import { DeleteCategory } from '../../actions/addCategory';
const Page: React.FC = () => {
  const [state, formAction] = useActionState(addCategory, initialState);
  const [category, setCategory] = useState<any>([]);
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formAction(formData);
    setShowForm(false);
    loadData();
  };
  useEffect(()=>{
if(state.success){
  toast.success("Data inserted");
}
  },[state.success])



useEffect(()=>{
  loadData();
},[])

  const loadData=async()=>{
    const response=await getCategory();
    setCategory(response?.categorys);
  }

 const handleDelete = async (id: number) => {
    try {
      await DeleteCategory(id);
      loadData();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };


  return (
    <div className="h-300 bg-gray-100 p-0 ">
    <div className="w-300 mx-auto">
      <div className="flex flex-col">
        {/* <h1 className="text-4xl font-bold text-gray-800 mb-4">Add Category</h1> */}
        {!showForm && (
          <div>
            <button onClick={() => setShowForm(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Add Category
            </button>
            <div className="mt-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Category List</h2>
              <div className="overflow-x-auto" style={{overflowY: 'scroll', height: '450px'}}>
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Category Name</th>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Category Image</th>
                       <th></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {category.map((item: any) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                          <div className="text-sm leading-5 font-medium text-gray-900">{item.cat}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                          <Image src={item.Image} width={100} height={100} alt='' className="h-20 w-20 rounded-full"/>
                        </td>
                        <td className='pr-5' onClick={() => { handleDelete(item.id) }}>< FaTrash className="text-red-500"/></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {showForm && (
          <form action={formAction} onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4 m-auto">
              <label htmlFor="name" className="text-gray-600">
                Category Name
              </label>
              <input
                type="text"
                id="category"
                name="category"
                className="border border-gray-500 p-2 rounded-md w-100"
                required
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="image" className="text-gray-600">
                Category Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                required
              />
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4">
              Add Category
            </button>
          </form>
        )}
      </div>
    </div>
    </div>
  )
}

export default Page

