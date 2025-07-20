import React from 'react'

export default function ButtonDowload({children,type}) {
function download(type) {
    if(type == 'baogia') {
        if (typeof window !== "undefined"){
            window.location.href = `${process.env.NEXT_PUBLIC_DOMAIN_HOST}/asset_2025/Bang_gia_brodard_2025.pdf`
        }
    }else if(type == 'banggia') {
        if (typeof window !== "undefined"){
            window.location.href = `${process.env.NEXT_PUBLIC_DOMAIN_HOST}/asset_2025/Bang_gia_brodard_2025.pdf`
        }
    }
}
  return (
    <button className='btndowload'onClick={() => download(type)}>{children}</button>
  )
}
