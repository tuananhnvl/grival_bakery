import Header from "@/components/Header";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"
import { db } from '../firebase.config.js';
import { collection, addDoc } from 'firebase/firestore';
import { LogoCart, WrapperCart, TableCart, TrCustom } from '@/components/StylesComponent.js'
import CartTable from "@/components/CartTable";


export default function CartPage() {
  console.log('[[CartPage]]');
  const { data: session } = useSession()
  
  const { cartProducts, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState({ "banhle": [], "combo": [] });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const router = useRouter()

  useEffect(() => {
    
    if (session) {
      setName(session.user.name)
      setEmail(session.user.email)
    }
  }, [session])



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
        cart: data.cart
      }),
    }).then((res) => {
      console.log("Fetch: ", res);
      res.status === 200
      addDoc(dbInstance, {
        name: data.name,
        email: data.email,
        cart: data.cart
      })
      setIsSuccess(true)
      clearCart()
      
      //?router.push("/success"): router.push("/error")
    })
  }
  async function onCheckOut() {
    alert(['onCheckOut',
      name, email, city, postalCode, streetAddress, country,
      cartProducts,]
    )
    let b = {
      name: name,
      email: email,
      cart: cartProducts
    }
    sendToMail(b)
  }
  function handleClearCart() {
    clearCart();
    setProducts()
}


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
    <main style={{ backgroundColor: 'var(--color-primary)' }}>
      {/*  <UserLog>
            {session ? (
              <div>
                {session.user.name}
                <br />
                {session.user.email}
                <br />
                <Image src={session.user.image} alt='user-img-gg' width={100} height={100} />
                <br />
                <button onClick={() => {
                  signOut()
                }}>Sign out</button>
                <button onClick={() => {
                  router.push('/Profile')
                }}>Profile</button>
              </div>
            ) : (
              <button onClick={() => {
                signIn()
              }}>Sign in</button>

            )}

          </UserLog> */}
      {/*   {!!cartProducts?.length && (
          <Box>
            <h2>Order information</h2>
            {session ? (
              <>
                <Input
                  type="text"
                  value={session.user.name}
                  name="name"
                  onChange={ev => setName(ev.target.value)} />
                <Input
                  type="text"
                  value={session.user.email}
                  name="email"
                  onChange={ev => setEmail(ev.target.value)} />
              </>
            ) : (
              <>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={ev => setName(ev.target.value)} />
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={ev => setEmail(ev.target.value)} />
              </>
            )}


            <CityHolder>
              <Input type="text"
                placeholder="City"
                value={city}
                name="city"
                onChange={ev => setCity(ev.target.value)} />
              <Input type="text"
                placeholder="Postal Code"
                value={postalCode}
                name="postalCode"
                onChange={ev => setPostalCode(ev.target.value)} />
            </CityHolder>
            <Input type="text"
              placeholder="Street Address"
              value={streetAddress}
              name="streetAddress"
              onChange={ev => setStreetAddress(ev.target.value)} />
            <Input type="text"
              placeholder="Country"
              value={country}
              name="country"
              onChange={ev => setCountry(ev.target.value)} />
            <Button black block
              onClick={onCheckOut}>
              Continue to payment
            </Button>
          </Box>
        )} */}
      <Header />
      <WrapperCart>
        <LogoCart>
          <Image src="logo-brodard.png" alt="Logo Brodrad" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
        </LogoCart>



        <button onClick={handleClearCart}>Clear Cart</button>
        <TableCart>
          <thead>
            <TrCustom>

              <th width="30%">Thông tin giỏ hàng</th>
              <th width="20%">Đơn giá</th>
              <th width="20%">Số lượng</th>
              <th width="20%">Tổng</th>
            </TrCustom>
          </thead>
        </TableCart>

        <CartTable />


      
      </WrapperCart>
    </main>
  );
}
