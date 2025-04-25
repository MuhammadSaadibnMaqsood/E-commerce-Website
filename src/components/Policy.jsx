import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
    return (
        <div className='policy flex justify-center items-center sm:flex-row my-32 w-[80%] m-auto'>
            <div className='flex flex-col justify-center items-center m-2 my-3 mt-10  '>
                <div><img src={assets.exchange_icon} alt="quality icon" /></div>
                <h2 className='text-2xl'>Easy exchange</h2>
                <p className='opacity-50 text-center'>free returns and exchanges to ensure a seamless shopping experience!</p>
            </div>

            <div className='flex flex-col justify-center items-center m-2 my-3 mt-10'>
                <div><img src={assets.support_img} alt="quality icon" /></div>
                <h2 className='text-2xl'>24 hours support</h2>
                <p className='opacity-50 text-center'>Our dedicated team is always here to assist you with any queries or concerns. Contact us anytime!</p>
            </div>

            <div className='flex flex-col justify-center items-center m-2 my-3 mt-10'>
                <div><img src={assets.quality_icon} alt="quality icon" /></div>
                <h2 className='text-2xl'>Easy return</h2>
                <p className='opacity-50 text-center'>Shop with confidence! Enjoy a hassle-free return policy for a smooth and worry-free experience!</p>
            </div>
        </div>
    )
}

export default Policy