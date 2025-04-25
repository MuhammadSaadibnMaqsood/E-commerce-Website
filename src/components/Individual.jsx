import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { NavLink } from 'react-router-dom';

const Individual = () => {
    const { id } = useParams();
    const [Item, setItem] = useState(null); 
    const { currency } = useContext(ShopContext);
    const { setcount,count } = useContext(ShopContext);
    const [btn1, setbtn1] = useState(false)
    const [btn2, setbtn2] = useState(false)
    const [btn3, setbtn3] = useState(false)

    const {setcart} = useContext(ShopContext);
    const {cart} = useContext(ShopContext);

    const saveLocalStorage= ()=>{
        localStorage.setItem("cart",JSON.stringify(cart));
    }

    const handleClickbtn1 = () => {
        setbtn1(!btn1);
    }
    const handleClickbtn2 = () => {
        setbtn2(!btn2);
    }
    const handleClickbtn3 = () => {
        setbtn3(!btn3);
    }

    useEffect(() => {

        const filteredItem = products.find((item) => item._id === id);
        setItem(filteredItem);
      
    }, [id]);

    const handlecart = () => {
        const updatedCart = [...cart, Item]; // Create updated cart array
        setcart(updatedCart); // Update state
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    const handleAlert = ()=>{
        alert("Item was aded to cart");
        setcount(count+1);
        console.log(count);
    }
    
    
    if (!Item) return <div>Loading...</div>; 

    return (
        <div>
            <div className='individual flex'>
                <div className="images  w-[30%] mt-10 ml-14">
                    <img className='rounded-2xl w-[384px]' src={Item.image[0]} alt={Item.name} />
                    <p className='font mt-5 text-2xl w-[384px] text-left'>{Item.name}</p>
                    <p className='font mt-5 text-2xl w-[384px] text-left'>{Item.price} {currency}</p>
                    <p className='font mt-5 text-2xl w-[384px] text-left'>Catagory: {Item.category}</p>
                    <p className='font mt-5 text-2xl w-[384px] text-left'>Sub Catagory: {Item.subCategory}</p>
                </div>

                <div className="imageDetail w-[30%] mt-10">

                    <p className='mt-5 text-3xl text-left'>Description</p>
                    <p className='mt-5 text-left'>{Item.description}</p>
                    <p className='mt-5 text-left'>Date: {Item.date}</p>
                    <p className='mt-5 text-3xl text-left'>Sizes</p>

                    <p className='mt-5 text-left flex gap-3.5'>
                        <button onClick={handleClickbtn1} className={`text-2xl rounded-2xl w-14 p-2.5 hover:bg-gray-100 ${btn1 ? "bg-red-900 hover:bg-red-900 text-white" : ''}`}>{Item.sizes[0]}</button>
                        <button onClick={handleClickbtn2} className={`text-2xl rounded-2xl hover:bg-gray-100 w-14 p-2.5 ${btn2 ? "bg-red-900 hover:bg-red-900 text-white" : ''}`}>{Item.sizes[1]}</button>
                        <button onClick={handleClickbtn3} className={`text-2xl hover:bg-gray-100 rounded-2xl w-14 p-2.5 ${btn3 ? "bg-red-900 hover:bg-red-900 text-white" : ''}`}>{Item.sizes[2]}</button>
                    </p>

                    <div className='flex flex-col'>
                
                        {/* <NavLink to ={`/product/addtoCart/${Item._id}`}><button className='mt-5 text-center p-2.5 bg-red-700 rounded-2xl hover:bg-red-800 text-white w-[300px]'>Add to cart</button></NavLink> */}
                        <button onClick={()=>{handlecart(); handleAlert()}} className='mt-5 text-center p-2.5 bg-red-700 rounded-2xl cursor-pointer hover:bg-red-800 text-white w-[300px]'>Add to cart</button>
                        <NavLink to ={`/product/buy/${Item._id}`}><button className='mt-5 text-center p-2.5 cursor-pointer bg-red-700 rounded-2xl hover:bg-red-800 text-white w-[300px]'>Buy now</button></NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Individual;
