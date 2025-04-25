import React from 'react'
import './hero.css'

const HeroSection = () => {
  return (
    <>
      {/* <div className="HeroSection w-full h-[100vh] flex"> 
        <div className="part1 w-[50%] flex justify-center items-center relative"> 
             <div className='line line1 absolute top-[440px] left-[0px]'></div>
            <h1 className='heroHeading'>SHOPTREK</h1>
            <div className='line line2 absolute top-[525px]'></div></div>
        <div className="part2 w-50% flex justify-start items-center" > <img className='w-[90%] shadow-lg shadow-black  p-4 rounded-lg heroImg' src="../src/assets/hero_img.png" alt="" /></div>
    </div> */}
 <div className="heroSection bg-black h-[100vh] pb-11 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 relative overflow-hidden">
      {/* Left Side */}
      <div className="heroText w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="heroHeading">SHOPTREK</h1>
        <p className="heroSubText mt-3.5">
          Discover the trendiest fashion with style and confidence.
        </p>
        <button className="heroButton">Shop Now</button>
      </div>

      {/* Right Side */}
      <div className="heroImage pt-5 w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          className="heroImg rounded-2xl w-[80%]"
          src="https://i.pinimg.com/564x/ca/e4/71/cae471df4fa9995898498a7a69a0fe6b.jpg"
          alt="Hero"
        />
      </div>
    </div>
    </>
  )
}

export default HeroSection