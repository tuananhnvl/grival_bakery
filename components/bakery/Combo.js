'use client';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import styles from '@/styles/Home.module.css'
import Image from "next/image";
import ButtonAdd from "@/components/bakery/ButtonAdd";
import ButtonMore from "@/components/bakery/ButtonMore";
import data from '@/pages/data/brodard.json'
import {TDCombo,TRCombo,TBCombo,TableCombo} from './StylesCombo'
import PattentVintage from '@/components/asset/PattentVintage'
import RockLine from '@/components/asset/RockLine'
import Slogan from '@/components/asset/Slogan'
import { LenisContext } from "../LenisProvider";

export default function Combo() {
  const lenisVal = useContext(LenisContext);
  function scrollToTarget(target) {
    lenisVal.scrollTo(`#${target}`, 1000)
  }
    return (
        <>
            {/* <Slogan top={0} left={0}  position={'relative'} margin={'0 auto'} width={'fit-content'} height={'fit-content'}/> */}
         {/*    <PattentVintage top={-45} left={-45} rotate={'rotate(180deg) '}/> */}
         {/*    <RockLine rotate={'rotate(180deg)'} right={'0px'}/>
            <RockLine rotate={'rotate(0deg)'} left={'0px'}/> */}
          
            <div className="customoverflow">
              <p>Một mùa trăng nữa lại về. Mùa trăng có lẽ là mùa ngọt ngào nhất trong năm, bởi trăng về là gọi tuổi thơ về, cùng với lồng đèn, truyện cổ tích, cùng bánh trung thu trên mâm cỗ tròn đầy. Mỗi năm trăng về vào rằm tháng Tám, cũng là lúc đất trời rực rỡ với hoa tam giác mạch ở Hà Giang, cúc hoạ mi ở Hà Nội, hoa dã quỳ ở Đà Lạt và cả hoa súng Đồng Tháp. Vậy nên Brodard chọn Mùa Hoa Thu làm chủ đề chính cho BST bánh Trung Thu 2024 với mong muốn khi trăng về sẽ đúng mùa hoa nở ngọt ngào, cho một tết Đoàn Viên trọn vẹn nhất.</p>
              <p><strong>Danh sách sản phẩm</strong></p>
            </div>
            <div className={styles.btngr}>
              <button onClick={() => scrollToTarget('combo')} >Combo</button>
              <button onClick={() => scrollToTarget('banhle')}>Bánh lẻ</button>
              <button onClick={() => scrollToTarget('hop')}>Hộp</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}  id="combo">
            {
                Object.entries(data.combo).map(([key, value]) => {
                  
                    return (
                        <div className={styles.itemcombo} key={key}>
                         
                            <div className="img">
                                <Image src={`/asset_2024/combo/combo-${key}.jpg`} alt="" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div>
                            <div className={styles.info}>
                                <h2 className="title_product">{value.name}</h2>
                                <p className="subtitle_product">{value.content}</p>
                            </div>
                            <div className="detail">
                                <TableCombo style={{width:'100%'}}>
                                    <TBCombo>
                                    {Array.isArray(value.value) ? (value.value).map((data, index) => {
                                 
                           
                                        return (
                                            <TRCombo key={data.idc}>
                                                <TDCombo width={'50%'}>
                                                    <h4 className="name_product">
                                                        {data.name}
                                                    </h4>
                                                    <p className="subname_product">
                                                    {data.namee}
                                                    </p>
                                                </TDCombo>
                                           
                                                <TDCombo width={'34%'}><p><strong>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(data.price))}</strong></p></TDCombo>
                                                <TDCombo width={'14%'}>
                                                  <div>
                                                    <ButtonMore id={data.idc} >Xem chi tiết</ButtonMore>
                                                  </div>
                                                </TDCombo>
                                          
                                            </TRCombo>
                                        )
                                    }) : null}
                                    </TBCombo>
                                </TableCombo>

                            </div>
                            <PattentVintage top={0} right={0} rotate={'rotate(270deg)'}/>
                            </div>
                          
                           

                        </div>
                    )
                })
            }
              


           
            </div>


        </>
    )
}
