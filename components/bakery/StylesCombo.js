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

height: fit-content;

&:last-child {
    border-bottom:0px;
}
@media (max-width:568px) {
    & {
        padding: 10px 0 !important;
display: block;

    }
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
        max-width: 95%;
        font-family:"Play";
    }
    & > div {
        display:flex;
        flex-direction: row;
    }
    & > div button {
        width:150px;
        height:fit-content;
        background:none;
        border:none;
        font-style:italic;
        font-size:10px;
        max-width:90px;
        align-self: center;
        display:block;
        margin: 0 auto;
       
    }
    & > div b button:hover {
  
    }
    @media (max-width:568px) {

        & {
            padding: 0 !important;
        }
        & > h4 {
            font-size:1rem !important;
            max-width: 130px;
            padding: 10px 0!important;
      
        }
        & > p {
            font-size:12px !important;
            font-weight:normal !important;
            padding:0 0 10px 0 !important;
        
        }
        & > div {
            flex-direction: column !important
        }
        & > div > button:nth-child(1) {
            margin:0 0 10px auto !important;
        
        }
        & > div > button:nth-child(2) {
            margin:0 0 0 auto !important;
          
        }
      
    }

`