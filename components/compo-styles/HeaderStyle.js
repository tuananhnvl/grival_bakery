

import styled from "styled-components";


export const Logo = styled.a`
 

  position: relative;
  z-index: 3;
`;
export const NavSpace = styled.div`
  display: flex;
  justify-content: space-between;
 
  background:gray;
`;
export const WarpperNav = styled.nav`

 
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width:42.042vw;
  max-height:100vh;
  padding: 50px;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
 
`;
export const MenuItem = styled.div`
 
  display: flex;
  flex-direction: column;
`
export const NavLink = styled.a`
  font-size: 4.2rem;
  font-weight: 500;
  line-height: 1;
  font-family: "Play";
  transition: opacity .2s;
  display: inline-block;
  margin-bottom: 1rem;
  color:#ffff;
  text-decoration:none;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
export const InfoCompany = styled.div`
  display:flex;
  border-top:1px solid white;
  margin-top:2rem;
`
export const LeftInfo =  styled.div`
  width:50%;
  color:white;
`
export const RightInfo =  styled.div`
  width:50%;
  display:flex;
  justify-content: end;
`
export const InfoLink =  styled.div`
  color:white;
  margin-left:1rem;
`
export const NavButton = styled.button`
  background-color: green;
  width: fit-content;
  height:  fit-content;
  border:0;
  top:50px;
  right:50px;
  color: white;
  cursor: pointer;
  position: fixed;
  z-index: 3;
  border-radius:50%;
  
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