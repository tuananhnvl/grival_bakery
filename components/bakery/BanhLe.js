'use client';
import React from 'react'
import styles from '@/styles/Home.module.css'
import BanhNhanMan from '@/components/bakery/BanhNhanMan'
import BanhNhanNgotKo from '@/components/bakery/BanhNhanNgotKo'
import BanhNhanNgot from '@/components/bakery/BanhNhanNgot'
import BanhChay from '@/components/bakery/BanhChay'
import BanhMini from '@/components/bakery/BanhMini'
import data from '@/pages/data/brodard.json'
import Image from 'next/image'
import ButtonDowload from '../ButtonDowload';
import PattentVintage from '@/components/asset/PattentVintage'
export default function BanhLe() {
  return (
    <>
     <div style={{ display: 'flex', width: '100%',marginTop: '100px' }} id="banhle">
            <PattentVintage top={-45} left={-45} rotate={'rotate(180deg)'}/>
            <PattentVintage bottom={-45} right={-45} rotate={'rotate(0deg)'}/> 
            <div className={styles.contentbanhle}>
            
              <h2>Các vị bánh trung thu</h2>
              <p>Với sự kết hợp giữa những nguyên liệu tinh tuý nhất, những chiếc bánh độc bản, Hộp quà BRODARD VIP là món quà đầy tâm tình độc nhất dành cho kính khách</p>

              <ButtonDowload type={'baogia'}>Tải về đơn hàng</ButtonDowload>
              <ButtonDowload type={'banggia'}>Tải về bảng giá</ButtonDowload>
            </div>

            <div className={styles.infobanhle}>
              <Image
                src={'/asset-trungthu/banner3.png'}
                alt="Singla Cake Brodrad"
                width={0} height={0} style={{ width: 'auto', height: '100%' }}
              />
             
            </div>
          </div>

          <div className={styles.detailbanhle}>
            <BanhNhanMan data={data.single[0].type1} />
            <BanhNhanNgot data={data.single[1].type2} />
            <BanhNhanNgotKo data={data.single[2].type3} />
            <BanhChay data={data.single[3].type4} />
            <BanhMini data={data.single[4].type5} />
          </div>
    </>
  )
}
