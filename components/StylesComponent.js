import styled from "styled-components";

export const WarrperModal = styled.div`
z-index: 100;
position: fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background:rgb(0,0,0,0.5);
`

export const ModalView = styled.div`
    z-index: 100;
    position:absolute;
    background:white;
    width: 72vw;
    height: fit-content;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    display:flex;
    padding:2rem;
`
export const ImgView = styled.div`
    width: 42%;
    height:100%;
`
export const DetailView = styled.div`
    width:50%;
    height:100%;

`

export const TitleBanh = styled.h2`
   
`
export const ContentBanh = styled.p`
`
export const MaBanh = styled.div`
    display:flex;
    flex-direction: column;

`