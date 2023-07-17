
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css'
import Signin from './auth/signin'
import { useEffect,useRef } from "react";
import gsap from "gsap";

export default function Login() {
  const { data: session } = useSession()
  const router = useRouter();

  if (session) {

   
    
    return (
      <div className={styles.container}>
    
        <h1 className="title">HELLLO</h1>
        
        <div className={styles.content}>
             <h2> User {session.user.email} <br /></h2> 
              <div classname={styles.btns}>
                <button className={styles.button}  onClick={() => router.push('/')}>Home</button>
              <button className={styles.button} onClick={() => router.push('/Profile')}>Your cart</button>
               <button  className={styles.button} onClick={() => {
                  signOut()
                  }}>Sign out</button>
              </div>
        </div>
       
      </div>

    )
  }


  return (
    <Signin/>
  )
}