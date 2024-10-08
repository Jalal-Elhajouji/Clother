import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {

    if(category.includes(e.target.value)) {
      setCategory( prev => prev.filter( item => item !== e.target.value ) )
    }
    else {
      setCategory( prev => [ ...prev, e.target.value ] )
    }
  }

  const toggleSubCategory = (e) => {

    if(subCategory.includes(e.target.value)) {
      setSubCategory( prev => prev.filter( item => item !== e.target.value ) )
    }
    else {
      setSubCategory( prev => [ ...prev, e.target.value ] )
    }
  }

  const applyFilter = () => {

    let productsreplica = products.slice();

    if(category.length > 0) {
      productsreplica = productsreplica.filter( item => category.includes(item.category) )
    }
    if(subCategory.length > 0) {
      productsreplica = productsreplica.filter( item => subCategory.includes(item.subCategory) )
    }
    setFilteredProducts(productsreplica);
  }
  

  useEffect(() => {
    setFilteredProducts(products);
  },[])

  useEffect(() => {
    applyFilter();
  }, [category, subCategory])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 broder-t'>

      <div className='min-w-60'>
        <p onClick={() => { setShowFilter(!showFilter) }} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="i" />
        </p>
        {/* category filter */}
        <div className={`border border-zinc-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm mb-3 font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-zinc-700'>
            <p className='flex gap-2'>
              <input type="checkbox" id='Men' value={'Men'} onChange={toggleCategory}/>
              <label htmlFor="Men">Men</label>
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" id='Women' value={'Women'} onChange={toggleCategory}/>
              <label htmlFor="Women">Women</label>
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" id='Kids' value={'Kids'} onChange={toggleCategory}/>
              <label htmlFor="Kids">Kids</label>
            </p>
          </div>
        </div>
        {/* Sub category filter */}
        <div className={`border border-zinc-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm mb-3 font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-zinc-700'>
            <p className='flex gap-2'>
              <input type="checkbox" id='topwear' value={'Topwear'} onChange={toggleSubCategory}/>
              <label htmlFor="topwear">Top Wear</label>
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" id='bottomwear' value={'Bottomwear'} onChange={toggleSubCategory}/>
              <label htmlFor="bottomwear">Bottom Wear</label>
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" id='Winter Wear' value={'Winterwear'} onChange={toggleSubCategory}/>
              <label htmlFor="Winter Wear">Winter Wear</label>
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1 '>

        <div className='flex justify-between text-base sm:text2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Sorting products */}
          <select className='border-2 border-zinc-300 text-sm px-2 outline-none'>
            <option value="relevent">Relevent Price</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>

        {/* List Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filteredProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection