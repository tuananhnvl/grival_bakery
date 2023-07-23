import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.content}>
            <div>
                <Image src={'logo-brodard.png'} alt='' width={0} height={0} style={{ width: '50%', height: 'auto' }} />
                <ul>
                    <li><p>66 Vo Thi Sau, Quan 1</p></li>
                    <li><p>093 538 9747</p></li>
                    <li><p>zalo</p></li>
                    <li><p>vphcm@brodardbakery.com</p></li>
                </ul>
            </div>
            <div>
                <div className={styles.menutreo}>
                    <ul>
                        <li><button>Bánh lẻ</button></li>
                        <li><button>Combo</button></li>
                        <li><button>Hộp</button></li>
                        <li><button>Chính sách và Thanh toán</button></li>
                        <li><button>Giỏ hàng</button></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.more}>
                ALL RIGHTS RESERVED
        </div>
    </div>
  )
}
