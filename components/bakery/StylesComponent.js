import styled from "styled-components";


export const WrapperTable = styled.div`
width: 100%;   
margin: 0 auto;
position:relative;
`
export const TableBanhLeIndex = styled.table`
width:100%;
margin-top: 50px;

`

export const RowBanhLe = styled.td`
height:42.222px;
padding:0 1rem;
&:nth-child(3) {
    text-align:center;
}
p:nth-child(n) {
    margin:10px 0;
    padding:0;
    font-family:"Play";
    font-weight:900;
}
p:nth-child(2) {

    font-weight:300;
}

@media (max-width:568px) {
   & {
    padding:0 !important;
   }
   & > p:nth-child(1){
    font-size: 12px !important;
    max-width: 142px;
   }
   & > p:nth-child(2){
    font-size: 10px !important;
   }
   &:nth-child(1) > p:nth-child(1){
    font-size: 10px !important;
   }
}
`
export const ThBanhLe = styled.th`
text-transform: uppercase;

`
export const TrBanhLe = styled.tr`
    border-bottom:1px solid gray;
    &:last-child {
        border-bottom:0px;
    }
    
  
`
export const TypeBanhLe = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    margin-left:1.24vw;
 
    span {
        font-size:1rem;
        font-family:"Play";
        color:var(--color-tittle);
        padding: 0rem 1rem 0.25rem 1rem;
    }
    h4 {
        font-size: 2.4rem;
        margin: 0;
        padding-top: 0;
    }
    p{
        margin: 0;
        color:var(--color-tittle);
        padding: 0 0 1rem 0;
    }
    @media (max-width:868px) {
        justify-content:center;
    }
    @media (max-width:568px) {
      & > h4 {
        font-size: 1.72rem;
    }
    }
`
export const DivTd = styled.div`
    display:flex;
    justify-content: space-around;
    flex-direction:row;

    button {
        width:fit-content;
        height:fit-content;
        background:none;
        border:none;
        font-style:italic;
        font-size:10px;
        max-width:90px;
        align-self: center;
        opacity:0.24;
    }
    button:hover {
        border: 1px solid var(--color-p);
        opacity:1;
    }
    @media (max-width:868px) {
        & {
            padding: 10px !important;
            flex-direction: column !important;
        }
        & > p {
            text-align:center;
        }
        & > p br {
            display:none !important;
        }
    }
    @media (max-width:568px) { 
        & > p {
            font-size:12px !important;
        }
        
    }
`