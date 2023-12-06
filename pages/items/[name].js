import React from 'react'
import { kiddetail,Ladi,mens } from '@/pages/components/detail'
const Itemdetail = ({eventdata}) => {
  return (
    <div>
      <div className='sm:flex gap-10 p-2 '>
        <div className='w-1/2 flex justify-center content-center'>
          <img src="https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/21604555004027.jpg" className='w-96 h-96 mb-10'></img>
        </div>
        <div className='flex-col w-1/2 gap-5'>
          <h1 className='text-5xl '>{eventdata.name}</h1>
          <h1 className='text-3xl font-thin '>Price:{eventdata.price}</h1>
          <div className='flex justify-start'>
            <button class="bg-black  text-white font-bold p-4 w-40 hover:bg-slate-400 hover:text-black ">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
export async function getServerSideProps(context) {
    const name  = context.query.name;
    const cate = context.query.param2;
    console.log(name);
    console.log(cate);
    if(cate == 'kids'){
      const item = kiddetail.find((event) => event.name === name);
      if (item != undefined) {
        return {
          props: {
            eventdata: item,
          },
        };
      } 
    }else if(cate === 'ladies'){
      const item = Ladi.find((event) => event.name === name);
      if (item != undefined) {
        return {
          props: {
            eventdata: item,
          },
        };
      } 
    }else if(cate === 'men'){
      const item = mens.find((event) => event.name === name);
      if (item != undefined) {
        return {
          props: {
            eventdata: item,
          },
        };
      } 
    }
    return {
      props: {
        eventdata: null,
      },
    };
  }
    
  
export default Itemdetail