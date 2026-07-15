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

            <h2>“Trao Vị Trăng, <br></br>Gửi Tâm Tình"</h2>




            <p>
           Từ nghệ thuật chế tác tinh tế đến hương vị thanh nhã, mỗi hộp quà Brodard là nhịp cầu nối những yêu thương. Mỗi chiếc bánh là sự hòa quyện của nguyên liệu tuyển chọn, kỹ nghệ làm bánh lâu năm và tâm huyết gửi trao,để mỗi lần thưởng thức đều lưu giữ một dư vị khó quên.
            </p>
            <p>

           Dưới ánh trăng đoàn viên, món quà Brodard không chỉ mang theo vị ngọt thanh tao mà còn chuyên chở những lời chúc an lành, tri ân và gắn kết;
để mỗi mùa Trung Thu là một dịp sẻ chia trọn vẹn, nơi vị trăng được nâng niu trong từng chiếc bánh và tâm tình được gửi trao bằng tất cả sự chân thành.
            </p>
            
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
                                {(() => {
                                  const comboItem = data.code.find(c => c.type === key);
                                  const imgSrc = comboItem ? comboItem.image.replace(/^\.\//, '/') : `/asset_2025/combo/combo-${key}.jpg`;
                                  return (
                                    <Image src={imgSrc} alt="" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
                                  );
                                })()}
                            </div>
                            <div>
                            <div className={styles.info}>
                                <h2 className="title_product">{value.name}</h2>
                                {/* <p className="subtitle_product">{value.content}</p> */}
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
