import styled from "styled-components";
import ProductBox from "@/components/ProductBox";
import data from '../pages/data/fakedata.json'

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function ProductsGrid() {
  console.log('[[ProductsGrid]]')

  return (
    <StyledProductsGrid>
     {/*  {(data.products).map((product,index) => {
        let lazy = false
        if(index < 10) {
          lazy = true
        }
        return(
          <ProductBox key={product.id} {...product} lazy={lazy} />
        )
      })} */}
      {(data.products).map((product,index) => (
         <ProductBox key={product.id} {...product} lazy={false} />
      ))}
    </StyledProductsGrid>
  );
}