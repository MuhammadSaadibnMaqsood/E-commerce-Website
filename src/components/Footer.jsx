import React from 'react'

const Footer = () => {
    return (
        <div>
        <div className='footer mt-[55px] flex gap-10 mx-auto'>
            <div className='footerElement w-[30%]'>
                <p className='text-3xl  text-center font-bold'>SHOPTREK</p>
                <p className='text-center p-2.5'>Welcome to [SHOPTREK] – Your one-stop shop for quality products at unbeatable prices! Discover a wide range of items, from the latest fashion to must-have gadgets. Shop now and enjoy fast delivery, secure payments, and great deals!</p>
            </div>

            <div className='footerElement w-[30%]'>
            <p className='text-3xl  text-center font-bold'>Contact</p>
                <p className='text-center p-2.5'>Contact: 031*********</p>
                <p className='text-center p-2.5'>Email: muhammadsaddy0100@gmail.com</p>
            </div>

            <div className='footerElement w-[30%]'>
            <p className='text-3xl  text-center font-bold'>Catagory</p>
                <p className='text-center p-2.5'>Men</p>
                <p className='text-center p-2.5'>Women</p>
                <p className='text-center p-2.5'>Kid</p>
            </div>
        </div>

        <div>
            <hr />
            <p className='text-center mt-3'>All copyrigth reserverd || Muhammad Saad</p>
        </div>
    </div>
    )
}

export default Footer