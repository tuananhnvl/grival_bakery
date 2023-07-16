
import Header from "@/components/Header";
import Title from "@/components/compo-styles/Title";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";

import WhiteBox from "@/components/compo-styles/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/compo-styles/Button";
import CartIcon from "@/components/icons/CartIcon";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";
import {Suspense} from 'react'
import ProductDetail from "@/components/ProductDetail";
import dynamic from "next/dynamic";
import Head from 'next/head'
import data from '.././data/fakedata.json'
export default function ProductPage({id}) {
  const idProduct = Number(id.id)
 
  return (
    <>
      <Head>
        <title>Sản phẩm : {data.products[idProduct]['title']}</title>
        <meta
          name="description"
          content="Nhà cung cấp bánh trung thu tại Sài Gòn || Since 1991."
          key="desc"
        />
         <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_DOMAIN_HOST}/products/${idProduct}`}
          key="canonical"
        />
      </Head>
      <Header />
      <ProductDetail idProduct={idProduct} images={data.products[idProduct].images}/>
    </>
  );
}

export async function getServerSideProps(context) {
  //await mongooseConnect();
 
  return {
    props: {
      id: context.query,
    }
  }
  /* const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  } */
}