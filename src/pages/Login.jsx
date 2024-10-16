import React, { useState } from 'react';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-zinc-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-10 bg-zinc-800' />
      </div>
      {currentState === 'Sign up' && <input type="text" className='w-full px-3 py-2 border border-zinc-800' placeholder='Name' required />}
      <input type="email" className='w-full px-3 py-2 border border-zinc-800' placeholder='Email' required />
      <input type="password" className='w-full px-3 py-2 border border-zinc-800' placeholder='Password' required />
      <div className='flex w-full justify-between text-sm mt-[-8px]'>
        {
          currentState === 'Login' ?
            <div className='flex w-full justify-between'>
              <p className='cursor-pointer'>Forgot your password?</p>
              <p onClick={() => setCurrentState('Sign up')} className='cursor-pointer'>Create account</p>
            </div>

            : <p onClick={() => setCurrentState('Login')} className='flex w-full justify-end cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Login' : 'Sign up'}</button>
    </form>
  )
}

export default Login;