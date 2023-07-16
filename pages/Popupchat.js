import React from 'react'
import { useSession } from "next-auth/react"
import styles from '../styles/Popupchat.module.css'
import ViewPopup from '@/components/ViewPopup'
import ToolPopup from '@/components/ToolPopup'
export default function Popupchat() {
    const { data: session } = useSession()
    console.log(session)
    if(session) {
        return (
            <div className={styles.warper}>
            <h2>Popup window</h2>
            <p>Hello user:{session.user.name}</p>
            <ViewPopup/> 
            <ToolPopup/>
            <button>Sign out</button>
            <button>Sign by guest</button>
            </div>
        )
    }else{
        return (
            <div className={styles.warper}>Popup window
              <button>Sign in</button>
              <button>Sign by guest</button>
            </div>
        )
    }
   
}
