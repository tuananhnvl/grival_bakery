
import Header from "@/components/Header";
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";
import { useEffect } from 'react'
import Image from "next/image";
import LogoBrodrad from '@/public/logo-brodard.png'

import BanhNhanMan from '@/components/bakery/BanhNhanMan'
import BanhNhanNgot from '@/components/bakery/BanhNhanNgot'
import BanhChay from '@/components/bakery/BanhChay'
import BanhMini from '@/components/bakery/BanhMini'
import Combo from '@/components/bakery/Combo'



const imagesc = require.context('@/public/asset-trungthu', true);
const imageList = imagesc.keys().map(image => imagesc(image));

export default function HomePage() {

  console.log(imageList.length)




  return (
    <>
      <Head>
        <title>Home Page - Bánh trung thu Grival</title>
        <meta
          name="description"
          content="Nhà cung cấp bánh trung thu tại Sài Gòn || Since 1991."
          key="desc"
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_DOMAIN_HOST}`}
          key="canonical"
        />
      </Head>
      <Header />
      <section>
        <div className={styles.banner}>
          <h2>Bánh trung thu </h2>
          <div className={styles.logoonbanner}>
            <Image
              src={LogoBrodrad}
              alt="Logo Brodrad"
              priority={true}
              quality={100}
            />
          </div>
          <p>Bánh trung thu Brodard, nơi hội tụ của sự tinh tế , Thay bạn thể hiện sự quan tâm tận tình </p>
          <div className={styles.btngr}>
            <button>Hộp Bánh Combo</button>
            <button>Bánh lẻ</button>
          </div>
        </div>
        <div className={styles.gallery} >
          <div className={styles.sampleImg}>
            <Image
              src={imageList[1]}
              alt="Gallery Brodrad"
              priority={true}
            //style={{objectFit: "cover"}}         
            />
          </div>
          <div className={styles.sampleImg}>
            <Image
              src={imageList[4]}
              priority={true}
              alt="Gallery Brodrad"

            />
          </div>
          <div className={styles.sampleImg}>
            <Image
              src={imageList[2]}
              priority={true}
              alt="Gallery Brodrad"

            />
          </div>
          <div className={styles.sampleImg}>
            <Image
              src={imageList[3]}
              priority={true}
              alt="Gallery Brodrad"

            />
          </div>
        </div>
        <div className={styles.infobrodard}>
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
        </div>
        <div className={`maxWidth ${styles.listbox}`}>
          <h2>Hộp quà tặng trung thu</h2>
          <div className='listboxitem'>
            <div className='boxitem2'>
              <Image width={420} height={420} src={'/asset-trungthu/loaihop/41.png'} alt="Box 5 cai" />
              <h3>Hộp Combo 4 Bánh</h3>
              <p>000.000VND</p>
            </div>
            <div className='boxitem'>
              <Image width={420} height={420} src={'/asset-trungthu/loaihop/61.png'} alt="Box 5 cai" />
              <h3>Hộp Combo 6 Bánh</h3>
              <p>000.000VND</p>
            </div>
            <div className='boxitem'>
              <Image width={420} height={420} src={'/asset-trungthu/loaihop/v1.png'} alt="Box 5 cai" />
              <h3>Hộp Combo VIP</h3>
              <p>000.000VND</p>
            </div>
          </div>
        </div>
        <div className={`maxWidth ${styles.listbanhle}`}>
        <div style={{ display: 'flex', width: '100%'}}>
              <div className={styles.contentbanhle}>
                <h2>các vị bánh trung thu</h2>
                <p>Với sự kết hợp giữa những nguyên liệu tinh tuý nhất, những chiếc bánh độc bản, Hộp quà BRODARD VIP là món quà đầy tâm tình độc nhất dành cho kính khách</p>
              </div>
              
              <div className={styles.infobanhle}>
                <div>
                  <Image
                    src={'/asset-trungthu/hop/1.png'}
                    alt="Singla Cake Brodrad"
                    width={420}
                    height={420}

                  />
                  <Image
                    src={imageList[2]}
                    alt="Singla Cake Brodrad"
                    width={420}
                    height={420}
                  />
                </div>
              </div>
            </div>
          <div className={styles.infobanhle}>
            <BanhNhanMan/>
            <BanhNhanNgot/>
            <BanhChay/>
            <BanhMini/>
           
          </div>
          
        </div>
      </section>


    </>
  );
}
