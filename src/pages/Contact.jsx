import React from 'react';
import Title from '../components/Title';
import {assets} from '../assets/assets';
import Newsletterbox from '../components/NewsLetterBox';

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t '>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-xl font-semibold text-zinc-700'>Our Store</p>
          <p className='text-zinc-500'>256 Polish Cow <br /> North South Are Opposit, USA</p>
          <p className='text-zinc-500'>Tel: (212) 612-345678 <br />Email: exemple@domain.tld</p>
          <p className='font-semibold text-xl text-zinc-700'>Careers at CLOTHER</p>
          <p className='text-zinc-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <Newsletterbox />

    </div>
  )
}

export default Contact;