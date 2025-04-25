import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { NavLink } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ id, title, image, price }) => {
    const { currency } = useContext(ShopContext);

    // Debugging
    // console.log("ProductItem Props:", { id, title, image, price });

    return (
        <div className='width: 100%; parent'>
            <NavLink to={`/product/${id}`}>
                <div className='card m-3 mt-12 w-[300px] p-2 rounded-2xl'>
                    <div className='mt-5 overflow-hidden'>
                        <img className='mt-[17px] rounded-2xl' src={image[0]} alt="" />
                    </div>
                    <div className='font mt-5 text-2xl'>{title}</div>
                    <div className='font mt-5 text-2xl'>{price} {currency}</div>
                </div>
            </NavLink>
        </div>
    );
};

export default ProductItem;
