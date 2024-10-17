import React from 'react';

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center '>
        <p className='text-2xl font-medium text-zinc-800 '>Subscribe now for 20% off</p>
        <p className='text-zinc-400 mt-2'>If I didn't forget I will add a text here later</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button className='bg-zinc-800 text-white text-sm py-4 px-6 sm:px-10' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox;