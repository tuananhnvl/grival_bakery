import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/compo-styles/Center";
import Button from "@/components/compo-styles/Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import Table from "@/components/compo-styles/Table";
import Input from "@/components/Input";
import data from './data/brodard.json'
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signOut, signIn } from "next-auth/react"
import { db } from '../firebase.config.js';
import { collection, addDoc } from 'firebase/firestore';




const ColumnsWrapper = styled.div`
 
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img{
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const CityHolder = styled.div`
  display:flex;
  gap: 5px;
`;

const UserLog = styled.div`
  background: gray;
`

export default function CartPage({ ip }) {
  const { data: session } = useSession()



  console.log(ip)
  console.log('[[CartPage]]');
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
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
  useEffect(() => {
    // console.log('---------------0',`Length:${cartProducts.length}`)
    if (cartProducts.length > 0) {

      //  console.log('---------------1')
      const uniqueProducts = Array.from(new Set(cartProducts));
      console.log(uniqueProducts)
      setProducts(uniqueProducts)

    } else {
      console.log('++++0')
      //setProducts([]);
    }
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      //  console.log('---------------2')
      return;
    }
    if (window?.location.href.includes('success')) {
      //  console.log('---------------3')
      setIsSuccess(true);
      clearCart();
    }
  }, []);
  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  function handleClearCart() {
    clearCart();
    setProducts()
  }
  const dbInstance = collection(db, 'list-customer');
  async function sendDataToDb(data) {

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
  async function goToPayment() {
    alert(['goToPayment',
      name, email, city, postalCode, streetAddress, country,
      cartProducts,]
    )


    let b = {
      name: name,
      email: email,
      cart: cartProducts
    }
    console.log(cartProducts)
    sendDataToDb(b)

    // nodemailer(name,email,cartProducts)




  }


  let total = 0;

  for (const productId of cartProducts) {

    const price = data.code.find(p => (p.idb) === productId)?.info[1] || 0;
    console.log(price)
    total += price;
    //console.log(total)
  }
  // console.log('---------------4',`$${total}`,`Length:${cartProducts.length}`)
  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Chúng tôi đã nhận được đơn hàng!</h1>
              <p>Vui lòng chở nhân viên tư vấn liên hệ cho quý khách . thankk.</p>
              <button onClick={() => router.push('/')}>Trang chủ</button>
              <button onClick={() => router.push('/Login')}>Quản lý đơn hàng</button>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }



  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <UserLog>
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

          </UserLog>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && (
              <div>Your cart is empty</div>
            )}

            {(products)?.length > 0 && (
              <>
                <Button onClick={handleClearCart}>Clear Cart</Button>
                <Table>
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>Product</th>
                      <th>About</th>
                      <th>Count</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((itemid) => {

                      return (
                        <tr key={itemid}>
                          <td>{itemid}</td>
                          <td>
                            <ProductImageBox>
                              <Image src={'/asset-trungthu/loaihop/41.png'} width={500} height={300} alt="" />
                            </ProductImageBox>
                          </td>
                          <td>{data.code[itemid + 1].name}</td>
                          <td>
                            <>
                              <Button
                                onClick={() => lessOfThisProduct(itemid)}>-</Button>
                              <QuantityLabel>
                                {cartProducts.filter(id => id === itemid).length}
                              </QuantityLabel>
                              <Button
                                onClick={() => moreOfThisProduct(itemid)}>+</Button></>
                          </td>
                          <td>
                            <p>{ }</p>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(cartProducts.filter(id => id === itemid).length * data.code[itemid].info[1]))}
                          </td>
                        </tr>
                      );


                    })}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>TOTAL:</td>
                      <td>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(total))}</td>
                    </tr>
                  </tbody>
                </Table>
              </>

            )}
          </Box>

        </ColumnsWrapper>
        {!!cartProducts?.length && (
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
              onClick={goToPayment}>
              Continue to payment
            </Button>
          </Box>
        )}
      </Center>
    </>
  );
}
