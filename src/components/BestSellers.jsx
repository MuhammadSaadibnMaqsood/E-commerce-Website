import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSellers = () => {
    const { products } = useContext(ShopContext); // ✅ Corrected context consumption
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        const filtered = products.filter((item) => item.bestseller);
        setBestSellers(filtered);
    }, [products]);

    return (
        <div className='flex flex-wrap gap-2 justify-center'>
            {bestSellers.map((item, index) => (
                <ProductItem 
                    key={index} 
                    id={item._id}  
                    title={item.name} 
                    image={item.image} 
                    price={item.price} 
                />
            ))}
        </div>
    );
};

export default BestSellers;
