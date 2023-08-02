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
    <main style={{backgroundColor:'#d5e4dd'}}>
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
          <div className={styles.bgbanner}>
            <Image src={'/BRODARD_EDM.png'} alt="Banh Trung Thu Brodard 2023"   width={0} height={0} style={{ width: '100%', height: 'auto' }} />
          </div>
       {/*    <h2>Bánh trung thu </h2> */}
         {/*  <div className={styles.logoonbanner}>
            <Image
              src={LogoBrodrad}
              alt="Logo Brodrad"
              priority={true}
              width={0} height={0} style={{ width: '100%', height: 'auto' }}
              quality={100}
            />
          </div> */}
       {/*    <p>Bánh trung thu Brodard, nơi hội tụ của sự tinh tế , Thay bạn thể hiện sự quan tâm tận tình </p> */}
<br></br>
          <div className={styles.btngr}>
            <button onClick={() => scrollToTarget('combo')} >Combo</button>
            <button onClick={() => scrollToTarget('banhle')}>Bánh lẻ</button>
            <button onClick={() => scrollToTarget('hop')}>Hộp</button>
          </div>
        </div>


        
{/* 
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
       */}
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
              <div>
                <Image src={'logo-brodard.png'} alt='' width={0} height={0} style={{ width: '100%', height: '100%' }} />
              </div>
              <ul>
                <li>
                  <Image src="/icon/location.svg" alt="" width={20} height={20}/>
                  <p>11 Nguyễn Thiệp, Phường Bến Nghé, Quận 1, TPHCM, Việt Nam</p></li>
                <li>
                <Image src="/icon/phone.svg" alt="" width={20} height={20}/>
                  <p>0785.7777.68</p></li>
                <li>
           
                <Image src="/icon/mail.svg" alt="" width={20} height={20}/>
                  <p>trungthubrodard@gmail.com</p></li>
              </ul>
            </div>
            <div>
              <div className={stylesf.menutreo}>
                <h4>Menu</h4>
                <ul>
                  <li><button onClick={() => scrollToTarget('banhle')} >Bánh lẻ</button></li>
                  <li><button onClick={() => scrollToTarget('combo')}>Combo</button></li>
                  <li><button onClick={() => scrollToTarget('hop')}>Hộp</button></li>
                {/*   <li><button type="button" onClick={() => router.push('/chinhsach-thanhtoan')}>Chính sách và Thanh toán</button></li> */}
                 {/*  <li><button type="button" onClick={() => router.push('/cart')}>Giỏ hàng</button></li> */}
                  {/* <li><button type="button" onClick={() => router.push('/contact')}>Liên hệ</button></li> */}
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
