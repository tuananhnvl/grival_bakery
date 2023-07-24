import styled from "styled-components";
/* modal */
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


/* cart */
export const WrapperCart = styled.div`
max-width:1000px;
height:fit-content;
margin: 0 auto;
padding-bottom:500px;

`
export const LogoCart = styled.div`
    margin: 0 auto;
    position:relative;
    width:300px;
    padding: 2rem;

`
export const TableCart = styled.table`
    width:100%;
    th  {
        font-family: "Play";
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        text-transform: uppercase;
        border-bottom:3px solid #b2b2b2;
    }
`
export const TrCustom = styled.tr`
    td {
        border-right:1px solid green;
        text-align:center;
        margin-top:1rem;
    }
    th {
        border-right:1px solid green;
        text-align:center;
    }

`
export const SectionCompare = styled.div`

`
export const TitlePart = styled.div`
    &:after {
        content: "";
        top:50%;
        right:0;
        transform:translateY(-50%);
        width:90%;
        height:1px;
        background: #a5a5a5a1;
        position:absolute;
    }
    
    position:relative;
    width: 100%;
    padding: 20px 0;
    display:flex;
    h3 {
        margin:0;
        padding:1rem 1rem 1rem 0;
        background:var(--color-primary);
        z-index:5;
        color: black;
        text-transform: uppercase;
    }

`
export const TitleDetail = styled.div`
    width: 95%;
    height:fit-content;
   
 
    float:right;
`

export const Processbar = styled.div`

   
`

export const DivFixTam = styled.div`
position:relative;
height: 500px;
display:block;
width:100vw;
`
