import React from 'react'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home1 from  '../assets/homes/indiahome.jpg'
import home2 from '../assets/homes/landhome.jpg'
import home3 from '../assets/homes/switchhome.jpg'
import home4 from '../assets/homes/redhome.jpg'
const homeImage=[
  {
    id:1,
    img:home1,
    project:'Project1'
  },
  {
     id:2,
     img:home2,
    project:'Project2'
  },
  {
     id:3,
     img:home3,
    project:'Project3'
  },
  {
     id:4,
     img:home4,
    project:'Project4'
  }
]

export default function Projects() {
  const settings={
    dots:true,
    inifint:true,
    speed:800,
    slideToShow:1,
    slideToScroll:1,
    autoplay:true,
    autoplaySpeed:2000


  }
  return (
    <div>
    <div className='flex justify-center items-center flex-col
    mt-7'>
      <h1 className='font-bold text-3xl'>
        Projects
        <span className='ml-2 font-light underline text-3xl'>Completed</span>
        </h1>
        <p className='text-gray-500'>Crafting Spaces, Building Legcies-Explore Our Protfolio</p>
         
</div>
         <div  >
            <Slider {...settings} className=''>
             
              
             {
              homeImage.map((items,index)=>(
                <ul key={index} className=''>
                  
                     <div style={{ position: 'relative',border:'2px solid black'
                      ,margin:'100px',borderRadius:'50px'
                      }}>
        <img
          src={items.img}
          className='w-full h-[390px] object-cover rounded-[50px]'
          alt={`Project ${items.id}`}
        />

        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '4px 10px',
            borderRadius: '5px',
            margin:'10px'
          }}
          className='hover:scale-110'
        >
          {items.project}
        </div>
      </div>
                 
                </ul>

              ))
             }

            </Slider>
        
    </div>
    </div>
  )
}
