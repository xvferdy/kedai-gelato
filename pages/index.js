import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Link from "next/link";

export default function Home() {
  const dummyProducts = [
    {
      name: "oreo",
      desc: " Lorem ipsum dolor sit amet consectetur at consectetur  t consectetur  t consectetur dipisicing el  Lorem ipsum dolor sit amet consectetur adipisicing el",
    },
    {
      name: "mocha",
      desc: " Lorem ipsumsectetur adipisicing el",
    },
    {
      name: "greentea",
      desc: " Lorem ipsum dolor s ipsum dolor sit amet consectetur adipisicing el",
    },
  ];

  return (
    <>
      <Head>
        <title>Kedai Gelato</title>
        <meta name="keyword" content="Ice Cream, Gelato" />
        <meta name="description" content="Buy your favourite ice cream" />
        <meta name="author" content="Berlianto Ferdynand Pongbubun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="home" className="home">
        <div className="title">
          <h1>Kedai Gelato</h1>
          <small>100% Natural</small>
          <h2>Products</h2>
        </div>
        <div className="container home__container">
          {dummyProducts.map((product) => (
            <div className={`home__product home__product--${product.name}`}>
              <div className="home__product-image">
                <Image
                  src="/assets/pr1.png"
                  width={200}
                  height={280}
                  alt="Ice Cream"
                />
              </div>
              <h3>{product.name}</h3>
              <span>⭒ ⭒ ⭒</span>
              <p>{product.desc}</p>
              <Link href="/product/1" passHref>
                <a className="btn btn--primary">See Details</a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
