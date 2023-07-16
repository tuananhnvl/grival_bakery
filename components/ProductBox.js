import styled from "styled-components";
import Button from "@/components/compo-styles/Button";
import Image from "next/image";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

const ProductWrapper = styled.div`
  
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding:10px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow:hidden;

`;

const Title = styled(Link)`
  font-weight: normal;
  font-size:.9rem;
  color:inherit;
  text-decoration:none;
  margin:0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight:400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;

export default function ProductBox({id,title,thumbnail,price,lazy}) {
  const {addProduct} = useContext(CartContext);
  console.log('re-render^^')
  return (
    <ProductWrapper>
      <WhiteBox href={'/product/'+ id}>
          <Image src={thumbnail} alt="" width={200} height={100} priority={lazy}/>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={'/product/'+ id}>{title}</Title>
        <PriceRow>
          <Price>
            ${price}
          </Price>
          <Button block onClick={() => addProduct(id)} primary outline>
            Add to cartt
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}