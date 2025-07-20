'use client';
import { useContext,useState,useEffect} from "react";
import { CartContext } from "@/components/CartContext";
import styles from '@/styles/Home.module.css'
import Image from "next/image";

import ske from '@/styles/Home.module.css'
import PattentVintage from "../asset/PattentVintage";

export default function Box() {
 
  
  return (
    <>
     <div style={{ display: 'flex', width: '100%', marginTop: '120px', position: 'relative',    flexDirection: "column" }} id="hop">
        <PattentVintage top={-45} left={-45} rotate={'rotate(180deg)'} />
        <PattentVintage top={-45} right={-45} rotate={'rotate(270deg)'} />
        <div className={ske.contentbanhle} id="fixtam001" style={{width:'100% !important',margin: '0 auto !important'}}>

          <h2 >HỘP QUÀ TẶNG TRUNG THU</h2>
          <p>Lấy cảm hứng từ vẻ đẹp vĩnh cửu của đất trời, từng hộp bánh trung thu Brodard 2025 như một khu vườn hoa nên sự yên bình - nơi cánh chim sải rộng, hoa lá khẽ nở, đường nét uyển chuyển trên nền màu pastel dịu ngọt hay sắc vàng tỏa sáng.

Mỗi họa tiết là một lời chúc an lành, mỗi thiết kế là một tấm lòng gửi gắm qua bàn tay thủ công tinh xảo.</p>

        </div>

        <div className={ske.infobanhle} style={{width:'100% !important',height:'fit-content !important'}}>
          <Image
            src={'/asset_2025/banner.jpg'}
            alt="Singla Cake Brodrad"
            width={0} height={0} style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
  
    </>
   
  )
}
