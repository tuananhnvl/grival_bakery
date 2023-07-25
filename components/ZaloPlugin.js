import Script from 'next/script'
import {  useState } from 'react'
import Head from "next/head";


const zaloWidget = `<div
class="zalo-chat-widget"
data-oaid="881242904271584020"
data-welcome-message="Rất vui khi được hỗ trợ bạn!"
data-autopopup="0"
data-width="350"
data-height="420"
/>`;


export default function ZaloPlugin() {
  const [showPlugin, setShowPlugin] = useState(true)
  console.log('[[ZaloPlugin]]]', showPlugin)


  return (
    <>
      <Head>
        {/* <script src="https://sp.zalo.me/plugins/sdk.js" /> */}
      </Head>
      <Script id="plugin-add" src="https://sp.zalo.me/plugins/sdk.js" strategy="lazyOnload" />
      <div className='plugin-add' dangerouslySetInnerHTML={{ __html: zaloWidget }} />
    </>
  )
}
