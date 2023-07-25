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
    background:var(--color-primary);
    width: 72vw;
    height: fit-content;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    display:flex;
    padding:2rem;
    button {
        position: absolute;
        right:2rem;
        top:2rem;
        width:50px;
        height:50px;
        border: 1px solid var(--color-brodard);
        background:unset;
    }
`
export const ImgView = styled.div`
    width: 50%;
    height:100%;
`
export const DetailView = styled.div`
    width:50%;
    height:100%;

`

export const TitleBanh = styled.h2`
    color: var(--color-brodard);
    text-transform: uppercase;
    font-size:1.72rem;
    font-family:"Play";
    margin-bottom:0 ;
   
`
export const ContentBanh = styled.p`
    font-weight: normal;
    margin:0;
    max-width:86%;
`
export const MaBanh = styled.div`
    display:flex;
    flex-direction: column;

`
export const RowMaBanh = styled.div`
    display:flex;
    span:nth-child(1) {
        width: 10%;
    }
    span:nth-child(2) {
        width: 90%;
    }

`

/* cart */
export const WrapperCart = styled.div`
max-width:1000px;
height:fit-content;
margin: 0 auto;
padding:50px 10px 10px 10px;
`
export const LogoCart = styled.div`
    margin: 0 auto;
    position:relative;
    width:300px;
    padding: 2rem;

`
export const HeadCartTable = styled.div`
    width:100%;
    display:flex;
    padding: 1rem 0;
    border-bottom: 2px solid #a5a5a552;
    div:nth-child(1) {
        width:38%;
    }
    div:nth-child(2) {
        width:24%;
        text-align:center;
    }
    div:nth-child(3) {
        width:24%;
        text-align:center;
    }
    div:nth-child(4) {
        width:24%;
        text-align:center;
    }
`
export const TitList =  styled.div`
    color: var(--color-brodard);
    font-family: "Play";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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


export const DemoRow = styled.div`
    width:fit-content;
    height:30px;
    background:blue;
`


export const TagTypeproducts = styled.div`
position:relative;
width: 100%;
padding: 10px 0;
display:block;

&:after {
    content: "";
    top:50%;
    right:0;
    transform:translateY(-50%);
    width:86%;
    height:1px;
    background: #a5a5a5a1;
    position:absolute;
}
h3 {
    margin:0;
    padding:1rem 1rem 1rem 0;
    color:var(--color-p);
    z-index:5;
    font-family:"Play";   
   
}
`

export const ListItemProducts = styled.div`
    width: 100%;
    height:fit-content;
    display:flex;
    flex-direction: column;
    align-items: self-end;
    * {
    line-height: 120%;
    }
`
export const WrapperItemProducts = styled.div`
height: 79px; 
margin-top: 10px; 
width: 95%; 
display: flex; 

box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
export const ItemProducts1 = styled.div`
width: 29.82%; 
align-self: center;
p {
    margin: 0;
    padding: 5px 0 0px 24px;
}
p:nth-child(1) {
    font-weight: bold;
    font-family: 'Play';
}
p:nth-child(2) {
    font-size: 0.8rem;
    font-style: italic;
}

`
export const ItemProducts2 = styled.div`
width: 23.72%; text-align: center; align-self: center;
`
export const ItemProducts3 = styled.div`
width: 23.72%; text-align: center; display: flex; align-self: center;
div{
    display: flex; margin: auto;align-self: center;
}
button {
    border: none; outline: none; background: unset; font-family: Jose; font-size: 24px;
}
p{
    font-size:1.24rem;
    width: 30px;
}
`
export const ItemProducts4 = styled.div`
display: flex; margin: auto;
`