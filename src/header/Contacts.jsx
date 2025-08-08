import React from 'react'

export default function Contacts() {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full
    overflow-hidden' id='contact'>
    <div className='flex justify-center items-center flex-col'>
        <div className='flex'>
          <div className='font-bold text-3xl m-1'>
            Contact
          </div>
          <div className=' text-3xl font-light m-1' style={{ textDecoration: 'underline' }}>
            With Us
          </div>
        </div>
        <div className='text-gray-500'>
          Ready to Make a Move? Let's Build Your Future Together
        </div>
      </div>



      <div className='mt-6'>
        <form className=''>
          <div className='flex flex-row'>
            <div className='w-full text-left m-2'>
              Your Name 
           
            <input type='text' placeholder='Your name'
            className='w-full border border-gray-300 rounded
            py-3 px-4 mt-2' name='Your Name'/>
             </div>
              <div className='w-full text-left m-2'>
              Your Email
           
            <input type='email' placeholder='Your email'
            className='w-full border border-gray-300 rounded
            py-3 px-4 mt-2' name='Your Email'/>
             </div>
          </div>

          <div className='text-left my-6'>
            Message
            <textarea name='Message' placeholder='Type your message'
            className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 '>

            </textarea>
          </div>

          <button type='submit' className='bg-blue-600 text-white p-4 rounded'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
