import React from 'react'
import home1 from '../assets/homes/about.png'


export default function About() {
  // const[info,setInfo] =useState(false);
  // const toggleInput = ()=>{
  //   setInfo(!info)
  // }
  return (
    <div className='mt-4 mb-4'>
      <div className='flex justify-center items-center flex-col'>
        <div className='flex'>
          <div className='font-bold text-3xl m-1'>
            About
          </div>
          <div className=' text-3xl font-light m-1' style={{ textDecoration: 'underline' }}>
            Our Brand
          </div>
        </div>
        <div className='text-gray-500'>
          Passionate About Properties, Dedicated to Your Vision
        </div>
      </div>
      <div className='flex justify-evenly '>
        <img src={home1} className='m-12 hover:scale-110 '
          style={{ height: '390px', width: '390px', borderRadius: '50%' ,boxShadow:'5px 5px 5px black'}} />



        <div className='text-black flex flex-col '>
          <div className='flex justify-evenly items-center mt-12 '>
            <div >
              <div className='text-3xl font-semibold'>10+</div>
              <p className='mr-16'>
                Years of Excellence
              </p>
            </div>
            <div>
              <div className='text-3xl font-semibold'  >
                12+</div>
              <p>
                Projects Completed
              </p>
            </div>


          </div>
          <div className='flex justify-evenly items-center'>


            <div className='mt-11' >
              <div className='text-3xl font-semibold'>20+</div>
              <p className='mr-16'>
                Mn. Sq. Ft. Delivered
              </p>
            </div>
            <div className='mt-11' >
              <div className='text-3xl font-semibold'>25+</div>
              <p >
                Ongoing Projects
              </p>
            </div>


          </div>

          <div className='mt-8 ml-20 font-normal'>
            Welcome to Our website -Your one-stop destination for modren ,<br/>reponsive , and easy-to-use web experiences. We are focused on<br/> delivering high-quality designs and smooth functionality  using the<br/> lastest web
            technologies. Whether its a personal blog, a protfolio, or <br/>a business site, we aim to create digital solutions that leave a lasting <br/>impact.
            Explore and enjoy the journey!
          </div>


          <button className='bg-blue-500
          w-[180px] ml-20 mt-5  h-[40px]
          font-medium hover:scale-110'>
            Learn more</button>

        </div>


      </div>
    </div>
  )
}
