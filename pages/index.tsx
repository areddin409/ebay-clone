import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Ebay Clone</title>
        <link rel='icon' href='/eBay.png' />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
