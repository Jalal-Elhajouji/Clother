import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Cart = () => {

  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCardData] = useState([]);

  useEffect(() => {

    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCardData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3'>
        <Title text1={'MY'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.map((item, index) => {

            const prodcutData = products.find(
              (product) => product._id === item._id
            );
            return (
              <div key={index} className='py-4 border-t border-b text-zinc-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6 '>
                  <img className='w-16 sm:w-20 ' src={prodcutData.image[0]} alt="" />
                  <div>
                    <p className='text-xs sn:text-lg font-medium'>{prodcutData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p className='font-semibold'>{currency}{prodcutData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-zinc-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-5 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
              </div>
            )

          })
        }
      </div>

    </div>
  )
}

export default Cart;