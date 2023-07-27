
import Header from "@/components/Header";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"
import { LogoCart, WrapperCart,  WrapperItemProducts, ItemProducts1, ItemProducts2, ItemProducts3, ItemProducts4, ListItemProducts, TagTypeproducts, HeadCartTable, TitList,EmptyCartView } from '@/components/StylesComponent.js'
import CartIcon from '@/components/asset/cartIcon'
import data from '@/pages/data/brodard.json'
import Star from '@/components/asset/Star.js'
import ButtonMore from "@/components/bakery/ButtonMore";
export default function CartPage() {
  console.log('[[CartPage]]');
  const { data: session } = useSession()
  const [products, setProducts] = useState({ "banhle": [], "combo": [] , "hop" : [] });
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);

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

  function handleClearCart() {
    clearCart();
    setProducts()
  }


  useEffect(() => {

    if (cartProducts.length > 0) {

      const uniqueProducts = Array.from(new Set(cartProducts));
      const updatedProducts = { "banhle": [], "combo": [], "hop" : [] };

      uniqueProducts.forEach((num) => {
        if (num < 41) {
          updatedProducts.banhle.push(num);
        } else if(num > 41 && num < 50){
          updatedProducts.combo.push(num);
        } else if(num > 50){
          updatedProducts.hop.push(num);
        }
      });

      setProducts(updatedProducts);
      console.log(products)

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
    addProduct(id, 1);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }



  let total = 0;
  let setPrice = 0
  for (const productId of cartProducts) {
    if (productId > 40) {
      setPrice = data.code.find(p => (p.idb) === productId)?.price || 0;
    } else {
      setPrice = data.code.find(p => (p.idb) === productId)?.info[1] || 0;
    }

    total += setPrice;
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

      <Header />
      <WrapperCart>
        <LogoCart>
          <Image src="logo-brodard.png" alt="Logo Brodrad" width={0} height={0} style={{ width: '100%', height: 'auto' }} />
        </LogoCart>





        {!cartProducts?.length ? (
          <EmptyCartView>
 
            <div className="svg">
              <CartIcon position={'relative'} width={100} height={70}/>
            </div>
            <span>Giỏ hàng trống</span>
            <a href={process.env.NEXT_PUBLIC_DOMAIN_HOST}>Trang chủ</a>
          </EmptyCartView>
        ) : (
          <>


            <HeadCartTable>
              <TitList>Thông tin giỏ hàng</TitList>
              <TitList>Đơn giá</TitList>
              <TitList>Số lượng</TitList>
              <TitList>Tổng</TitList>
            </HeadCartTable>
            {products["combo"].length > 0 ? (
              <>
                <TagTypeproducts>
                  <Star left={'-20px'} top={'56%'} translate={'translateY(-50%)'} />
                  <h3>Combo Bánh</h3>
                </TagTypeproducts>

                <ListItemProducts>
                  {Array.isArray(products["combo"]) ? products["combo"].map((idb, index) => {
                    return (
                      <WrapperItemProducts key={index}>
                        <ItemProducts1><p>{data.code[idb - 1].name}</p><p>{data.code[idb - 1].namee}</p></ItemProducts1>
                        <ItemProducts2><p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(data.code[idb - 1].price))}</p></ItemProducts2>
                        <ItemProducts3>
                          <div>
                            <button onClick={() => lessOfThisProduct(idb)}>-</button>
                            <p>{cartProducts.filter(id => id === idb).length}</p>
                            <button onClick={() => moreOfThisProduct(idb)}>+</button>
                          </div>
                        </ItemProducts3>
                        <ItemProducts4><p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(cartProducts.filter(id => id === idb).length * data.code[idb - 1].price))}</p></ItemProducts4>
                      </WrapperItemProducts>
                    )
                  }) : null}


                </ListItemProducts>
              </>
            ) : (
              null
            )}
            {products["banhle"].length > 0 ? (
              <>
                <TagTypeproducts>
                  <Star left={'-20px'} top={'56%'} translate={'translateY(-50%)'} />
                  <h3>Bánh Lẻ</h3>
                </TagTypeproducts>

                <ListItemProducts>
                  {Array.isArray(products["banhle"]) ? products["banhle"].map((idb, index) => {
                    return (
                      <WrapperItemProducts key={index}>
                        <ItemProducts1><p>{data.code[idb - 1].name}</p><p>{data.code[idb - 1].namee}</p></ItemProducts1>
                        <ItemProducts2><p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(data.code[idb - 1].info[1]))}</p></ItemProducts2>
                        <ItemProducts3>
                          <div>
                            <button onClick={() => lessOfThisProduct(idb)}>-</button>
                            <p>{cartProducts.filter(id => id === idb).length}</p>
                            <button onClick={() => moreOfThisProduct(idb)}>+</button>
                          </div>
                        </ItemProducts3>
                        <ItemProducts4><p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(cartProducts.filter(id => id === idb).length * data.code[idb - 1].info[1]))}</p></ItemProducts4>
                      </WrapperItemProducts>
                    )
                  }) : null}


                </ListItemProducts>
              </>
            ) : (
              null
            )}
            {products["hop"].length > 0 ? (
              <>
                <TagTypeproducts>
                  <Star left={'-20px'} top={'56%'} translate={'translateY(-50%)'} />
                  <h3>Hộp Bánh</h3>
                </TagTypeproducts>

                <ListItemProducts>
                  {Array.isArray(products["hop"]) ? products["hop"].map((idb, index) => {
                    return (
                      <WrapperItemProducts key={index}>
                        <ItemProducts1><p>{data.code[idb - 1].name}</p><p>{data.code[idb - 1].namee}</p></ItemProducts1>
                        <ItemProducts2><p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(data.code[idb - 1].price))}</p></ItemProducts2>
                        <ItemProducts3>
                          <div>
                            <button onClick={() => lessOfThisProduct(idb)}>-</button>
                            <p>{cartProducts.filter(id => id === idb).length}</p>
                            <button onClick={() => moreOfThisProduct(idb)}>+</button>
                          </div>
                        </ItemProducts3>
                        <ItemProducts4><p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(cartProducts.filter(id => id === idb).length * data.code[idb - 1].price))}</p></ItemProducts4>
                      </WrapperItemProducts>
                    )
                  }) : null}


                </ListItemProducts>
              </>
            ) : (
              null
            )}



            <div style={{ width: "100%", position: 'relative', height: '200px', pointerEvents: "none" }}></div>
            <div className="processbar">
              <div className="detail">
                <h4>Tổng đơn hàng : {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(total))}</h4>
                <div className="btngr">
                  <button onClick={handleClearCart}>Xóa giỏ hàng</button>
                  <ButtonMore id={'checkout'}>Đặt hàng</ButtonMore>
                  <button>Xuất báo giá</button>
                </div>
              </div>

            </div>
          </>
        )}





      </WrapperCart>
    </main>
  );
}
