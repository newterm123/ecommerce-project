import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';



const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden rounded-lg'>
        {/* If image is an array, use image[0]; otherwise just use image */}
        <img
          className='hover:scale-110 transition ease-in-out duration-300 w-full h-60 object-cover'
          src={Array.isArray(image) ? image[0] : image}
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-sm truncate'>{name}</p>
      <p className='text-sm font-medium'>
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
