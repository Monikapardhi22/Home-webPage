import React from 'react'
import user1 from '../assets/Users/user-image1.png'
import user2 from '../assets/Users/user-image3.png'
import user3 from '../assets/Users/user-image4.webp'

const userImg =[
  {
    id:1,
    img:user1,
    name:'James Washington',
    occupation:'Co-Founder',rating:'⭐⭐⭐⭐'

  },
  {
    id:2,
    img:user2,
    name:'Ring Jackman',
    occupation:'Marketing Manager',
    rating:'⭐⭐⭐⭐⭐'

  },
  {
    id:3,
    img:user3,
    name:'Shree Laxmi ',
    occupation:'Salers',
    rating:'⭐⭐⭐'

  }
]

export default function Testminal() {
  return (
    <div className=' p-9'>
      <div className='flex justify-center items-center
      flex-col'>
        <div className='flex'>
          <h1 className='font-bold text-3xl m-1'>Customer</h1>
        <h1 className='font-light underline
        text-3xl m-1'>Testimonials</h1>
        </div>
     
      
      <div className='text-gray-500'>
        Real Stories from Those Who Found Home with Us
      </div>
       </div>

       <div className='flex justify-evenly items-center m-11'>
           {
            userImg.map((items,index)=>(
              <ul key={index} className='border-2 border-solid shadow-sm
              p-7 m-2' >
                <img src={items.img} height='120px' width='120px'/>
                <div className='text-center'>
                  {items.name}
                  </div>
                <div className='text-center'>
                  {items.occupation}
                </div>
                <div className='text-center'>
                  {items.rating}

                </div>
              </ul>
            ))
           }
       </div>
    </div>
  )
}
