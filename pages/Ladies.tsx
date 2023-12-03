import React from 'react'
import { Ladi } from '@/pages/components/detail'
import Itemcard from '@/pages/components/Itemcard'
const Ladies = () => {
  return (
    <div>
        <h1 className='text-3xl text-center'>Ladies Wear </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {
                Ladi.map((item)=>(
                  <Itemcard items={item} />
                ))
                        
          
            }
        </div>
    </div>
  )
}

export default Ladies