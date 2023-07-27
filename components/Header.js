
'use-client'

import {useContext, useState,useRef,useEffect} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import Image from "next/image";
import { NavSpace, Logo, WarpperNav,MenuItem,InfoCompany,NavLink,LeftInfo,RightInfo,InfoLink,NavButton,MaskLock,PhoneIc } from "@/components/compo-styles/HeaderStyle.js";
import { gsap } from "gsap";
import Policy from "@/pages/chinhsach-thanhtoan";
export default function Header() {
  console.log('Header')
 const {cartProducts} = useContext(CartContext);
 const [navIsOpen, setNavIsOpen] = useState(false);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  const animNav = useRef(null);
  const warperNavRef = useRef(null)
  const navSpaceRef = useRef(null)
  const iconNavRef = useRef(null)
  const maskLockRef = useRef(null)

  useEffect(() => {
    animNav.current = gsap.timeline({})
      .to(warperNavRef.current, {
        right: 0
      })
      .to(iconNavRef.current,{
        rotate:180
      },"<")
      .to(maskLockRef.current,{
        backgroundColor: "rgb(0,0,0,0.5)",
        pointerEvents:"auto"
      },"<")
      .reverse();
    return () => {
      animNav.current.kill();
    };
  }, [NavSpace]);

  useEffect(() => {
    animNav.current.reversed(!mobileNavActive);
  }, [mobileNavActive]);


  return (
    <NavSpace ref={navSpaceRef}>
    {/*   <Logo href={'/'}>
        <Image src="logo-brodard.png" alt="Logo Brodrad"   width={0} height={0} style={{ width: '100%', height: 'auto' }}  />
      </Logo> */}
      <MaskLock ref={maskLockRef} style={{pointerEvents:'none'}}/>
      <WarpperNav ref={warperNavRef} style={{right:"-100%"}}>
          <MenuItem >
            <NavLink  href={'/'}>Trang chủ</NavLink>
            <NavLink  href={'/gio-hang'}>Giỏ hàng ({cartProducts.length})</NavLink>
           {/*  <NavLink  href={'/chinhsach-thanhtoan'}>Chính sách và TT</NavLink> */}
            <NavLink  href={'/lien-he'}>Liên hệ</NavLink>
          </MenuItem>
          <InfoCompany>
            <LeftInfo>
              <p>ALL RIGHTS RESERVED</p>
            </LeftInfo>
            <RightInfo>
              <InfoLink href={'/'}><p>Zalo</p></InfoLink>
           {/*    <InfoLink href={'/'}><p>Facebook</p></InfoLink> */}
              <InfoLink href={'/'}><p>Phone</p></InfoLink>
            </RightInfo>
          </InfoCompany>
      </WarpperNav>
      <NavButton onClick={() => setMobileNavActive(!mobileNavActive)} >
        <svg
          ref={iconNavRef}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
              fill="#fff"
            />
          </svg>
      </NavButton>
      <PhoneIc href="tel:0785777768">
        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.04 70.7">
          
          <g id="">
            <g>
              <path style={{fill:'white'}} d="m22.08,30.62l2.13-2.36c1.76-1.95,2.66-4.46,2.52-7.08-.13-2.62-1.27-5.03-3.22-6.79l-3.6-3.26c-1.81-1.64-4.15-2.54-6.58-2.54-2.77,0-5.43,1.18-7.29,3.23l-2.14,2.36c-.27.3-.54.63-.78.99l-.1.11c-2.02,1.72-3.73,5.92-2.74,11.06,4.59,23.9,24.72,42.11,48.97,44.29,3.18.29,6.17-.37,8.44-1.76.91-.53,1.71-1.17,2.4-1.93l2.14-2.36c3.63-4.02,3.32-10.24-.7-13.87l-3.6-3.26c-1.81-1.64-4.15-2.54-6.58-2.54-2.77,0-5.43,1.18-7.28,3.23l-2.14,2.36c-.91,1.01-1.59,2.17-2.02,3.45l-.19.57-.56-.22c-9.53-3.76-17.29-10.89-21.86-20.06l-.3-.61.65-.2c1.71-.51,3.24-1.49,4.45-2.82Z"/>
              <path style={{fill:'white'}}  d="m34.07,2.29c0,1.26,1.02,2.29,2.29,2.29,16.05,0,29.1,13.05,29.1,29.1,0,1.26,1.02,2.29,2.29,2.29s2.29-1.02,2.29-2.29C70.04,15.11,54.93,0,36.36,0c-1.26,0-2.29,1.03-2.29,2.29Z"/>
              <path style={{fill:'white'}} d="m33.7,13.49c0,1.26,1.02,2.29,2.29,2.29,10.07,0,18.27,8.19,18.27,18.27,0,1.26,1.03,2.29,2.29,2.29s2.29-1.02,2.29-2.29c0-12.6-10.25-22.84-22.85-22.84-1.26,0-2.29,1.02-2.29,2.29Z"/>
            </g>
          </g>
        </svg>
      </PhoneIc>
  </NavSpace>
  );
}