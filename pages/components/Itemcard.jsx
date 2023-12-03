import React from 'react';

const Itemcard = (props) => {
 // Make sure you are receiving the correct props

    return (
        <div>
            <div className='mt-10 '>
                <div className='w-60 h-72 lg:w-60 lg:h-72 m-auto bg-white flex flex-col border-4 p-2 '>
                    <div className="card-image w-full h-60 lg:h-60 relative">
                        <img
                            src="https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/21604555004027.jpg"
                            className="absolute object-cover h-full w-full"
                            alt="Image"
                            style={{ zIndex: 0, pointerEvents: 'none' }}
                        />
                    </div>
                    <div className='flex justify-between items-start text-3xl text-black font-bold font-Poppins'>
                        <p className='text-l text-black'>{props.items.name}</p>
                        <p className='text-l text-black'>{props.items.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Itemcard;
