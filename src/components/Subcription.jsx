import React from 'react'

const subcription = () => {
    return (
        <div className='flex flex-col justify-center items-center w-[100%]'>
            <h2 className='text-3xl text-center'>Get 30% off after subcription</h2>
            <form action="">
                <input className='bg-gray-950 shadow-lg subinput shadow-black hover:bg-gray-900 text-white p-1.5 w-96 m-4 pl-3 h-14 rounded-2xl' placeholder='enter you google' type="email" name='email'/>
                <button className='bg-red-800 hover:bg-red-700 subinputbtn shadow-lg shadow-black text-white m-4 p-1.5 h-14 w-32 rounded-2xl' type='submit'  >Subscribe</button>
            </form>
        </div>
    )
}

export default subcription