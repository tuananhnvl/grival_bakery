import {createGlobalStyle} from "styled-components";
import { useState,useEffect } from "react";
import {CartContextProvider} from "@/components/CartContext";
import { SessionProvider } from "next-auth/react"
import Popupchat from '@/components/Popupchat.js'
import ZaloPlugin from '@/components/ZaloPlugin.js'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {



  return (
    <SessionProvider session={session}>
       <CartContextProvider>
          <Component {...pageProps} />
          <Popupchat />
          <ZaloPlugin/>
        </CartContextProvider>
    </SessionProvider>
  )
}