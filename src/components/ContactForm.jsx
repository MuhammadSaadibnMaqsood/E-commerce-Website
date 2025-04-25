import React from 'react'

const ContactForm = () => {
    return (
        <>
        <div className='flex flex-col justify-center items-center p-3.5'>
            <div className='logo text-8xl mt-28 logotext'>SHOPTREK</div>

            <form className='flex flex-col justify-center items-center form w-[750px]' action="">
                <input className='serachbar mt-8 p-2.5 w-[600px] text-black rounded-2xl border-2 hover:bg-gray-100 hover:w-[700px] transition-all duration-500 shadow-2xl shadow-black' type="text" placeholder='enter your name' />
                <input className='serachbar mt-8 p-2.5 w-[600px] text-black rounded-2xl border-2 hover:bg-gray-100 hover:w-[700px] transition-all duration-500 shadow-2xl shadow-black' type="text" placeholder='enter your name' />
                <input className='serachbar mt-8 p-2.5 w-[600px] text-black rounded-2xl border-2 hover:bg-gray-100 hover:w-[700px] transition-all duration-500 shadow-2xl shadow-black' type="text" placeholder='enter your name' />
                <textarea className='serachbar mt-12 p-2.5 w-[600px] text-black rounded-2xl border-2 hover:bg-gray-100 hover:w-[700px] transition-all duration-500 shadow-2xl shadow-black' name="" rows={10} id="" placeholder='enter your queries'></textarea>
                <button type='submit' className='bg-red-800 mt-16 h-10 text-white w-40 rounded-2xl hover:w-[200px] transition-all duration-500 hover:bg-red-900'>Submit</button>
            </form>
        </div>

        </>
    )
}

export default ContactForm