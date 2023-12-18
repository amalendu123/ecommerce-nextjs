import React from 'react'
import { kiddetail } from '@/components/detail'
import Itemcard from '@/components/Itemcard'
const Kids = () => {
  return (
    <div className='p-2'>
        <h1 className='text-3xl text-center'>Kids Wear</h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {
                kiddetail.map((item,index)=>(
                  <Itemcard items={item} key={index}/>
                ))
                        
          
            }
        </div>
    </div>
  )
}

export default Kids