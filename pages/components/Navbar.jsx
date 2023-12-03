import Link from 'next/link';
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  const [cart, setcart] = useState(true);
  const handleClick = () => {
    setcart(!cart);
  };
  return (
    <div>
      <div className='flex justify-between bg-cyan-500 h-14 p-4'>
        <div className=''>
          <img src="https://e7.pngegg.com/pngimages/178/1001/png-clipart-logo-dress-code-fashion-information-see-through-clothing-suculant-text-fashion.png" height={40} width={40}></img>
        </div>
        <div className='flex space-x-10'>
          <Link href={"/"} className='hover:text-white hover:text-3xl transition-all duration-300'>Home</Link>
          <Link href={"/Kids"} className='hover:text-white hover:text-3xl transition-all duration-300'>Kids wear</Link>
          <Link href={"/Ladies"} className='hover:text-white hover:text-3xl transition-all duration-300'>Ladies wear</Link>
          <Link href={"/Men"} className='hover:text-white hover:text-3xl transition-all duration-300'>Mens</Link>
        </div>
        <div onClick={handleClick}>
          <ShoppingCartIcon />
        </div>
      </div>
      {cart ? <div>
      </div> :
        <div className='fixed right-0 h-full w-1/4 bg-slate-500'>
          <div className='flex flex-col'>
            <div className='flex'>
              <p>Name</p>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default Navbar;
