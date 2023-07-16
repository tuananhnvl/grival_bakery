import Center from "@/components/compo-styles/Center";
import styled from "styled-components";
import Button from "@/components/compo-styles/Button";
import ButtonLink from "@/components/compo-styles/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import {memo,useContext,useCallback } from "react";
import {CartContext} from "@/components/CartContext";
import Image from "next/image";
import data from '.././pages/data/fakedata.json'
const Bg = styled.div`
  background-color: #222;
  color:#fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1rem;
  @media screen and (min-width: 768px) {
    font-size:2rem;
  }
`;
const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 50%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
 
  flex-direction: column;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;
const WrapperImage = styled.div`
  width:200px;
  height:200px;
  overflow:hidden;
  img {
    width:auto;-
    height:100%;
  }
`
const ButtonContext = (id) => {
  const { cartProducts,addProduct,checkPort } = useContext(CartContext);
//  console.log('ButtonContext',id)
  const addToCart = () => {
    addProduct(Number(id.id))
    console.log(id)
   };
   return (
   <>
   {/* <p>Cart:{JSON.stringify(cartProducts)}</p> */}
    <Button white onClick={addToCart}>
      <CartIcon />
      Add to cart
    </Button>
   </>
   )
}
const Product = ({ product}) => {

  console.log('re-render')

  return (
    <Column>
      <WrapperImage>
        <Image src={product.thumbnail} alt="Bánh trung thu n trứng" width={500} height={200} />
      </WrapperImage>
      <Title>{product.title}</Title>
      <Desc>{product.description}</Desc>
      <ButtonsWrapper>
        <ButtonLink href={'/product/' + product.id} outline={1} white={1}>
          Read more
        </ButtonLink>
        <ButtonContext id={product.id}/>
       
      </ButtonsWrapper>
    </Column>
  );
}

export default function Featured() {

  console.log('[[Featured]]');
/*   const handleAddToCart = useCallback((productId) => {
    
    console.log(productId)
    addProduct(productId);
  }, [addProduct]); */
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          {(data.products).slice(12, 20).map((product, index) => (
            <Product key={index} product={product} /* onAddToCart={handleAddToCart}  *//>
          ))}
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}