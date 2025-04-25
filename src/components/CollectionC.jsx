import React, { useState, useContext, useEffect } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const CollectionC = () => {
  const [view, setview] = useState(false);
  const { products, search} = useContext(ShopContext);

  const [Catagory, setCatagory] = useState([]);
  const [subCatagory, setsubCatagory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  const handleSearchBar = (e) => {
    const str = e.target.value.toLowerCase(); 
    const searchItem = products.filter(item => 
        item.name.toLowerCase().includes(str) 
    );
    setFilteredProducts(searchItem);
};


  const Onchange = (e)=>{

      const value = e.target.value;
      setCatagory((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value) 
          : [...prev, value]                   
      );

    
  }
  const Onchange2 = (e)=>{

      const value = e.target.value;
      setsubCatagory((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value) 
          : [...prev, value]                     
      );

    
  }

  Catagory
  const filter = () => {
    let temp = [...products];
  
    if (Catagory.length > 0) {
      temp = temp.filter((item) => Catagory.includes(item.category));
    }
  
    if (subCatagory.length > 0) {
      temp = temp.filter((item) => subCatagory.includes(item.subCategory));
    }
  
    setFilteredProducts(temp); 
  };
  
  useEffect(() => {
    filter(); 
  }, [Catagory, subCatagory, products]); 
  
  
  const handleClick = () => {
    setview(!view);
  };

  return (
    <>
      <div className="flex justify-center items-center"><input type="text" onChange={handleSearchBar} className={`serachbar mb-4 mt-6 p-3 w-2xl  border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none ${search? "block":"hidden"}`}  placeholder=" search product" /></div>
      <div className="flex relative flex-col md:flex-row">

        {/* Filter Section */}
        <div className="w-full md:w-[20%] absolute md:static z-10 bg-white md:bg-transparent">
          <div className="w-[95%] mx-auto mt-5 md:mt-20 filterboxes">
            <div className="flex gap-2 items-center">
              <p className="text-center text-2xl md:text-4xl font-bold h1">Filter</p>
              <div className="downarrow">
                <FaArrowAltCircleDown onClick={handleClick} className="cursor-pointer" />
              </div>
            </div>

            <div className={`filterBox border-2 rounded-2xl flex flex-col mt-5 shadow-lg shadow-black ${view ? "block" : ""}`}>
              <div className="flex gap-4 h-7 items-center justify-between m-1.5">
                <input onChange={Onchange} type="checkbox" className="w-6 h-4 cursor-pointer" value="Men" />
                <p className="w-[100%] text-center">Men</p>
              </div>
              <div className="flex gap-4 h-11 items-center justify-between m-1.5">
                <input onChange={Onchange} type="checkbox" className="w-6 h-4 cursor-pointer" value="Women" />
                <p className="w-[100%] text-center">Women</p>
              </div>
              <div className="flex gap-4 h-11 items-center justify-between m-1.5">
                <input onChange={Onchange} type="checkbox" className="w-6 h-4 cursor-pointer" value="Kids" />
                <p className="w-[100%] text-center">Kid</p>
              </div>
            </div>
          </div>

          <div className="w-[95%] mx-auto mt-10 filterboxes">
            <div className={`filterBox border-2 rounded-2xl flex flex-col mt-5 shadow-lg shadow-black ${view ? "block" : ""}`}>
              <div className="flex gap-4 h-7 items-center justify-between m-1.5">
                <input onChange = {Onchange2} type="checkbox" className="w-6 h-4 cursor-pointer" value="Topwear" />
                <p className="w-[100%] text-center">Top Wear</p>
              </div>
              <div className="flex gap-4 h-11 items-center justify-between m-1.5">
                <input onChange = {Onchange2} type="checkbox" className="w-6 h-4 cursor-pointer" value="Bottomwear" />
                <p className="w-[100%] text-center">Bottom Wear</p>
              </div>
              <div className="flex gap-4 h-11 items-center justify-between m-1.5">
                <input onChange = {Onchange2} type="checkbox" className="w-6 h-4 cursor-pointer" value="Winterwear" />
                <p className="w-[100%] text-center">Winter Wear</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="w-full md:w-[75%] mx-auto p-4 flex flex-wrap justify-center gap-4">
          <Title text1={"ALL"} text2={"COLLECTION"} disc={"Your one-stop shop for quality products at unbeatable prices! Discover a wide range of items, from the latest fashion to must-have gadgets. Shop now and enjoy fast delivery, secure payments, and great deals!"} />
          {filteredProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} title={item.name} image={item.image} price={item.price} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CollectionC;
