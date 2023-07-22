import Header from "@/components/Header";
import Head from "next/head";
import Center from "@/components/compo-styles/Center";
import Title from "@/components/compo-styles/Title";
import dynamic from "next/dynamic";


export default function ProductsPage() {
  console.log('[[ProductsPage]]')

  const ProductsGrid = dynamic(() => import("../components/ProductsGrid"), {
    loading: () => <p>Loading...</p>,
  });
 
  return (
    <>
      <Head>
        <title>Tổng hợp sản phẩm bánh trung thu Grival 2023</title>
        <meta
          name="description"
          content="Nhà cung cấp bánh trung thu tại Sài Gòn || Since 1991."
          key="desc"
        />
         <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_DOMAIN_HOST}/products`}
          key="canonical"
        />
      </Head>
      <Header />
      <Center>
        <Title>All products</Title>
       
        <ProductsGrid  />
      </Center>
    </>
  );
}

/* export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
} */

/* export async function getStaticProps() {
  const db = await myDB.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  })
  // ...
} */