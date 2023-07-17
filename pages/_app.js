import {createGlobalStyle} from "styled-components";
import { useState,useEffect } from "react";
import {CartContextProvider} from "@/components/CartContext";
import { SessionProvider } from "next-auth/react"
import Popupchat from '@/components/Popupchat.js'
import ZaloPlugin from '@/components/ZaloPlugin.js'
import { DefaultSeo } from 'next-seo'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

/*   useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []) */
   useEffect(() => {
        let scroll;
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: document.querySelector("[data-scroll-container]"),
                smooth: true,
                smoothMobile: false,
                resetNativeScroll: true
            });
        });

        // `useEffect`'s cleanup phase
        return () => {
            if (scroll) scroll.destroy();
        }
    });

  return (
    <SessionProvider session={session}>
       <CartContextProvider>
       <main className="main" data-scroll-container>
          <Component {...pageProps} />
          <Popupchat />
          <ZaloPlugin/>
       </main>
         
        </CartContextProvider>
    </SessionProvider>
  )
}