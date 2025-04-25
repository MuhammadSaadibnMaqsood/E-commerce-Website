import React, { useContext, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { ShopContext } from '../context/ShopContext';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestCollection, setLatestCollection] = useState([]);

    useEffect(() => {
        console.log("Products in ShopContext:", products); 
        if (products && products.length > 0) {
            setLatestCollection(products.slice(0, 10));
        }
    }, [products]);

    return (
        <div>
            <div className='flex flex-wrap gap-2 justify-center'>
                {latestCollection.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}  
                        title={item.name}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
