import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kedai Gelato</title>
        <meta name="keyword" content="Ice Cream, Gelato" />
        <meta name="description" content="Buy your favourite ice cream" />
        <meta name="author" content="Berlianto Ferdynand Pongbubun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="title">
          <h1>Kedai Gelato</h1>
          <small>100% Natural</small>
          <h2>Products</h2>
        </div>
        <div className="container">
          <h3>Ice Cream</h3>
          <span>✪ ✪ ✪</span>
          <h3>Oreo Ice cream</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus necessitatibus ipsa veniam quo cum quos unde animi
            nostrum facilis? Iure sunt dolorem assumenda, non vel vero tempore
            et voluptates repudiandae.
          </p>
          <Link href="/product/1" passHref>
            <a>See Details</a>
          </Link>
        </div>
      </section>
    </>
  );
}
