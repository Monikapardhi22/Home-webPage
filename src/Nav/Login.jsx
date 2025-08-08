import React, { useActionState } from 'react'
// import mountain from '../assets/logos/mountain.jpg'

export default function Login() {

  const handlecheck = (formdata,) => {
    let name = formdata.get('name')
    let password = formdata.get('password')
    const regex = '/^[A-Z0-9]+$/i';

    if (!name || name.length > 9) {
      return {
        error: 'Name is allow only 9 character'
      }
    } else if (!regex.test(password)) {
      return {
        error: 'password should be A-Z and 0-9'
      }
    } else {
      return {
        msg: 'Login successfully'
      }
    }

  }
  const [data, action] = useActionState(handlecheck);
  return (
    <div className='text-center m-32 p-11'
     >

      <div className='flex  justify-evenly 
      '>
        <div className='bg-yellow-300 ml-2 mr-2 rounded-lg h-[400px]'>
          <div className='font-semibold text-4xl mt-10'>
            Welcome to..
          </div>
          <div className='mt-32 m-2 text-2xl text-blue-950'>
            Dream Hai home ka To aaye aap ke apne <br />
            sapne ke ghar ko bante hai
          </div>
          
        </div>
       

        <div className='text-black '>
          <div className='font-bold text-3xl mt-10'>
            Login
          </div>
          <div>
            Welcome login to get amazing<br /> discounts and offers only for you
          </div>
          <div className='mt-14  border-2 border-solid border-blue-50 
          rounded-lg p-6'>
            <form action={action}>
              <label className='text-lg'>
                Name : </label>
              <input type='text' placeholder='Enter your name here'
                className='rounded-lg p-1' name='name' defaultValue={data?.name} />


              <br />
              <br />
              <br />

              <label className='text-lg'>
                Password : </label>
              <input type='password' placeholder='Enter your Password here'
                className='rounded-lg p-1' name='password' defaultValue={data?.password} />

              <br />
              <br />



              
              <button className='text-lg bg-blue-500 rounded-xl
              p-1'
                type='submit'>Login </button>

              {
                data?.error && <span style={{ color: 'red' }}>{data?.error}</span>
              }
              {
                data?.msg && <span style={{ color: 'green' }}>{data?.msg}</span>
              }

            </form>
          </div>
        </div>
      </div>


    </div>
  )
}
