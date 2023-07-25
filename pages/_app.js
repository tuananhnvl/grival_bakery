
import { CartContextProvider } from "@/components/CartContext";
import { SessionProvider } from "next-auth/react"
import { LenisProvider } from '@/components/LenisProvider.js'
import ZaloPlugin from '@/components/ZaloPlugin.js'
import Head from 'next/head'

import '@/styles/app.css'
import '@/styles/free.css'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {



  return (
    <LenisProvider>
      <SessionProvider session={session}>
        <CartContextProvider>
          <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Component {...pageProps} />
          {/* <Popupchat /> */}
         {/*  <ZaloPlugin /> */}
        </CartContextProvider>
      </SessionProvider>
    </LenisProvider>

  )
}