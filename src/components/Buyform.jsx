import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { NavLink } from 'react-router-dom';

const Buyform = () => {
    const { id } = useParams();
    const { products, deliveryFee } = useContext(ShopContext);
    const [Item, setItem] = useState(null);

    useEffect(() => {
        if (products.length > 0) {
            const item = products.find((item) => item._id == id);
            setItem(item);
        }
    }, [id, products]);

    const handleClick = () => {
        alert("🎉 Order placed successfully!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <form className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">🛒 Place Your Order</h2>
                
                {Item && (
                    <div className="bg-gray-200 p-4 rounded-xl mb-4">
                        <p className="text-lg font-semibold">📦 Product: <span className="text-gray-800">{Item.name}</span></p>
                        <p className="text-lg font-semibold">💰 Total Price: <span className="text-green-600">${Item.price + deliveryFee}</span></p>
                    </div>
                )}

                <input className="mb-4 p-3 w-full border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                    type="text" placeholder="👤 Enter name" />
                
                <input className="mb-4 p-3 w-full border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                    type="tel" placeholder="📞 Enter number" />
                
                <input className="mb-4 p-3 w-full border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                    type="text" placeholder="🏠 Enter address" />

                <NavLink to={`/collection`}><button 
                    className="mt-4 p-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-xl transition duration-300 shadow-lg"
                    onClick={handleClick} type="submit">
                    🚀 Order Now
                </button>
                </NavLink>
            </form>
        </div>
    );
};

export default Buyform;
