import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { ShopContext } from '../context/ShopContext';
import { IoMdArrowRoundBack } from "react-icons/io";


const Navbar = () => {

    const {search,setsearch} = useContext(ShopContext);
    const {count} = useContext(ShopContext);

    const [click, setclick] = useState(false);
    const handleClick = () => {
        setclick(!click);

    }
    const handlesearch = () => {
        setsearch(!search);

    }
    
    return (
        <>
            <nav className='flex justify-around h-14  items-center relative'>
                <NavLink to="/"><div className='logo text-3xl'>ShopTrek </div></NavLink>
                <div className={`pages ${click ? "ham-menu" : ""}`}>

                    <ul className='flex gap-4'>
                        <NavLink to="/"> <li>HOME</li></NavLink>

                        <NavLink to={"/collection"}><li>COLLECTION</li></NavLink>
                        <NavLink to={"/about"}><li>ABOUT</li></NavLink>
                        <NavLink to={"/contact"}><li>CONTACT</li></NavLink>
                    </ul>
                </div>

                <div className='flex justify-center items-center'>
                    <div class="button-container flex gap-4 div-3">
                        <NavLink to={"/collection"}>
                            <button onClick={handlesearch} class="button cursor-pointer">
                                <svg
                                    class="icon"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </button>
                        </NavLink>


        


                        <NavLink to={"/addtoCart"}>
                            <button class="button cursor-pointer">
                                <svg
                                    class="icon"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path
                                        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                                    ></path>
                                </svg>
                            </button>
                        </NavLink>

                        <div className={`cartcount w-[14px] h-[14px] rounded-4xl bg-black text-white text-[10px] ${count>0? "flex": "hidden"} justify-center items-center absolute top-[24px] right-[200px]`}>
                           {count}
                        </div>

                        <button>
                            <RxHamburgerMenu onClick={handleClick} className='hamburger' />

                        </button>


                    </div>
                </div>
            </nav>
            <div
  className={`h-52 w-full z-50 bg-black text-white flex justify-center absolute top-0 transition-all duration-300 ease-in-out ${
    click ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
  }`}
>
  <ul className="pt-3 flex flex-col w-full justify-center items-center gap-1.5 ">
    <button onClick={handleClick} className="button w-full text-start pl-10">
    <IoMdArrowRoundBack />
    </button>
    <NavLink onClick={handleClick} to="/">
      <li>HOME</li>
    </NavLink>
    <NavLink onClick={handleClick} to="/collection">
      <li>COLLECTION</li>
    </NavLink>
    <NavLink onClick={handleClick} to="/about">
      <li>ABOUT</li>
    </NavLink>
    <NavLink onClick={handleClick} to="/contact">
      <li>CONTACT</li>
    </NavLink>
  </ul>
</div>

        </>
    )
}

export default Navbar