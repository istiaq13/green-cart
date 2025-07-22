import React from 'react'
import { categories } from './../assets/assets';
import { useAppContext } from './../context/AppContext';

const Categories = () => {

    const {navigate} = useAppContext();

  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Categories</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-4'>
        
        {categories.map((category, index) => (
          <div
            key={index}
            className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col items-center justify-center hover:bg-gray-100 transition'
            style={{ backgroundColor: category.bgColor}}
            onClick={() => {
                navigate(`/products/${category.text.toLowerCase()}`);
                scrollTo(0, 0);
            }}
          >
            <img
              src={category.image}
              alt={category.text}
              className='group-hover:scale-110 transition max-w-28'
            />
            <p className='text-sm font-medium'>{category.text || 'Fruit'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
