import React from 'react'
import logo from '../assets/logos/log.png'

export default function Footer() {
  return (
    <div className='overflow-hidden w-full bg-slate-300 lg:px-32 md:px-32 
      pt-10 px-4'>
      <div className='container mx-auto flex flex-row md:flex-row justify-between items-start '>

        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={logo} height='70px' width='80px'/>
             <p className='text-gray-800 mt-4 w-[200px]'>
              This is home arch. website. if you are coming for see 
              home's project.<br/> Thank you for coming my Frnd
             </p>
        </div>
        <div>
            <h3 className=' text-lg font-bold mb-4'>
              Company</h3>
              <ul className='flex flex-col gap-2 text-gray-800'>
                <a href='#Header' className='hover:text-white'>Home</a>
                 <a href='#About' className='hover:text-white'>About</a>
                  <a href='#Contact' className='hover:text-white'>Contact us</a>
                   <a href='#Privacy' className='hover:text-white'>Privacy Policy</a>

              </ul>
        </div>
        <div className='w-full md:w-1/3'>
        <h3 className=' text-lg font-bold mb-4'>
          Subscribe to our Newsletter
        </h3>

        <p className='text-gray-800 mb-4 max-w-80'>
          The latest news,articles, and resources, sent to your inbox weekly.

        </p>
          
        </div>
           
      </div>
      <div className=' bg-slate-600 text-center
      text-white '>
       

      </div>
      
    </div>
  )
}
