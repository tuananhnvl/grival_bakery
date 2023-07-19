import {createGlobalStyle} from "styled-components";
import localFont from 'next/font/local'
import { useState,useEffect } from "react";
import {CartContextProvider} from "@/components/CartContext";
import { SessionProvider } from "next-auth/react"
import Popupchat from '@/components/Popupchat.js'
import ZaloPlugin from '@/components/ZaloPlugin.js'
import Head from 'next/head'
import Lenis from '@studio-freight/lenis'
import '@/styles/app.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  
   useEffect(() => {
        const lenisScroll = new Lenis({
          lerp: 0.1
        })

    
        lenisScroll.on('scroll', () => {
          console.log('scroll')
       
        })

        function raf(time) {
          lenisScroll.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
        return () => {
          lenisScroll.destroy();
        }
    });

  return (
    <SessionProvider session={session}>
        <CartContextProvider>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Component {...pageProps} />
          {/* <Popupchat /> */}
          <ZaloPlugin/>
         
        </CartContextProvider>
    </SessionProvider>
  )
}