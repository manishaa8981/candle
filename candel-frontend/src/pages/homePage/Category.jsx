import axios from 'axios';
import { useState, useEffect } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:8081/category/getAll');
            setCategories(response.data);
            console.log('Fetched Categories:', response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };


    useEffect(() => {

        fetchCategories();
    }, []);

    return (
        <>
            <div className="mx-2 w-92% max-w-8.2xl items-center space-y-4 px-5 py-10 md:grid-cols-2 md:max-w-2xl md:space-y-0 lg:grid-cols-4 flex justify-between ">
                {Array.isArray(categories) && categories.length > 0 ? (
                    categories.map((category) => (
                        <div key={category.id} className="flex justify-evenly relative aspect[16] mx-5 w-1/3 rounded-md md:aspect-auto md:h-[400px]">
                            <div className="text-left">
                                <h1 className="text-lg font-semibold text-white">{category.name}</h1>
                                <div className="btn-style">
                                    <h4><a>VIEW PRODUCTS</a></h4>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No categories found</div>
                )}
            </div>
        </>
    );
};

export default Category;
