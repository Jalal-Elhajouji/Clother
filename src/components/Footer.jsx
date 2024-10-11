import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-28 '>
            <hr />
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>

                <div>
                    <Link to='/' className='flex items-baseline'>
                        <h2 className='text-zinc-600 text-2xl font-bold italic'>CLOTHER</h2>
                        <p className='text-red-950 font-bold'>&reg;</p>
                    </Link>
                    <p className='w-full md:w-2/3 text-zinc-600'>If I didn't forget I will add a text here later, If I didn't forget I will add a text here later, If I didn't forget I will add a text here later.</p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-zinc-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-zinc-600'>
                        <li>+212 612-345678</li>
                        <li>exemple@domain.tld</li>
                    </ul>
                </div>

            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center '>Copyrights 2024@CLOTHER.tld - All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer;