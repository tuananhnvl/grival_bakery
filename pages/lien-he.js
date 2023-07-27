'use client';
import { useState } from 'react'

import Image from 'next/image'
import Header from '@/components/Header'
import styles from '@/styles/Contact.module.css'
import data from '@/pages/data/brodard.json'
import Star from '@/components/asset/Star.js'
import { db } from '../firebase.config.js';
import PattentVintage from '@/components/asset/PattentVintage.js'
import { collection, addDoc } from 'firebase/firestore';
import Head from 'next/head'
import { useRouter } from "next/router";
export default function contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [luuy, setLuuy] = useState('');

    const [isSuccess, setIsSuccess] = useState(false);
    const dbInstance = collection(db, 'list-customer');
    const router = useRouter()
    const dataContent = data.content

    function sendToMail(data) {

        fetch("/api/nodemailer", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                phone: data.phone,
                luuy: data.luuy,
                cart: ['------tu van--------']
            }),
        }).then((res) => {
            // console.log("Fetch: ", res);
            res.status === 200
            addDoc(dbInstance, {
                name: data.name,
                email: data.email,
                phone: data.phone,
                luuy: data.luuy,
                cart: ['------tu van--------']
            })
            setIsSuccess(true)
            setTimeout(() => {
                //setIsSuccess(false) 
                router.push('/')
            }, 4200);
        })
    }



    async function onCheckOut(event) {
        event.preventDefault();
        /*    alert(['onCheckOut',
             name, email, phone, luuy,
             cartProducts,]
           )  */
        let b = {
            name: name,
            email: email,
            phone: phone,
            luuy: luuy,
            cart: ['------tu van--------']
        }
        sendToMail(b)
    }



    return (
        <main style={{ backgroundColor: 'var(--color-primary)' }} id='contact-page'>
            <Head>

                <title>Liên hệ - Bánh trung thu Brodard 2023</title>
                <meta
                    name="description"
                    content="Liên hệ - Nhà phân phối bánh trung thu Brodard tại Sài Gòn || Since 1991"
                    key="desc"
                />
                <link
                    rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_DOMAIN_HOST}`}
                    key="canonical"
                />
                <link rel="icon" type="image/x-icon" href="https://brodardbakery1948.com/logo-brodard.png"></link>
                <meta property="og:title" content="Liên hệ - Nhà phân phối bánh trung thu Brodard tại Sài Gòn || Since 1991" />
                <meta property="og:type" content="" />
                <meta property="og:url" content="https://brodardbakery1948.com" />
                <meta property="og:image" content="https://brodardbakery1948.com/logo-brodard.png" />
            </Head>
            <Header />
            <div className={styles.contact}>
                <div className={styles.custominfo}>

                    <div>
                        <span><Image src={'logo-brodard.png'} alt='' width={0} height={0} style={{ width: '100%', height: 'auto' }} /></span>
                        <PattentVintage top={0} right={0} rotate={'rotate(270deg)'} />
                        <PattentVintage top={0} left={0} rotate={'rotate(180deg)'} />
                        <PattentVintage bottom={0} right={0} rotate={'rotate(0deg)'} />
                        <PattentVintage bottom={0} left={0} rotate={'rotate(90deg)'} />
                        {Array.isArray(dataContent) ? dataContent.map((item, index) => {
                            if (index == 2) {
                                return (
                                    <>
                                        <p className={styles.contentStyle} key={index}>{item}</p>
                                        <Star position={'relative'} />
                                    </>
                                )
                            } else {
                                return (
                                    <p className={styles.contentStyle} key={index}>{item}</p>
                                )
                            }

                        }) : null}
                    </div>

                </div>
                <div className={styles.detailcontact}>
                    <div>
                        <div>
                            <span>
                                <Star left={'10%'} top={'40%'} translate={'translateY(-50%)'} />
                                <h2>Hotline</h2>
                                <Star right={'10%'} top={'40%'} translate={'translateY(-50%)'} />
                            </span>

                            <a>093.528.9747</a>
                        </div>
                        <h2>THÔNG TIN KHÁCH HÀNG</h2>
                        <Image style={{ margin: '0 auto', display: 'block' }} src={'asset-trungthu/hoatiet/h7.svg'} alt="" width={100} height={20} />
                        <form className={styles.formPrimary}>
                            <table>

                                <tbody>
                                    <tr>
                                        <td width="40%"><label for="first">Tên khách hàng</label></td>
                                        <td width="60%"><input onChange={ev => setName(ev.target.value)} type="text" id="name" name="name" /></td>
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
                                        <td width="100%" colSpan={2}><label for="first">Nội dung tư vấn</label></td>

                                    </tr>
                                    <tr>

                                        <td width="100%" colSpan={2}><textarea onChange={ev => setLuuy(ev.target.value)} type="text" id="more" name="more" /></td>
                                    </tr>
                                </tbody>
                            </table>

                            <button type="submit" onClick={(event) => onCheckOut(event)}>Hẹn tư vấn</button>
                        </form>



                    </div>
                </div>
                {isSuccess === true ? (
                    <div id='modal-space'>
                        <div id='modal-checkout'>
                            <h1>Chúng tôi đã nhận được thông tin!</h1>
                            <p>Vui lòng đợi nhân viên tư vấn liên hệ cho Quý khách. Xin cảm ơn!</p>
                            <div className={styles.formPrimary}>
                                <button onClick={() => router.push('/')}>Trang chủ</button>
                                {/* <button onClick={() => router.push('/Login')}>Quản lý đơn hàng</button> */}
                            </div>
                        </div>
                    </div>
                ) : (null)}
            </div>
        </main>
    )
}

