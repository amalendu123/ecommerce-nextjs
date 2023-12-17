import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setcart] = useState({})
  const [total,settotal] = useState(0);
  useEffect(() => {
    try{
      if(localStorage.getItem('cart')){
        setcart(JSON.parse(localStorage.getItem('cart')))
      }
    }catch(error){
      console.error(error);
      localStorage.clear();
    }
   
  }, [])
  
  const Savecart = (mycart) =>{
    localStorage.setItem('cart',mycart);
    let subt = 0;
    for(let i = 0;Object.keys(cart),length;i++){
      subt += mycart[Object.keys(cart)[i]].price * mycart[Object.keys(cart)[i]].qty
    }
    settotal(subt)
  }
  const addtocart = (itemcode ,qty,price,name) =>{
    let mycart = cart;
    if (itemcode in mycart) {
      mycart[itemcode].qty = mycart[itemcode].qty + qty;
    }else{
      mycart[itemcode]= {itemcode,qty:1,price,name}
    }
    setcart(mycart)
    Savecart(mycart)
  }
  const removefromcart = (itemcode ,qty,price,name) =>{
    let mycart = cart;
    if (itemcode in mycart) {
      mycart[itemcode].qty = mycart[itemcode].qty -  qty;
    }
    if(mycart[itemcode].qty <= 0){
      delete mycart[itemcode].qty;
    }
    setcart(mycart)
    Savecart(mycart)
  }
  const clearcart = () =>{
    setcart({});
    Savecart({});
  }
  return (
    <>
      <Navbar cart = {cart} addToCart = {addtocart} removeFromCart = {removefromcart} clearCart = {clearcart} subTotal = {total}/>
        <Component cart = {cart} addToCart = {addtocart} removeFromCart = {removefromcart} clearCart = {clearcart} subTotal = {total}{...pageProps} />
      <Footer />
    </>
  )
}
