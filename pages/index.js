"use client";
import Header from "@/components/Header";
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";
import { useEffect, useContext, useRef } from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import LogoBrodrad from '@/public/logo-brodard.png'
import stylesf from '../styles/Footer.module.css'
import BanhLe from '@/components/bakery/BanhLe'
import Footer from '@/components/Footer'
import Combo from '@/components/bakery/Combo'
import data from '@/pages/data/brodard.json'
import gsap from 'gsap'
import { LenisContext } from "@/components/LenisProvider";
import Box from "@/components/bakery/Box";
import Slogan from "@/components/asset/Slogan";
import Logo from "@/components/asset/Logo";
const imagesc = require.context('@/public/asset-trungthu', true);
const imageList = imagesc.keys().map(image => imagesc(image));

export default function HomePage() {
  const router = useRouter()
  const refD = useRef(null)
  const lenisVal = useContext(LenisContext);
  useEffect(() => {
    if (lenisVal && lenisVal.scroll) {

    }
  }, [refD])
  function scrollToTarget(target) {

    lenisVal.scrollTo(`#${target}`, 1000)


  
  
  }
  return (
    <main style={{backgroundColor:'var(--color-primary)'}}>
      <Head>
        
        <title>Trang chủ - Bánh trung thu Brodard 2023</title>
        <meta
          name="description"
          content="Nhà phân phối bánh trung thu Brodard tại Sài Gòn || Since 1991"
          key="desc"
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_DOMAIN_HOST}`}
          key="canonical"
        />
        <link rel="icon" type="image/x-icon" href="https://brodardbakery1948.com/logo-brodard.png"></link>
        <meta property="og:title" content="Nhà phân phối bánh trung thu Brodard tại Sài Gòn || Since 1991" />
        <meta property="og:type" content="" />
        <meta property="og:url" content="https://brodardbakery1948.com" />
        <meta property="og:image" content="https://brodardbakery1948.com/logo-brodard.png" />
      </Head>
      <Header />
     {/*  <button id="btn-scrollTo" onClick={() => scrollToTarget('toppage')} >^</button> */}
      <div className={styles.banner} id="toppage">
      
          <h2>Bánh trung thu </h2>
          <div className={styles.logoonbanner}>
            <Image
              src={LogoBrodrad}
              alt="Logo Brodrad"
              priority={true}
              width={0} height={0} style={{ width: '100%', height: 'auto' }}
              quality={100}
            />
          </div>
          <p>Bánh trung thu Brodard, nơi hội tụ của sự tinh tế , Thay bạn thể hiện sự quan tâm tận tình </p>
          <div className={styles.btngr}>
            <button onClick={() => scrollToTarget('combo')} >Combo</button>
            <button onClick={() => scrollToTarget('banhle')}>Bánh lẻ</button>
            <button onClick={() => scrollToTarget('hop')}>Hộp</button>
          </div>
        </div>


        

        <div className={styles.gallery} >
          <div className={styles.sampleImg}>
            <Image
              src={imageList[1]}
              alt="Gallery Brodrad"
              priority={true}
              width={0} height={0} style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className={styles.sampleImg}>
            <Image
              src={imageList[4]}
              priority={true}
              alt="Gallery Brodrad"
              width={0} height={0} style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className={styles.sampleImg}>
            <Image
              src={imageList[2]}
              priority={true}
              alt="Gallery Brodrad"
              width={0} height={0} style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className={styles.sampleImg}>
            <Image
              src={imageList[3]}
              priority={true}
              alt="Gallery Brodrad"
              width={0} height={0} style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      
        <Combo />
    
        <div className={`maxWidth ${styles.listsp}`}>
          <BanhLe/>
          <Box/>
        </div>
        <div className={styles.infobrodard} ref={refD}>
          <Image
            src={LogoBrodrad}

            alt="Logo Brodrad"

            quality={100}
          />
          <div className={styles.infotext}>
            <p style={{ textAlign: 'center' }}>HƠN 70 NĂM HÀNH TRÌNH THƯƠNG HIỆU VIỆT</p>
            <p style={{ textAlign: 'center' }}>Xuất hiện tại Sài Gòn lần đầu tiên vào năm 1948, trải qua hơn 70 năm tồn tại và phát triển, Brodard đã trở thành một thương hiệu bánh uy tín và được đông đảo nhiều thế hệ yêu thích. Kế thừa công nghệ Pháp tiên tiến, cùng sự thấu hiểu thị hiếu, khẩu vị người tiêu dùng Việt, các sản phẩm của Brodard không chỉ đảm bảo hương vị thơm ngon tuyệt hảo mà còn có hình thức tinh tế sáng tạo, bắt nhịp xu hướng thời đại.</p>
            <p style={{ textAlign: 'center' }}>Đội ngũ nhân viên Brodard, với sứ mệnh và nhiệt tâm chân thành, luôn khát khao mang đến cho người tiêu dùng một thương hiệu Việt chất lượng cao, giữ vững tinh hoa truyền thống nhưng đồng thời cũng liên tục cải tiến, tìm kiếm những ý tưởng mới mẻ.</p>
            <p style={{ textAlign: 'center' }}>Chất lượng bánh Brodard luôn là yếu tố được coi trọng hàng đầu: không dùng phụ gia, đường hóa học và đảm bảo quy định an toàn vệ sinh thực phẩm. Bên cạnh chất lượng bánh đã gắn liền với thương hiệu, Brodard chăm chút cho hình thức bánh với nhiều mẫu mã đa dạng.</p>
          </div>
          <div className={styles.bghoatiet}>
            <Image src={'/asset-trungthu/hoatiet/3.png'} alt="" width={0} height={0} /* style={{ width: '20%', height: 'auto' }} */ /> 
            <Image src={'/asset-trungthu/hoatiet/2.png'} alt="" width={0} height={0} /* style={{ width: '20%', height: 'auto' }} */ /> 
          
          </div>
        </div>
        <div className={stylesf.footer}>
          <div className={`maxWidth ${stylesf.content}`}>
            <div className={stylesf.infocontent}>
              <div style={{display:'none !important'}}>
                <Image src={'logo-brodard.png'} alt='' width={0} height={0} style={{ width: '100%', height: '100%' }} />
              </div>
              <ul>
                <li>
                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.08 81.14">
                  <g >
                    <path fill='white' d="m40.43,24.21c-.03-.19-.05-.39-.09-.57-.03-.15-.07-.28-.1-.42l-.12-.46c-.03-.13-.06-.25-.1-.37-.06-.18-.12-.36-.19-.53l-.16-.43c-.03-.08-.05-.16-.09-.24-.1-.25-.23-.49-.35-.73l-.13-.27s-.04-.1-.07-.14c-.16-.29-.33-.57-.51-.85-.03-.05-.07-.1-.1-.16-.24-.37-.47-.66-.69-.94l-.09-.12c-.24-.3-.51-.6-.81-.9l-.08-.09c-2.41-2.43-5.67-3.8-9.15-3.84h-.15c-7.22,0-13.11,5.88-13.11,13.12s5.88,13.12,13.11,13.13h.16c3.47-.04,6.74-1.42,9.18-3.89.33-.34.6-.64.84-.93.04-.05.07-.09.1-.13.22-.28.44-.57.65-.87.07-.12.1-.18.14-.23.18-.28.36-.56.51-.85.02-.04.05-.09.07-.13.03-.07.06-.14.1-.21l.06-.11c.11-.23.23-.45.32-.68.03-.08.06-.15.09-.23l.16-.44c.07-.18.14-.35.19-.53.04-.12.07-.25.1-.37l.12-.47c.04-.13.07-.27.1-.41.04-.19.06-.39.09-.58l.07-.46c.02-.09.03-.18.04-.26.04-.44.07-.89.07-1.34s-.02-.9-.07-1.34c-.01-.09-.03-.18-.04-.26l-.07-.46Z"/>
                    <path fill='white' d="m50.42,43.45c.13-.22.27-.45.46-.73.02-.04.05-.07.07-.11.35-.65.88-1.61.91-1.65,2.14-4.19,3.22-8.7,3.22-13.42,0-.51-.01-1.01-.03-1.5,0-.22-.03-.43-.04-.64l-.03-.43c0-.14-.02-.27-.03-.4-.02-.18-.04-.35-.06-.53l-.04-.38c-.02-.18-.04-.36-.06-.55-.02-.14-.04-.29-.07-.43l-.06-.37c-.03-.21-.06-.41-.1-.61-.03-.16-.06-.33-.1-.49l-.09-.44c-.03-.15-.06-.3-.09-.45-.05-.22-.11-.43-.16-.64l-.09-.36c-.03-.11-.05-.22-.09-.34-.07-.23-.14-.46-.21-.69l-.09-.29c-.03-.11-.07-.23-.1-.33-.07-.23-.16-.45-.24-.67l-.11-.3c-.04-.11-.07-.21-.11-.31-.1-.25-.2-.49-.3-.74l-.12-.27c-.03-.08-.06-.15-.09-.23-.15-.33-.3-.65-.46-.97l-.11-.23c-.16-.32-.33-.63-.54-1l-.08-.15c-.19-.33-.39-.65-.62-1.02,0,0-.05-.09-.06-.1-.21-.32-.43-.64-.67-.98,0-.01-.05-.08-.06-.09-.24-.33-.49-.65-.73-.95-.01-.02-.05-.06-.06-.08-.26-.33-.54-.65-.83-.98-.29-.32-.58-.63-.88-.93,0,0,0,0,0,0C42.45,2.65,35.56,0,27.54,0,11.33,0,0,11.32,0,27.54c0,5.01,1.28,9.97,3.7,14.32l.41.76s.03.06.05.08l.69,1.06c.08.12.15.24.19.29l17.62,29.61h-.01l4.08,6.87c.22.37.62.6,1.05.6h0c.43,0,.83-.23,1.05-.61l3.98-6.85h0l17.18-29.57c.15-.23.28-.43.41-.65Zm-7.45-15.6c-.02.15-.04.29-.06.43l-.05.37c-.03.25-.07.5-.12.74-.04.19-.09.37-.14.56l-.1.4c-.04.18-.09.35-.14.52-.07.23-.16.46-.24.69l-.13.36c-.05.13-.09.25-.14.38-.12.28-.26.56-.39.83l-.12.25c-.04.09-.09.19-.14.28-.19.35-.39.68-.61,1.01-.08.13-.12.2-.16.27-.24.36-.5.7-.77,1.04-.05.07-.08.11-.11.15-.29.35-.61.71-.95,1.06-2.95,2.98-6.82,4.61-10.95,4.66-.05,0-.1,0-.16,0-8.59,0-15.57-6.99-15.57-15.57s6.99-15.57,15.57-15.57h.16c4.12.05,7.99,1.69,10.9,4.61l.07.07c.35.35.65.69.93,1.03.04.05.07.09.1.13.28.35.54.7.78,1.06.04.06.08.13.12.2.25.4.46.73.65,1.07.05.09.09.19.14.28l.06.12c.18.36.33.65.45.95.05.13.1.26.15.39l.13.35c.09.22.17.45.24.68.05.17.1.35.14.53l.1.39c.05.19.1.38.14.57.05.24.08.49.12.74l.06.37c.02.14.05.28.06.43.05.52.08,1.06.08,1.59s-.03,1.06-.08,1.58Z"/>
                  </g>
              </svg>
                  <p>66 Vo Thi Sau, Quan 1</p></li>
                <li><p>093 538 9747</p></li>
                <li><p>zalo</p></li>
                <li><p>vphcm@brodardbakery.com</p></li>
              </ul>
            </div>
            <div>
              <div className={stylesf.menutreo}>
                <h4>Menu</h4>
                <ul>
                  <li><button onClick={() => scrollToTarget('banhle')} >Bánh lẻ</button></li>
                  <li><button onClick={() => scrollToTarget('combo')}>Combo</button></li>
                  <li><button onClick={() => scrollToTarget('hop')}>Hộp</button></li>
                  <li><button type="button" onClick={() => router.push('/chinhsach-thanhtoan')}>Chính sách và Thanh toán</button></li>
                  <li><button type="button" onClick={() => router.push('/cart')}>Giỏ hàng</button></li>
                  <li><button type="button" onClick={() => router.push('/contact')}>Liên hệ</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={stylesf.more}>
            ALL RIGHTS RESERVED
          </div>
        </div>

    </main>
  );
}
