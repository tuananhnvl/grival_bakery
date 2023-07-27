
'use-client'

import {useContext, useState,useRef,useEffect} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import Image from "next/image";
import { NavSpace, Logo, WarpperNav,MenuItem,InfoCompany,NavLink,LeftInfo,RightInfo,InfoLink,NavButton,MaskLock } from "@/components/compo-styles/HeaderStyle.js";
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
  </NavSpace>
  );
}