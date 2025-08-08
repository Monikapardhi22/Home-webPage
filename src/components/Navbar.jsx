import React from 'react'
import logo from '../assets/logos/log.png'


export default function Navbar() {
  return (
    <div className=' 
     ml-11 flex justify-evenly items-center'>

      <img src={logo} style={{height:'80px',width:'80px',
        borderRadius:'40%',cursor:'pointer'
      }} className='w-[60px] h-[60px] flex justify-center items-center' />


     <div className='font-semibold flex
     px-4'>
      <a href='#home' className='mr-5'>Home</a> 
    <a href='#about'  className='mr-5'>
      About
    </a>
      <a href='#test'  className='mr-5'>
         Testimonials
      </a>
     </div>



     <div className='  rounded-3xl font-bold
      p-1 '>

        <a href='#login'>Login</a>

     </div>

    </div>
  )
}
