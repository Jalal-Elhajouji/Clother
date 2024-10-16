import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Newsletterbox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-zinc-600 '>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eveniet iure ipsa itaque reprehenderit cumque sit, vel ea eius provident? Iure vero voluptatibus omnis sit ut delectus voluptatem sint dolores placeat autem, asperiores dolorum vel quidem debitis tenetur quod, facilis aut. Molestiae ea corrupti, blanditiis excepturi libero sunt facilis exercitationem!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis dolores consequuntur doloremque, iure iste sint nihil natus voluptatum alias adipisci corrupti incidunt ab! Minus officiis cupiditate, ex possimus facilis eligendi, commodi harum ipsam pariatur ab aut? Velit doloribus maiores doloremque id debitis optio suscipit praesentium eveniet iste magnam minus excepturi earum mollitia, quisquam dicta distinctio porro accusantium nobis consequuntur sint?</p>
          <b className='text-zinc-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, consequuntur ipsum tempora aliquid quibusdam vitae maiores dolor adipisci accusantium expedita praesentium eos explicabo modi itaque iure illo. Sequi expedita cumque dolore reprehenderit delectus blanditiis ad.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 gap-4'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-zinc-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque maxime exercitationem adipisci nihil nulla pariatur modi laboriosam, sapiente voluptatum, quia accusamus eligendi in? Quod, nisi!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-zinc-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque maxime exercitationem adipisci nihil nulla pariatur modi laboriosam, sapiente voluptatum, quia accusamus eligendi in? Quod, nisi!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer Service:</b>
          <p className='text-zinc-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident blanditiis dolorem quam incidunt. Blanditiis reiciendis doloribus veniam fugiat quibusdam quod?</p>
        </div>
      </div>

      <Newsletterbox />

    </div>
  )
}

export default About;