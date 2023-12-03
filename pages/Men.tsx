import React from 'react'
import { mens } from '@/pages/components/detail'
import Itemcard from '@/pages/components/Itemcard'
const Men = () => {
  return (
    <div>
        <h1 className='text-3xl text-center'>Mens Wear</h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {
                mens.map((item)=>(
                  <Itemcard items={item} />
                ))
                        
          
            }
        </div>
    </div>
  )
}

export default Men