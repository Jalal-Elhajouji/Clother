import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>

        <p className='text-zinc-500'>
            {text1}
            <span className='text-zinc-700 font-medium ml-1'>{text2}</span>    
        </p>
        <p className='w-8 sm:w-12 bg-zinc-700 h-[1px] sm:h-[2px]'></p>
    </div>
  )
}

export default Title;