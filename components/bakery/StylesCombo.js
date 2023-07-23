import styled from "styled-components";
export const TableCombo = styled.table`
    tbody tr {
        transition: opacity 0.3s ease;
    }
    
    tbody tr:hover {
        opacity: 1; 
       
    }
    
    tbody:hover tr:not(:hover) {
        opacity: 0.142; 
       
    }
`
export const TBCombo = styled.tbody`


`
export const TRCombo = styled.tr`
  
  
`
export const TDCombo = styled.td`
    padding: 1rem 0;
    h4 {
        margin: 0;
    }
    p{
        margin: 0;
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
        opacity:0.24;
    }
    button:hover {
        border: 1px solid var(--color-p);
        opacity:1;
    }

`