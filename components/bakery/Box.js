'use client';
import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from "next/image";
export default function Box() {
  return (
    <div className={` ${styles.listbox}`} id="hop">
          <h2>Hộp quà tặng trung thu</h2>
          <p>Lấy ý tưởng kết nối yêu thương trong mùa đoàn viên, bộ mẫu hộp trung thu Brodard 2023 được thiết kế giống những tấm bưu thiếp mang “Dấu ấn Sài Gòn” đong đầy cảm xúc, giúp truyền tải tâm tình mà người gửi dành tặng cho người được trao hộp bánh. Mỗi chiếc hộp bánh trung thu 2023 cao cấp Brodard còn được ví như sợi dây kết nối nghĩa tình, bày tỏ sự quan tâm, sẻ chia, thắt chặt tình thâm, nối gần “giãn cách”. Để ta cảm nhận được sự hiện diện của nhau dù đang ở bất cứ nơi đâu trong mùa đoàn viên này.</p>
          <div className='grid-system-12'>
            <div className='boxitem' >
              <div><Image width={0} height={0} style={{ width: '100%', height: 'auto' }} src={'/asset-trungthu/loaihop/41-rbg.png'} alt="Box 5 cai" /></div>
              
              <div className='info'>
                <h3>Hộp 4 Bánh</h3>
                <p>625.000VND</p>
                <button>Mua</button>
              </div>
            </div>
            <div className='boxitem'>
              <div> <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} src={'/asset-trungthu/loaihop/61-rbg.png'} alt="Box 5 cai" /></div>
              <div className='info'>
                <h3>Hộp 6 Bánh</h3>
                <p>625.000VND</p>
                <button>Mua</button>
              </div>
            </div>
            <div className='boxitem'>
              <div><Image width={0} height={0} style={{ width: '100%', height: 'auto' }} src={'/asset-trungthu/loaihop/v1-rbg.png'} alt="Box 5 cai" /></div>
              <div className='info'>
                <h3>Hộp VIP</h3>
                <p>625.000VND</p>
                <button>Mua</button>
              </div>
            </div>
         {/*    <div className='boxitem'>
              <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} src={'/asset-trungthu/loaihop/v1.png'} alt="Box 5 cai" />
              <h3>Hộp VIP</h3>
              <p>625.000VND</p>
              <button>Mua</button>
            </div>
            <div className='boxitem'>
              <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} src={'/asset-trungthu/loaihop/v1.png'} alt="Box 5 cai" />
              <h3>Hộp VIP</h3>
              <p>625.000VND</p>
              <button>Mua</button>
            </div> */}
          </div>
        </div>
  )
}
