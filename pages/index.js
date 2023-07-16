import Header from "@/components/Header";
import Head from 'next/head';
//import Featured from "@/components/Featured";


import dynamic from "next/dynamic";

export default function HomePage() {
 const Featured = dynamic(() => import("@/components/Featured"),{
  ssr : false,
  loading: () => <div>Loading...</div>
 });
  return (
    <>
      <Head>
        <title>Home Page - Bánh trung thu Grival</title>
        <meta
          name="description"
          content="Nhà cung cấp bánh trung thu tại Sài Gòn || Since 1991."
          key="desc"
        />
         <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_DOMAIN_HOST}`}
          key="canonical"
        />
      </Head>
      <Header />
      <Featured />
     
     {/*  <NewProducts products={dataProducts} /> */}
    </>
  );
}

/* export async function getServerSideProps() {
  const featuredProductId = '640de2b12aa291ebdf213d48';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
} */