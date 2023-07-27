import Script from 'next/script'
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect,useState } from 'react';


const zaloWidget = `<div
className="zalo-chat-widget"
data-oaid="881242904271584020"
data-welcome-message="Rất vui khi được hỗ trợ bạn!"
data-autopopup="0"
data-width="350"
data-height="420"
/>`;


export default function ZaloPlugin() {
  const router  = useRouter()
  const [showPlugin,setshowPlugin] = useState(false)
  useEffect(() => {

    if(router.pathname === '/gio-hang' || window.innerWidth < 568) {
     
      setshowPlugin(false)
      
    
    }else{
 
      setshowPlugin(true)
      console.log(router.pathname,showPlugin)
    }
  },[router])
  if(showPlugin === true) {
    return (
      <>
        <Head>
          {/* <script src="https://sp.zalo.me/plugins/sdk.js" /> */}
        </Head>
        <Script id="plugin-add" src="https://sp.zalo.me/plugins/sdk.js" strategy="lazyOnload" />
        <div className='plugin-add' dangerouslySetInnerHTML={{ __html: zaloWidget }} />
      </>
    )
  }else{
    return(null)
  }
  
}
