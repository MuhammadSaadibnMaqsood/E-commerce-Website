import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { RxCross2 } from "react-icons/rx";

const Addcart = () => {
    const [cartItems, setCartItems] = useState([]); 
    const { currency } = useContext(ShopContext);
    const { setcount,count } = useContext(ShopContext);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    const handleRemove = (id) => {
        const updatedCart = cartItems.filter(item => item._id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div>
            {cartItems.length === 0 ? (
                <p className="text-center text-xl mt-10">Your cart is empty.</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className="w-full mt-10 ml-14 flex items-center gap-4 p-4 border-b">
                        <img className="rounded-2xl w-[100px]" src={item.image[0]} alt={item.name} />
                        <div>
                            <p className="font-semibold text-xl">{item.name}</p>
                            <p className="text-lg">{item.price} {currency}</p>
                            <p className="text-gray-600">Category: {item.category}</p>
                            <p className="text-gray-600">Subcategory: {item.subCategory}</p>
                        </div>
                        <RxCross2 
                            onClick={() => {handleRemove(item._id); setcount(count-1);}} 
                            className="hover:bg-gray-200 rounded-full p-1 cursor-pointer text-2xl"
                        />
                    </div>
                ))
            )}
        </div>
    );
};

export default Addcart;
