import React from 'react'

const checkout = () => {
  return (
      <div>
          <div className='text-center text-5xl font-serif'>Check Out</div>
          <div className='flex flex-col p-4 justify-center content-center gap-10'>
              <input type='text' placeholder='Enter the name of the person' className='w-full border'></input>
              <input type='number' placeholder='Enter the phone number' className='w-full border-2'></input>
              <input type='email' placeholder='Enter the mail' className='w-full border-2'></input>
              <textarea placeholder='Enter the address' className='w-full border-2'></textarea>
          </div>
      </div>
  )
}

export default checkout