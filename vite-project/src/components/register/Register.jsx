import React from 'react'

const Register = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center max-sm:p-10' >
       
        <div className='w-1/3 p-5 rounded-2xl max-sm:w-full '>
            <div className='flex flex-col justify-center items-center gap-5'>
               
                 <form action="" className='size-full flex flex-col gap-5'></form>
                 <div className='flex justify-center'>
                      <h1 className='text-2xl font-bold text-black'>REGISTER</h1>
                    </div>
                    <div className='w-full h-10 duration-75 px-2 relative focus-within:rounded-lg group gap-10'>
                 <label htmlFor='name' className='p-1 absolute group-has-focus-within:-top-3.5'>Name</label>
                <div className='flex items-center size-full'>
                        <input type="text" name="name" id="name" className='w-full border-2 rounded-lg' />
                </div>
                  {/* </div> */}
                  <label htmlFor='email' className='p-1 absolute group-has-focus-within:-top-3.5'>Email</label>
                <div className='flex items-center size-full'>
                        <input type="email" name="email" id="email" className='w-full border-2 rounded-lg' />
                </div>
                 <label htmlFor='passwd' className='p-1 absolute group-has-focus-within:-top-3.5'>Password</label>
                <div className='flex items-center size-full'>
                        <input type="password" name="password" id="passwd" className='w-full border-2 rounded-lg' />
                </div>
                     <button className='w-20 bg-black text-white active:scale-95'>Submit</button>

                </div>
            {/* <input type="email" name="email" placeholder='enter your mail id ' className='size-full outline-0' />
            <input type="password" name="password" placeholder="password" className='w-full border-2 rounded-lg' />
            <button className='w-20 bg-black text-white active:scale-95'>Submit</button>
            <div>Already have an account? Login</div> */}
            </div>
        </div>
     </div>
  )
}

export default Register