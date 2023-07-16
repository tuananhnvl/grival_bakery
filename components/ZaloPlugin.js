import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ZaloPlugin() {

  const router = useRouter()
  const [showPlugin, setShowPlugin] = useState(true)
  console.log('[[ZaloPlugin]]]',showPlugin)
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === '/Profile' || url === '/Login') {
        setShowPlugin(false)
      } else {
        setShowPlugin(true)
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  if (!showPlugin) {
    return null
  }

  return (
    <div>
      <Script src="https://sp.zalo.me/plugins/sdk.js" /* strategy="worker" *//>
      <div className="zalo-chat-widget" data-oaid="881242904271584020" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="" data-height=""></div>
    </div>
  )
}
