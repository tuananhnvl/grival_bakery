"use client";
import Header from "@/components/Header";
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";
import { useEffect,useContext ,useRef} from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import LogoBrodrad from '@/public/logo-brodard.png'
import stylesf from '../styles/Footer.module.css'
import BanhNhanMan from '@/components/bakery/BanhNhanMan'
import BanhNhanNgotKo from '@/components/bakery/BanhNhanNgotKo'
import BanhNhanNgot from '@/components/bakery/BanhNhanNgot'
import BanhChay from '@/components/bakery/BanhChay'
import BanhMini from '@/components/bakery/BanhMini'
import Footer from '@/components/Footer'
import data from '@/pages/data/brodard.json'
import ButtonAdd from "@/components/bakery/ButtonAdd";
import ButtonMore from "@/components/bakery/ButtonMore";
import {LenisContext} from "@/components/LenisProvider";
const imagesc = require.context('@/public/asset-trungthu', true);
const imageList = imagesc.keys().map(image => imagesc(image));

export default function HomePage() {
  const router = useRouter()
  const refD = useRef(null)
  const lenisVal = useContext(LenisContext);
  useEffect(() => {
    if (lenisVal && lenisVal.scroll) {

    }
  },[refD])
  function scrollToTarget(target) {
 
    lenisVal.scrollTo(`#${target}`,1000)
  }
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
        </div>
        <div className="maxWidth" id="combo">
          <h2>Các loại combo</h2>
          <h3>MÙA HOA THU</h3>
          <p>Một mùa trăng nữa lại về. Mùa trăng có lẽ là mùa ngọt ngào nhất trong năm, bởi trăng về là gọi tuổi thơ về, cùng với lồng đèn, truyện cổ tích, cùng bánh trung thu trên mâm cỗ tròn đầy. Mỗi năm trăng về vào rằm tháng Tám, cũng là lúc đất trời rực rỡ với hoa tam giác mạch ở Hà Giang, cúc hoạ mi ở Hà Nội, hoa dã quỳ ở Đà Lạt và cả hoa súng Đồng Tháp. Vậy nên Brodard chọn Mùa Hoa Thu làm chủ đề chính cho BST bánh Trung Thu 2023 với mong muốn khi trăng về sẽ đúng mùa hoa nở ngọt ngào, cho một tết Đoàn Viên trọn vẹn nhất.</p>
          <div className={styles.itemcombo}>
            <div className="img">
              <Image src={'/asset-trungthu/combo/combo-dau-mua.png'} alt="" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="detail">
              <h3>Combo Đầu Mùa</h3>
              <ul>
                <li>Set Đầu Mùa 1  <ButtonMore id={41} /><ButtonAdd id={41}/></li>
                <li>Set Đầu Mùa 2  <ButtonMore id={42} /><ButtonAdd id={42}/></li>
                <li>Set Đầu Mùa 3  <ButtonMore id={43} /><ButtonAdd id={43}/></li>
                <li>Set Đầu Mùa 4  <ButtonMore id={44} /><ButtonAdd id={44}/></li>
              </ul>
            </div>
          </div>

          <div className={styles.itemcombo}>
            <div className="img">
              <Image src={'/asset-trungthu/combo/combo-dong-day.png'} alt="" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="detail">
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
            <div className="detail">
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
            <div className="detail">
              <h3>Combo Đa Sắc</h3>
              <ul>
                <li>Set LAVA Tan Chảy <ButtonMore id={45} /><ButtonAdd id={45}/></li>
              </ul>
            </div>
          </div>

        </div>
        <div className={`maxWidth ${styles.listbanhle}`} id="banhle">
        <div style={{ display: 'flex', width: '100%'}} >
              <div className={styles.contentbanhle}>
                <h2>các vị bánh trung thu</h2>
                <p>Với sự kết hợp giữa những nguyên liệu tinh tuý nhất, những chiếc bánh độc bản, Hộp quà BRODARD VIP là món quà đầy tâm tình độc nhất dành cho kính khách</p>
              
                <button>Tải về đơn hàng</button>
                <button>Tải về bảng giá</button>
              </div>
              
              <div className={styles.infobanhle}>
              <Image
                    src={imageList[12]}
                    alt="Singla Cake Brodrad"
                    width={0} height={0} style={{ width: '100%', height: 'auto' }} 
                  />
                  <Image
                    src={imageList[2]}
                    alt="Singla Cake Brodrad"
                    width={0} height={0} style={{ width: '100%', height: 'auto' }} 
                  />
              </div>
            </div>
           
          <div className={styles.detailbanhle}>
            <BanhNhanMan data={data.single[0].type1}/>
            <BanhNhanNgot data={data.single[1].type2}/>
            <BanhNhanNgotKo data={data.single[2].type3}/>
            <BanhChay data={data.single[3].type4}/>
            <BanhMini data={data.single[4].type5}/>
          </div>
          
        </div>
        <div className={` ${styles.listbox}`} id="hop">
          <h2>Hộp quà tặng trung thu</h2>
          <div className='grid-system-12'>
            <div className='boxitem' >
              <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} src={'/asset-trungthu/loaihop/41.png'} alt="Box 5 cai"  />
              <h3>Hộp 4 Bánh</h3>
              <p>625.000VND</p>
              <button>Mua</button>
            </div>
            <div className='boxitem'>
              <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} src={'/asset-trungthu/loaihop/61.png'} alt="Box 5 cai" />
              <h3>Hộp 6 Bánh</h3>
              <p>625.000VND</p>
              <button>Mua</button>
            </div>
            <div className='boxitem'>
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
            </div>
            <div className='boxitem'>
              <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} src={'/asset-trungthu/loaihop/v1.png'} alt="Box 5 cai" />
              <h3>Hộp VIP</h3>
              <p>625.000VND</p>
              <button>Mua</button>
            </div>
          </div>
        </div>
        <div className={stylesf.footer}>
            <div className={stylesf.content}>
                <div>
                    <Image src={'logo-brodard.png'} alt='' width={0} height={0} style={{ width: '50%', height: 'auto' }} />
                    <ul>
                        <li><p>66 Vo Thi Sau, Quan 1</p></li>
                        <li><p>093 538 9747</p></li>
                        <li><p>zalo</p></li>
                        <li><p>vphcm@brodardbakery.com</p></li>
                    </ul>
                </div>
                <div>
                    <div className={stylesf.menutreo}>
                      <h4>Menu</h4>
                        <ul>
                            <li><button  onClick={() => scrollToTarget('banhle')} >Bánh lẻ</button></li>
                            <li><button  onClick={() => scrollToTarget('combo')}>Combo</button></li>
                            <li><button  onClick={() => scrollToTarget('hop')}>Hộp</button></li>
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
      </section>


    </>
  );
}
