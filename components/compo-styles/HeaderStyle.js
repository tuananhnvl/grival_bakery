

import styled from "styled-components";


export const Logo = styled.a`
 

position: relative;
    z-index: 10;

    margin: 42px 0 0 42px;
    width: 240px;
`;
export const NavSpace = styled.div`
  display: flex;
  justify-content: space-between;
 
  background:none;
`;
export const WarpperNav = styled.nav`
box-sizing: border-box;
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width:42.042vw;
  height:100vh;
  padding: 50px;
  background-color: var(--color-brodard);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width:868px) {
    & {

      width:72.042vw !important;
    }
  }
  @media (max-width:868px) {
    & {
      padding: 20px;
      width:95vw !important;
      justify-content: center !important;
    }
  }
`;
export const MenuItem = styled.div`
 
  display: flex;
  flex-direction: column;
`
export const NavLink = styled.a`
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 1;
  font-family: "Play";
  transition: opacity .2s;
  display: inline-block;
  margin-bottom: 1rem;
  color:#ffff;
  text-decoration:none;
  @media (min-width:868px) {
    padding:0;
  }
  @media (max-width:568px) {
    & {

      font-size: 2.4rem !important;
    }
  }
`;
export const InfoCompany = styled.div`
  display:flex;
  border-top:1px solid white;
  margin-top:2rem;
`
export const LeftInfo =  styled.div`
  width:50%;
  p{
    color:white;
  }
`
export const RightInfo =  styled.div`
  width:50%;
  display:flex;
  justify-content: end;
`
export const InfoLink =  styled.div`
  p{
    color:white;
  }
  margin-left:1rem;
`
export const NavButton = styled.button`
  background-color: #2c430cd6;
  width: 72px;
    height: 72px;

  border:0;
  top:50px;
  right:50px;
  color: white;
  cursor: pointer;
  position: fixed;
  z-index: 10;
 
  svg {
    transform:scale(1.39);
  }
  @media (max-width:568px) {
    & {
      top:24.42px !important;
      right:24.42px !important;
      width: 64px !important;
      height: 64px !important;
  
    }
  }
`;

export const MaskLock = styled.div`
  background:rgb(0,0,0,0);
  width:100vw;
  height:100vh;
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index: 9;
`;


/*

 @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
  
  @media screen and (min-width: 768px) {
    display: none;
  } */