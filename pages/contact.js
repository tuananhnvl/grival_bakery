'use client';
import { useRef, useLayoutEffect,useEffect } from 'react'
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image'
import Header from '@/components/Header'
import styles from '@/styles/Contact.module.css'
import data from '@/pages/data/brodard.json'
import Star from '@/components/asset/Star.js'
import PattentVintage from '@/components/asset/PattentVintage.js'
export default function contact() {
 
    const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

    const boxRef = useRef();
    const dataContent = data.content
    return (
        <main style={{backgroundColor:'var(--color-primary)'}} id='contact-page'>
            <Header/>
            <div className={styles.contact}>
                <div className='img'>
                    {/* <Image src={'/asset-trungthu/contact-1.png'} alt="" width={0} height={0} style={{ width: 'auto', height: '86%' }} /> */}
                </div>
                <div className='info'>
                    
                    <div>
                        <span><Image src={'logo-brodard.png'} alt='' width={0} height={0} style={{ width: '100%', height: 'auto' }}/></span>
                    <PattentVintage  top={-42} right={-42} rotate={'rotate(270deg)'}/>
                    <PattentVintage  top={-42} left={-42} rotate={'rotate(180deg)'}/>
                    <PattentVintage  bottom={-42} right={-42} rotate={'rotate(0deg)'}/>
                    <PattentVintage  bottom={-42} left={-42} rotate={'rotate(90deg)'}/>
                        {Array.isArray(dataContent) ? dataContent.map((item, index) => {
                            if(index == 2) {
                                return (
                                    <>
                                        <p className={styles.contentStyle} key={index}>{item}</p>
                                        <Star/>
                                    </>
                                ) 
                            }else{
                                return (
                                    <p className={styles.contentStyle} key={index}>{item}</p>
                                )
                            }
                            
                        }) : null}
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

function AnimatedText({children}) {
    const text = useRef(null);

    useLayoutEffect( () => {
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