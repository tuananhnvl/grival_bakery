'use client';
import { useRef, useLayoutEffect, useEffect } from 'react'
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image'
import Header from '@/components/Header'
import styles from '@/styles/Contact.module.css'
import data from '@/pages/data/brodard.json'
import Star from '@/components/asset/Star.js'
import PattentVintage from '@/components/asset/PattentVintage.js'

import Head from 'next/head'
export default function contact() {

    const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

    const boxRef = useRef();
    const dataContent = data.content
    return (
        <main style={{ backgroundColor: 'var(--color-primary)' }} id='contact-page'>
             <Head>
        
                <title>Liên hệ - Bánh trung thu Brodard 2023</title>
                <meta
                name="description"
                content="Liên hệ - Nhà phân phối bánh trung thu Brodard tại Sài Gòn || Since 1991"
                key="desc"
                />
                <link
                rel="canonical"
                href={`${process.env.NEXT_PUBLIC_DOMAIN_HOST}`}
                key="canonical"
                />
                <link rel="icon" type="image/x-icon" href="https://brodardbakery1948.com/logo-brodard.png"></link>
                <meta property="og:title" content="Liên hệ - Nhà phân phối bánh trung thu Brodard tại Sài Gòn || Since 1991" />
                <meta property="og:type" content="" />
                <meta property="og:url" content="https://brodardbakery1948.com" />
                <meta property="og:image" content="https://brodardbakery1948.com/logo-brodard.png" />
            </Head>
            <Header />
            <div className={styles.contact}>
                <div className={styles.custominfo}>

                    <div>
                        <span><Image src={'logo-brodard.png'} alt='' width={0} height={0} style={{ width: '100%', height: 'auto' }} /></span>
                        <PattentVintage top={0} right={0} rotate={'rotate(270deg)'} />
                        <PattentVintage top={0} left={0} rotate={'rotate(180deg)'} />
                        <PattentVintage bottom={0} right={0} rotate={'rotate(0deg)'} />
                        <PattentVintage bottom={0} left={0} rotate={'rotate(90deg)'} />
                        {Array.isArray(dataContent) ? dataContent.map((item, index) => {
                            if (index == 2) {
                                return (
                                    <>
                                        <p className={styles.contentStyle} key={index}>{item}</p>
                                        <Star position={'relative'}/>
                                    </>
                                )
                            } else {
                                return (
                                    <p className={styles.contentStyle} key={index}>{item}</p>
                                )
                            }

                        }) : null}
                    </div>
                    
                </div>
                <div className={styles.detailcontact}>
                    <div>
                        <div>
                            <span>
                                <Star left={'10%'} top={'40%'} translate={'translateY(-50%)'}/>
                                <h2>Hotline</h2>
                                <Star right={'10%'}  top={'40%'} translate={'translateY(-50%)'}/>
                            </span>
                           
                            <a>093.528.9747</a>
                        </div>
                        <h2>THÔNG TIN KHÁCH HÀNG</h2>
                       <Image style={{margin:'0 auto',display:'block'}} src={'asset-trungthu/hoatiet/h7.svg'} alt="" width={100} height={20}/>
                        <form className={styles.formPrimary} action="/send-data-here" method="post">
                            <table>
                                
                                <tbody>
                                    <tr>
                                        <td width="40%"><label for="first">Tên khách hàng</label></td>
                                        <td width="60%"><input type="text" id="name" name="name" /></td>
                                    </tr>
                                    <tr>
                                        <td width="40%"><label for="first">Số điện thoại</label></td>
                                        <td width="60%"><input type="text" id="phone" name="phone" /></td>
                                    </tr>
                                    <tr>
                                        <td width="40%"><label for="first">Gmail</label></td>
                                        <td width="60%"><input type="text" id="gmail" name="gmail" /></td>
                                    </tr>
                                    <tr>
                                        <td width="100%" colSpan={2}><label for="first">Nội dung tư vấn</label></td>
                                    
                                    </tr>
                                    <tr>

                                        <td width="100%" colSpan={2}><textarea type="text" id="more" name="more" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    )
}

/* 
export default function contact() {
 
    const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

    const boxRef = useRef();

    return (
        <main style={{background:'rgba(223,234,227,255)'}}>
            <Header/>
            <div ref={boxRef} className={styles.boxgsap}>
                <span>a</span>
                <span>b</span>
                <span>c</span>
            </div>
            <div className='box-c'>asdasd</div>
            <div className={styles.description} >
                {phrases.map( (phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                })}
            </div>
            <div style={{width:'200px',height:'200px'}}></div>
            <div className={styles.description} >
                {phrases.map( (phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                })}
            </div>
        </main>
    )
} */

function AnimatedText({ children }) {
    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                // markers:true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "-900px",
            ease: "power3.Out"
        })
    }, [])

    return <p ref={text}>{children}</p>
}