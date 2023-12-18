import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div className='h-fit p-10 md:flex gap-10 bg-black text-white justify-between '>
      <div className='flex flex-col gap-5 md:w-1/2 mb-10 w-full'>
        <h2 className='font-bold text-3xl font-mono'>Freaks Dresses</h2>
        <div className='text-xl break-all font-mono'>
          Welcome to Freakss Dresses, where fashion meets elegance! We believe that every individual has a unique style, and our goal is to help you express yourself through our curated collection of dresses.
        </div>
      </div>
      <div>
        <div className='font-mono'>
          <p>Social media detail</p>
        </div>
        <div className='flex gap-2'>
          <LinkedInIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  )
}

export default Footer