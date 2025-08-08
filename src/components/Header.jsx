import React from 'react'

import home from '../assets/homes/homewood.jpg'
import Navbar from './Navbar'





export default function Header() {
    return (
        <div style={{
            backgroundImage: `url(${home})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh', width: '100%'
        }}>
            <Navbar />

            <div
           
           
            className='text-white flex justify-center items-center flex-col'>
                <div className='text-5xl font-bold m-9 pt-32'>
                    Explore the pages and Reach your dreams
                </div>
                <div>
                    <a href='#project' >
                        <button className='border-2 border-solid border-blue-300
                        bg-blue-600 rounded-3xl p-1 hover:bg-transparent m-2
                        font-semibold'
                        >Projects</button>
                    </a>
                    <a href='#contact'>
                        <button className='border-2 border-solid border-blue-300
                        bg-blue-600 rounded-3xl p-1 hover:bg-transparent m-2
                        font-semibold '
                        >Contact us</button></a>
                </div>
            </div>
        </div>
    )
}
