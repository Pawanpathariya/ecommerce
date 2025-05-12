'use client'
import React, { useEffect, useState } from 'react';
import { getAllProduct } from '../../actions/Productcategory';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/cartSlice';
import { addfav } from '../../redux/favSlice';
import Image from 'next/image';
import { getCategory } from '../../actions/addCategory';
import { useRouter } from 'next/navigation';
const page: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [product, setProduct] = useState<any>([]);
    const [loader, setLoader] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filter, setFilter] = useState<string>('');
    const [sortOption, setSortOption] = useState<string>('asc');
    const [category, setCategory] = useState<any>([]);
    const loaddata = async () => {
        const response = await getAllProduct();
        setProduct(response?.products);
        const categoryResponse = await getCategory();
        console.log(categoryResponse?.categorys);
   setCategory(categoryResponse?.categorys);
        setLoader(true);
    };

    useEffect(() => {
        loaddata();
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
    };

    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value);
    };

    const filteredProducts = product.filter((item: any) =>
        item.proName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter ? item.proCategory === filter : true)
    );

    const sortedProducts = filteredProducts.sort((a: any, b: any) => {
        if (sortOption === 'asc') {
            return a.proPrice - b.proPrice;
        } else {
            return b.proPrice - a.proPrice;
        }
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-indigo-500 mt-5 mb-4 text-center">All Products</h1>
            <div className="flex justify-between mb-4 space-x-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border p-2 rounded-md w-1/3"
                />
                <select value={filter} onChange={handleFilter} className="border p-2 rounded-md w-1/3">
                    <option value="">All Categories</option>
                    {category.map((item: any, index: number) => (
                        <option key={index} value={item.cat}>{item.cat}</option>
                    ))}
                </select>
                <select value={sortOption} onChange={handleSort} className="border p-2 rounded-md w-1/3">
                    <option value="">Sort by Price</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>
            {loader ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sortedProducts.map((item: any, index: number) => (
                        <div key={index} className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg card card3">
                            <Image src={item.proImage} alt="Product Image" width={350} height={300} style={{ height: '200px' }} onClick={() => router.push(`/pages/view/${item.id}`)} />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">{item.proName}</h3>
                                <p className="text-gray-600 mt-2">{item.proDescription}</p>
                                <p className="text-gray-700 font-bold mt-2">Price {item.proPrice}</p>
                                <div className="flex space-x-4 mt-4">
                                    <button className="flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300" onClick={() => dispatch(add({ ...item, quantity: 1 }))}>
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300" onClick={() => dispatch(addfav(item))}>
                                        Favourite
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            )}
        </div>
    );
};

export default page;

