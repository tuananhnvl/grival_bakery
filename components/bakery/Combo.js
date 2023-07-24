'use client';
import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from "next/image";
import ButtonAdd from "@/components/bakery/ButtonAdd";
import ButtonMore from "@/components/bakery/ButtonMore";
import data from '@/pages/data/brodard.json'
import {TDCombo,TRCombo,TBCombo,TableCombo} from './StylesCombo'
import PattentVintage from '@/components/asset/PattentVintage'

import Slogan from '@/components/asset/Slogan'

export default function Combo() {


    return (
        <div className="maxWidth" id="combo">
            <Slogan/>
            <PattentVintage top={-30} left={30} rotate={'rotate(180deg)'}/>
            <h2>MÙA HOA THU</h2>
            <p>Một mùa trăng nữa lại về. Mùa trăng có lẽ là mùa ngọt ngào nhất trong năm, bởi trăng về là gọi tuổi thơ về, cùng với lồng đèn, truyện cổ tích, cùng bánh trung thu trên mâm cỗ tròn đầy. Mỗi năm trăng về vào rằm tháng Tám, cũng là lúc đất trời rực rỡ với hoa tam giác mạch ở Hà Giang, cúc hoạ mi ở Hà Nội, hoa dã quỳ ở Đà Lạt và cả hoa súng Đồng Tháp. Vậy nên Brodard chọn Mùa Hoa Thu làm chủ đề chính cho BST bánh Trung Thu 2023 với mong muốn khi trăng về sẽ đúng mùa hoa nở ngọt ngào, cho một tết Đoàn Viên trọn vẹn nhất.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                Object.entries(data.combo).map(([key, value]) => {
                    const a = value.value
                    return (
                        <div className={styles.itemcombo} key={key}>
                         
                            <div className="img">
                                <Image src={`/asset-trungthu/combo/combo-${key}.png`} alt="" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className="info">
                                <h2>{value.name}</h2>
                                <p>{value.content}</p>
                            </div>
                            <div className="detail">
                                <TableCombo style={{width:'100%'}}>
                                    <TBCombo>
                                    {Array.isArray(a) ? a.map((data, index) => {
                                        return (
                                            <TRCombo key={index}>
                                                <TDCombo width={'50%'}>
                                                    <h4>
                                                        {data.name}
                                                    </h4>
                                                    <p>
                                                    {data.namee}
                                                    </p>
                                                </TDCombo>
                                           
                                                <TDCombo width={'20%'}><p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(data.price))}</p></TDCombo>
                                                <TDCombo width={'10%'}><ButtonMore id={data.idc} /></TDCombo>
                                                <TDCombo width={'10%'}><ButtonAdd id={data.idc} /></TDCombo>
                                            </TRCombo>
                                        )
                                    }) : null}
                                    </TBCombo>
                                </TableCombo>

                            </div>
                            <PattentVintage top={-30} right={-30} rotate={'rotate(270deg)'}/>

                        </div>
                    )
                })
            }
              


                {/*   <div className={styles.itemcombo}>
      <div className="img">
        <Image src={'/asset-trungthu/combo/combo-dong-day.png'} alt="" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className={styles.detail}>
        <h3>Combo Đong Đầy</h3>
        <ul>
          <li>Set Đong Đầy 1 <ButtonMore id={48} /><ButtonAdd id={48}/></li>
          <li>Set Đong Đầy 2 <ButtonMore id={49} /><ButtonAdd id={49}/></li>
          <li>Set Đong Đầy 3 <ButtonMore id={50} /><ButtonAdd id={50}/></li>
        </ul>
      </div>
    </div>

    <div className={styles.itemcombo}>
      <div className="img">
        <Image src={'/asset-trungthu/combo/combo-thuong-trang.png'} alt="" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className={styles.detail}>
        <h3>Combo Thưởng Trăng</h3>
        <ul>
          <li>Set Thưởng Trăng 1 <ButtonMore id={46} /><ButtonAdd id={46}/></li>
          <li>Set Thưởng Trăng 2 <ButtonMore id={47} /><ButtonAdd id={47}/></li>
        </ul>
      </div>
    </div>

    <div className={styles.itemcombo}>
      <div className="img">
        <Image src={'/asset-trungthu/combo/combo-da-sac.png'} alt="" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className={styles.detail}>
        <h3>Combo Đa Sắc</h3>
        <ul>
          <li>Set LAVA Tan Chảy <ButtonMore id={45} /><ButtonAdd id={45}/></li>
        </ul>
      </div>
    </div> */}
            </div>


        </div>
    )
}
