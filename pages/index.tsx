import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "@/pages/components/Navbar"
import Footer from "@/pages/components/Footer"



export default function Home() {
  return (
    <main>
      <div className='h-screen w-full'>
        <img
          src='https://wallpapersmug.com/download/1280x960/cee465/white-dress-beautiful-barbara-palvin.jpg'
          className='object-cover h-full w-full'
          alt='Cover Image'
        />
      </div>
    </main>
  )
}
