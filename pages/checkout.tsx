import React from 'react';

const Checkout = ({ cart, clearCart ,subTotal}) => {
    console.log(cart)
    return (
        <div>
            <div className='text-center text-5xl font-serif'>Check Out</div>
            <div className='flex flex-col p-10 justify-center content-center gap-10'>
                <input type='text' placeholder='Enter the name of the person' className='w-full border'></input>
                <input type='number' placeholder='Enter the phone number' className='w-full border-2'></input>
                <input type='email' placeholder='Enter the mail' className='w-full border-2'></input>
                <textarea placeholder='Enter the address' className='w-full border-2'></textarea>
                
            </div>
            <div className='text-center text-5xl font-serif'>Review cart items and proceed to buy</div>
            <div>
                  
                    <div className='  flex flex-col md:w-1/4 bg-white p-4 gap-10 z-50 w-full'>
                        <p className='text-center font-mono font-bold '>Your Cart </p>
                        {Object.keys(cart).length === 0 && <div className='text-center'>There is no item in the cart </div>}
                        {Object.keys(cart).map((k) => {
                            return (
                                <li key={k}>
                                    <div className='flex justify-between'>
                                        <p>{cart[k].name}</p>
                                        <p>{cart[k].qty}</p>
                                    </div>
                                </li>
                            );
                        }
                        )}
                        <span className="total">{subTotal}</span>
                        <button className="bg-black  text-white font-bold p-4 w-40 hover:bg-slate-400 hover:text-black ">
                    Buy now
                </button>
                    </div>
            
            </div>
        </div>
    );
};

export default Checkout;
