import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import styles from '../styles/Profile.module.css'
import {useEffect, useState,useContext} from 'react'
import { app,db, storage } from '../firebase.config.js';
import { collection, addDoc ,getDocs} from 'firebase/firestore';

import { CartContext } from "@/components/CartContext";
import FormatData from "@/components/utils/FormatData";
export default function Profile() {
    const { data: session } = useSession()
    const { cartProducts} = useContext(CartContext);
    const router = useRouter();
    const [userData,setUserData] = useState([])
    const [cartData,setCartData] = useState([])
    useEffect(() => {
        console.log(cartProducts)
    },[cartProducts])
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const queryUsers = await getDocs(collection(db, 'users'));
          const queryCart = await getDocs(collection(db, 'list-customer'));
          const userDataArray = queryUsers.docs.map((doc) => doc.data());
          const cartDataArray = queryCart.docs.map((doc) => doc.data());
          setUserData(userDataArray)
          setCartData(cartDataArray)

       /*    onSnapshot(dbInstance, docsSnap => {
            docsSnap.forEach(doc => {
              console.log(doc.data());
            })
          }); */
       
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchUserData();
    }, []);

    if (session && session.user && session.user.email) {
        return (
            <div className={styles.container}>
              <FormatData/>
             <h1 className="title">admin</h1>
                <div className={styles.content}>
         
                      <h2> Signed in as {session.user.name} </h2>
                      <img src={session.user.image} />
                        <button className={styles.button}  onClick={() => {
                            router.push('/Login')
                        }}>Go back</button>
                      <h2>List User</h2>
                      <table style={{borderCollapse:'collapse'}}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user,index) => (
                             <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                      </table>
                      <h2>List Customer</h2>
                      <table style={{borderCollapse:'collapse'}}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Mail</th>
                                <th>Cart</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.map((item,index) => (
                             <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{JSON.stringify(item.cart)}</td>
                                </tr>
                            ))}
                        </tbody>
                      </table>
                    
                    </div>
            </div>
          )
    }else{
        return (
            <div className={styles.container}>
           
            <div className={styles.content}>
                  <h1>Let LOGIN</h1>
             
                    <button className={styles.button}  onClick={() => {
                        router.push('/Login')
                    }}>Go to login page</button>
                </div>
        </div>
        )
       
    }
 
  
}