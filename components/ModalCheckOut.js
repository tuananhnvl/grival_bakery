import { useRef, useContext, useState } from "react";
import { useRouter } from "next/router";
import { CartContext } from "@/components/CartContext";
import styles from '@/styles/Contact.module.css'
import { db } from '../firebase.config.js';

import { collection, addDoc } from 'firebase/firestore';
export default function ModalCheckOut({ onClose }) {
  const {cartProducts,clearCart} = useContext(CartContext);
 
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [luuy, setLuuy] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);


  const router = useRouter()
  const dbInstance = collection(db, 'list-customer');
  async function sendToMail(data) {

    fetch("/api/nodemailer", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone:data.phone,
        luuy:data.luuy,
        cart: data.cart
      }),
    }).then((res) => {
      console.log("Fetch: ", res);
      res.status === 200
      addDoc(dbInstance, {
        name: data.name,
        email: data.email,
        phone:data.phone,
        luuy:data.luuy,
        cart: data.cart
      })
      setIsSuccess(true)
      clearCart()

      //?router.push("/success"): router.push("/error")
    })
  }
  async function onCheckOut() {
    alert(['onCheckOut',
      name, email, phone, luuy,
      cartProducts,]
    ) 
    let b = {
      name: name,
      email: email,
      phone:phone,
      luuy:luuy,
      cart: cartProducts
    }
    sendToMail(b)
  }





  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();

  };
  if (isSuccess) {
    return (
      <main style={{ backgroundColor: 'var(--color-primary)' }}>
        <Header />
        <h1>Chúng tôi đã nhận được đơn hàng!</h1>
        <p>Vui lòng chở nhân viên tư vấn liên hệ cho quý khách . thankk.</p>
        <button onClick={() => router.push('/')}>Trang chủ</button>
        <button onClick={() => router.push('/Login')}>Quản lý đơn hàng</button>
      </main>
    );
  }

  return (
    <div id='modal-space'>
      <div id='modal-checkout'>

        <button onClick={handleCloseClick}>X</button>
        <h2>Thông tin liên hệ</h2>
        <form className={styles.formPrimary}>
          <table>

            <tbody>
              <tr>
                <td width="40%"><label for="first">Tên khách hàng</label></td>
                <td width="60%"><input  onChange={ev => setName(ev.target.value)} type="text" id="name" name="name" /></td>
              </tr>
              <tr>
                <td width="40%"><label for="first">Số điện thoại</label></td>
                <td width="60%"><input onChange={ev => setPhone(ev.target.value)} type="text" id="phone" name="phone" /></td>
              </tr>
              <tr>
                <td width="40%"><label for="first">Gmail</label></td>
                <td width="60%"><input onChange={ev => setEmail(ev.target.value)} type="text" id="gmail" name="gmail" /></td>
              </tr>
              <tr>
                <td width="100%" colSpan={2}><label for="first">Lưu ý</label></td>

              </tr>
              <tr>

                <td width="100%" colSpan={2}><textarea onChange={ev => setLuuy(ev.target.value)} type="text" id="more" name="more" /></td>
              </tr>
            </tbody>
          </table>
          <button type="submit" onClick={() => onCheckOut()}>Gửi đơn hàng</button>
          {/*  {!!cartProducts?.length && ( */}
        </form>
      </div>
    </div>

  )
}
