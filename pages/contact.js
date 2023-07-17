
import { useRef, useEffect } from 'react'
import gsap from 'gsap';
import styles from '../styles/Login.module.css'
export default function contact() {


    const boxRef = useRef();
    useEffect(() => {
    
        const list = Array.prototype.slice.call(boxRef.current.children)
        console.log(list)
          gsap.to(list,
            {y: 100,duration:3,stagger:0.2}
          )
    }, [boxRef])



    return (
        <div>
            <div ref={boxRef} className={styles.boxgsap}>
                <span>a</span>
                <span>b</span>
                <span>c</span>
            </div>


        </div>
    )
}
