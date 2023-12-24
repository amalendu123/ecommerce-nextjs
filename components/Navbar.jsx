import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import { Close } from '@mui/icons-material';
const Navbar = ({cart,addToCart,removeFromCart,ClearCart,subTotal}) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const [mobile, setMobile] = useState(false);
  const [cart1, setcart1] = useState(true);

  const handleClick = () => {
    setcart1(!cart1);
  };

  const toggleMenu = () => {
    setMobile(!mobile);
  };

  return (
    <div className={` ${isHomePage ? 'bg-transparent fixed' : 'bg-white'} p-4 w-full`}>
      <div className='flex justify-between gap-12 h-16'>
        <div className='flex md:gap-20 md:justify-start'>
          <div>
            <h1 className='text-black font-mono text-3xl'>Freakss</h1>
          </div>
          <div className='md:flex justify-start space-x-10 hidden'>
            <Link href={"/"} className='hover:text-black hover:text-3xl transition-all duration-300'>Home</Link>
            <Link href={"/Kids"} className='hover:text-black hover:text-3xl transition-all duration-300'>Kids wear</Link>
            <Link href={"/Ladies"} className='hover:text-black hover:text-3xl transition-all duration-300'>Ladies wear</Link>
            <Link href={"/Men"} className='hover:text-black hover:text-3xl transition-all duration-300'>Mens</Link>
          </div>
        </div>
        <div className='flex gap-10'>
          <div onClick={handleClick}>
            <ShoppingCartIcon />
          </div>
          <div className='md:hidden block' onClick={toggleMenu}>
            <MenuOpenIcon />
          </div>
        </div>
      </div>

      {cart1 ? <div></div> :
        <div className='fixed right-0 h-screen flex flex-col md:w-1/4 bg-white p-4 gap-10 z-50 w-full'>
          <p className='text-center font-mono font-bold '>Yours Cart </p>
          {Object.keys(cart).length === 0 && <div className='text-center'>There is no item in the cart </div>}
          {
            Object.keys(cart).map((k)=>{ 
              return (
                <li key={k}>
                  <div className='flex justify-between'>
                  <p>{cart[k].name}</p>
                  <button onClick={()=>{removeFromCart(name,1,499,cart[k].name)}}>-</button>
                  <p>{cart[k].qty}</p>
                  <button onClick={()=>{addToCart(name,1,499,cart[k].name)}}>+</button>
                  </div>
                </li>
              )
            })
          }
          
          <div className='flex justify-between' >
          <Link href={'/checkout'}><button class="bg-black hover:bg-white text-white hover:text-black font-bold p-4 xl:w-40 lg:w-28 md:w-20 ">
              Check-out
            </button></Link>
            <button class="bg-black hover:bg-white text-white hover:text-black font-bold p-4 xl:w-40 " onClick={ClearCart}>
              Clear
            </button>
          </div>
        </div>}

      <div className={mobile ? "fixed top-0 left-0 h-screen w-full bg-black text-white flex flex-col text-center font-mono" : "hidden"}>
        <div className='flex-end ' onClick={toggleMenu}>
          <CloseIcon />
        </div>
        <Link href={"/"} className='hover:text-white hover:text-3xl transition-all duration-300'>Home</Link>
        <Link href={"/Kids"} className='hover:text-white hover:text-3xl transition-all duration-300'>Kids wear</Link>
        <Link href={"/Ladies"} className='hover:text-white hover:text-3xl transition-all duration-300'>Ladies wear</Link>
        <Link href={"/Men"} className='hover:text-white hover:text-3xl transition-all duration-300'>Mens</Link>
      </div>
    </div>
  );
};

export default Navbar;
