
import Center from "@/components/compo-styles/Center";
import WhiteBox from "@/components/compo-styles/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/compo-styles/Button";
import CartIcon from "@/components/icons/CartIcon";
import Title from "@/components/compo-styles/Title";
import data from './fakedata.json'
import { CartContext } from "@/components/CartContext";
import styled from "styled-components";
import { useContext } from "react";
import dynamic from "next/dynamic";
const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

export default function ProductDetail({ idProduct, images }) {
    //    / const ProductImages = dynamic(() => import("@/components/ProductImages"));
    const { addProduct } = useContext(CartContext);


    return (
        <Center>
            <ColWrapper>

                <WhiteBox>
                    <ProductImages images={images} />
                </WhiteBox>
                <WhiteBox>
                    <Title>{data.products[idProduct].title}</Title>
                    <p>{data.products[idProduct].description}</p>
                    <PriceRow>
                        <Price>${data.products[idProduct].price}</Price>
                        <Button primary onClick={() => addProduct(Number(idProduct))}>
                            <CartIcon />Add to cart
                        </Button>

                    </PriceRow>
                </WhiteBox>
            </ColWrapper>
        </Center>
    )
}
