import React from 'react'
import { kiddetail } from '@/pages/components/detail'
import Itemcard from '@/pages/components/Itemcard'
const Kids = () => {
  return (
    <div>
        <h1 className='text-3xl'>Kids Wear</h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {
                kiddetail.map((item)=>(
                  <Itemcard items={item} />
                ))
                        
          
            }
        </div>
    </div>
  )
}

export default Kids