"use client"
import { TitlePart, TitleDetail, Processbar, Lasao } from './StylesComponent.js'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import data from '@/pages/data/brodard.json'
import Link from 'next/link.js';



export default function CartTable() {
    const [products, setProducts] = useState({ "banhle": [], "combo": [] });
    const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);

    useEffect(() => {

        if (cartProducts.length > 0) {

            const uniqueProducts = Array.from(new Set(cartProducts));
            const updatedProducts = { "banhle": [], "combo": [] };

            uniqueProducts.forEach((num) => {
                if (num < 40) {
                    updatedProducts.banhle.push(num);
                } else {
                    updatedProducts.combo.push(num);
                }
            });

            setProducts(updatedProducts);

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
        <>
            {!cartProducts?.length ? (
                <>
                    <div>Giỏ hàng trống</div>
                    <a href={process.env.NEXT_PUBLIC_DOMAIN_HOST}>Home</a>
                </>
            ) : (
                <>
                  

                    {products["combo"].length > 0 ? (
                        <>
                            <div className='typeitemcart'>
                                <h3>Combo Bánh</h3>
                            </div>

                            <div className='listitemcart'>
                                <>
                                    {Array.isArray(products["combo"]) ? products["combo"].map((idb, index) => {
                                        return (
                                            <div className='itemoncart' key={index}>
                                                <div className='itemoncarti1'><p>{data.code[idb - 1].name}</p><p>{data.code[idb - 1].namee}</p></div>
                                                <div className='itemoncarti2'><p>{data.code[idb - 1].price}</p></div>
                                                <div className='itemoncarti3'>
                                                    <div className='itemoncarti3child'>
                                                        <button onClick={() => lessOfThisProduct(idb)}>-</button>
                                                        <p>{cartProducts.filter(id => id === idb).length}</p>
                                                        <button onClick={() => moreOfThisProduct(idb)}>+</button>
                                                    </div>
                                                </div>
                                                <div className='itemoncarti4'><p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(cartProducts.filter(id => id === idb).length * data.code[idb - 1].price))}</p></div>
                                            </div>
                                        )
                                    }) : null}
                                </>


                            </div>
                        </>
                    ) : (
                        null
                    )}


                  {/*   {products["banhle"].length > 0 ? (
                        <>
                            <div className='typeitemcart'>
                                <h3>Bánh lẻ</h3>
                            </div>

                            <div className='listitemcart'>
                                <>
                                    {Array.isArray(products["banhle"]) ? products["banhle"].map((idb, index) => {
                                        return (
                                            <div className='itemoncart' key={index}>
                                               <div className='itemoncarti1'><p>{data.code[idb - 1].name}</p><p>{data.code[idb - 1].namee}</p></div>
                                                <div className='itemoncarti2'><p>{data.code[idb - 1].info[1]}</p></div>
                                                <div className='itemoncarti3'>
                                                    <div className='itemoncarti3child'>
                                                        <button onClick={() => lessOfThisProduct(idb)}>-</button>
                                                        <p>{cartProducts.filter(id => id === idb).length}</p>
                                                        <button onClick={() => moreOfThisProduct(idb)}>+</button>
                                                    </div>
                                                </div>
                                                <div className='itemoncarti4'><p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(cartProducts.filter(id => id === idb).length * data.code[idb - 1].info[1]))}</p></div>
                                            </div>
                                        )
                                    }) : null}
                                </>


                            </div>
                        </>
                    ) : (
                        null
                    )} */}
               <div className="processbar">
                        <div className="detail">
                            <h4>Tổng đơn hàng : {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(total))}</h4>
                            <div className="btngr">
                                <button>Đặt hàng</button>
                                <button>Xuất báo giá</button>
                            </div>
                        </div>

                    </div>
                </>
            )}



          
        </>
    )


}
