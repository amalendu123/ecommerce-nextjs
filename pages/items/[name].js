import React, { useState } from 'react'
import { kiddetail,Ladi,mens } from '@/pages/components/detail'
const Itemdetail = ({eventdata}) => {
  const [pin, setpin] = useState();
  const [avail,setAvail] = useState();
  const checkpin = async() => {
    const response = await fetch('http://localhost:3000/api/pin');
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const pins = await response.json();
    if(pins.numbers.includes(parseInt(pin))){
      setAvail(true);
    }else{
      setAvail(false);
    }

  }
  const changevalue = (e) =>{
      setpin(e.target.value);
  }
  return (
    <div>
      <div className='sm:flex gap-10 p-2 '>
        <div className='md:w-1/2 flex justify-center content-center'>
          <img src="https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/21604555004027.jpg" className='w-96 h-96 mb-10'></img>
        </div>
        <div className='flex-col md:w-1/2 w-full gap-5'>
          <h1 className='text-5xl '>{eventdata.name}</h1>
          <h1 className='text-3xl font-thin '>Price:{eventdata.price}</h1>
          <div className='flex gap-10 '>
            <input type='text' placeholder='Enter your pincode  ' className='w-1/2' onChange={changevalue}></input>
            <button className="bg-black  text-white font-bold p-4  hover:bg-slate-400 hover:text-black " onClick={checkpin}> Check</button>
            
          </div>
          <div>
            {avail && avail!= null &&<div><p>The order can be shipped.</p></div>}
            {avail==false && <div><p>This order cannot be shipped.</p></div>}
          </div>
          <div className='flex justify-start'>
            <button className="bg-black  text-white font-bold p-4 w-40 hover:bg-slate-400 hover:text-black ">
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