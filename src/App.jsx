import React from 'react'


import About from './Nav/About'
import Testmonials from './Nav/Testmonials'
import Header from './components/Header'
import Projects from './header/Projects'
import Contacts from './header/Contacts'
import Login from './Nav/Login'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className='w-full h-full overflow-hidden'>
      
    <Header/>
    

      {/* About Section (invisible but scroll target) */}
      <section
        id="about"
        className="h-screen "
      >
        <About/>
      </section>

      {/* Testimonials Section (invisible but scroll target) */}
      <section
        id="test"
        className="h-screen mt-28"
      >
        <Testmonials/>
      </section>


     <section 
     id='project' className='h-screen '>
      <Projects/>
     </section>
       
     
    <section 
     id='contact' className='h-screen '>
      <Contacts />
   
     </section>
    
      <section id='login' className='h-screen'>
          <Login/>
      </section>
      
   
   
   
    <Footer/>
     
    </div>
  )
}
