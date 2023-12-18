import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

interface CartItem {
  itemcode: string;
  qty: number;
  price: number;
  name: string;
}
interface Cart {
  [itemcode: string]: CartItem;
}

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<Cart>({}); 
  const [total, setTotal] = useState(0);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      if (storedCart !== null) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Error while parsing cart data from local storage:', error);
      console.log('Stored cart data:', localStorage.getItem('cart'));
      localStorage.clear();
    }
  }, []);

  const saveCart = (mycart: Cart) => {
    localStorage.setItem('cart', JSON.stringify(mycart));
    let subt = 0;
    for (const key of Object.keys(mycart)) {
      subt += mycart[key].price * mycart[key].qty;
    }
    setTotal(subt);
  };

  const addToCart = (itemcode: string, qty: number, price: number, name: string) => {
    let mycart = { ...cart }; 
    if (itemcode in mycart) {
      mycart[itemcode].qty += qty;
    } else {
      mycart[itemcode] = { itemcode, qty: 1, price, name };
    }
    setCart(mycart);
    saveCart(mycart);
  };

  const removeFromCart = (itemcode: string, qty: number, price: number, name: string) => {
    let mycart = { ...cart }; 
    if (itemcode in mycart) {
      mycart[itemcode].qty -= qty;
      if (mycart[itemcode].qty <= 0) {
        delete mycart[itemcode];
      }
    }
    setCart(mycart);
    saveCart(mycart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  return (
    <>
      <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} ClearCart={clearCart} subTotal={total} />
      <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} ClearCart={clearCart} subTotal={total} {...pageProps} />
      <Footer />
    </>
  );
}
