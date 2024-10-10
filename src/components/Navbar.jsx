import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visibe, setVisible] = useState(false);
    const {showSearch, setShowSearch} = useContext(ShopContext)


    return (
        <div className='flex items-center justify-between py-3 font-medium'>

            <a href='/' className='flex items-baseline'>
                <h2 className='text-zinc-600 text-2xl font-bold italic'>CLOTHER</h2>
                <p className='text-red-950 font-bold'>&reg;</p>
            </a>

            <ul className='hidden sm:flex gap-3 text-sm text-zinc-600'>

                <NavLink to='/' className='flex flex-col items-center gap-1' >
                    <p>HOME</p>
                    <hr className='w-1/2 border-none h-[1.5px] bg-zinc-600 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1' >
                    <p>COLLECTION</p>
                    <hr className='w-1/2 border-none h-[1.5px] bg-zinc-600 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1' >
                    <p>ABOUT</p>
                    <hr className='w-1/2 border-none h-[1.5px] bg-zinc-600 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1' >
                    <p>CONTACT</p>
                    <hr className='w-1/2 border-none h-[1.5px] bg-zinc-600 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => setShowSearch(!showSearch)} src={assets.search_icon} className='w-5 cursor-pointer' alt="img" />
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 cursor-pointer' alt="img" />
                    <span className='absolute -top-1 -right-2 w-4 h-4 bg-zinc-400 text-xs text-white flex items-center justify-center rounded-full'>3</span>
                </Link>
                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="profile" />
                    <div className='hidden group-hover:block absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-zinc-600 rounded-md'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Global</p>
                        </div>
                    </div>
                </div>
                <img onClick={ ()=>setVisible(true) } src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="M" />
            </div>

            {/* menu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ${ visibe ? 'w-full' : 'w-0' } `}>
                <div className='flex flex-col text-zinc-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180 ' alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar