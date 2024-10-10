import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

    return showSearch ? (
        <div className='border-t border-b bg-zinc-50 text-center'>
            <div className='inline-flex items-ceter justify-center border border-zinc-400 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:w-1/2'>
                <input className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search..' />
                <img className='h-5' src={assets.search_icon} alt="" />
            </div>
            <img onClick={() => setShowSearch(false) } className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
        </div>
    ) : null;
}

export default SearchBar;