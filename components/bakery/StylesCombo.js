import styled from "styled-components";
export const TableCombo = styled.table`
    tbody tr {
        transition: opacity 0.3s ease;
    }
    
    tbody tr:hover {
        opacity: 1; 
       
    }
    
    tbody:hover tr:not(:hover) {
        opacity: 0.42; 
       
    }
`
export const TBCombo = styled.tbody`


`
export const TRCombo = styled.tr`
border-bottom:1px solid gray;
&:last-child {
    border-bottom:0px;
}
  
`
export const TDCombo = styled.td`
    padding: 1rem 0;
    h4 {
        margin: 0;
        font-size: 1.2rem;
        padding-bottom: 0;
    }
    p{
        margin: 0;
  
        font-family:"Play";
    }
    button {
        width:fit-content;
        height:fit-content;
        background:none;
        border:none;
        font-style:italic;
        font-size:10px;
        max-width:90px;
        align-self: center;
       
    }
    button:hover {
  
    }

`