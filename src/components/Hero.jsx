import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-zinc-400 rounded-sm'>
            
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center justify-between'>
                        <p className='w-8 md:w-16 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>BEST SELLER</p>
                    </div>
                    <h1 className='text-3xl sm:py-5 lg:text-5xl leading-relaxed prata-regular'>Latest Arrivals</h1>
                    <div className='flex items-center justify-between'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-16 h-[2px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            <img src={assets.hero_img} className='w-full sm:w-1/2 h-56 sm:h-auto object-cover' alt="" />
        </div>
    )
}

export default Hero;