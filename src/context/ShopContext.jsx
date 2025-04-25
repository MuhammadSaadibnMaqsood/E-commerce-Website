import { createContext } from "react";
import { useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = "Rs";
    const deliveryFee = 200; 
    const [cart, setcart] = useState([])
    const [search, setsearch] = useState(false);
    const [count, setcount] = useState(null);

    
    const contextValue = {
        products, 
        currency, 
        deliveryFee,
        cart,
        setcart,
        cart,
        search,
        setsearch,
        count,
        setcount
    };



    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
