import Image from 'next/image'
import React from 'react'

export default function ImageLoad({imgUrl}) {
  return (
    <Image src={imgUrl} alt="" width={0} height={0} style={{ width: 'auto', height: '100%' }} />
  )
}
