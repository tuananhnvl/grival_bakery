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
          <p>Lấy ý tưởng kết nối yêu thương trong mùa đoàn viên, bộ mẫu hộp trung thu Brodard 2024 được thiết kế giống những tấm bưu thiếp mang “Dấu ấn Sài Gòn” đong đầy cảm xúc, giúp truyền tải tâm tình mà người gửi dành tặng cho người được trao hộp bánh. Mỗi chiếc hộp bánh trung thu 2024 cao cấp Brodard còn được ví như sợi dây kết nối nghĩa tình, bày tỏ sự quan tâm, sẻ chia, thắt chặt tình thâm, nối gần “giãn cách”. Để ta cảm nhận được sự hiện diện của nhau dù đang ở bất cứ nơi đâu trong mùa đoàn viên này.</p>

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
