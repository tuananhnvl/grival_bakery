'use client';
import { useRef, useLayoutEffect,useEffect } from 'react'
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../styles/Login.module.css'
import useIsomorphicLayoutEffect from '@/helpers/isomorphicEffect';
gsap.registerPlugin(ScrollTrigger)
export default function contact() {
    useEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll();
          }
        )()
      }, [])
    const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

    const boxRef = useRef();



    return (
        <main>
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
}



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