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
p:nth-child(n) {
    margin:10px 0;
    padding:0;
    font-family:"Play";
    font-weight:900;
}
p:nth-child(2) {

    font-weight:300;
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
    width:fit-content;
    margin-left:1.24vw;
    &:hover {
        background:red; 
    }

    span {
        font-size:1rem;
        font-family:"Play";
        color:var(--color-tittle);
        padding: 0rem 1rem 0.25rem 1rem;
    }
    h4 {
        font-size: 2.4rem;
        margin: 0;
        
    }
    p{
        margin: 0;
        color:var(--color-tittle);
        padding: 0 0 1rem 0;
    }

`
export const DivTd = styled.div`
    display:flex;
    justify-content: space-around;
   
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
`