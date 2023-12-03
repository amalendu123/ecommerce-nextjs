import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-center space-x-10 bg-cyan-500 h-14 p-4'>
        <Link href={"/"} className='hover:text-white hover:text-3xl transition-all duration-300'>Home</Link>
        <Link href={"/Kids"} className='hover:text-white hover:text-3xl transition-all duration-300'>Kids wear</Link>
        <Link href={"/ladies"} className='hover:text-white hover:text-3xl transition-all duration-300'>Ladies wear</Link>
        <Link href={"/mens"} className='hover:text-white hover:text-3xl transition-all duration-300'>Mens</Link>
      </div>
    </div>
  );
};

export default Navbar;
