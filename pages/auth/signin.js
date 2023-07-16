import React from 'react'
import styles from '@/styles/Login.module.css'
import {  signIn } from "next-auth/react"
export default function Signin() {
    return (
        <div className={styles.container}>
     
           <h1 className="title">Manager cart</h1>
     
          <div className={styles.content}>
    
              <h2> Dang nhap gio hang!!</h2>
          <button className={styles.button}
          
                 onClick={() => signIn()}>Sign in</button>
          </div>
        </div>
      )
}
