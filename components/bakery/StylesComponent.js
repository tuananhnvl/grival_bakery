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
`
export const ThBanhLe = styled.th`
text-transform: uppercase;

`

export const TypeBanhLe = styled.div`
    display:flex;
    flex-direction: column;
    width:fit-content;
    &:hover {
        background:red; 
    }

    span {
        font-size:1rem;
        font-family:"Play";
    }
    h4 {
        font-size: 2rem;
        margin: 0;
    }
    p{
        margin: 10px;
    }


`