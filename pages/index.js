import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { stagger, fadeInUp } from "../utils/motion";
import { motion } from "framer-motion";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Kedai Gelato</title>
        <meta name="keyword" content="Ice Cream, Gelato, Kedai" />
        <meta name="description" content="Buy your favourite ice cream" />
        <meta name="author" content="Berlianto Ferdynand Pongbubun" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <motion.section
        id="home"
        className="home"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
      >
        <div className="title">
          <h1>Kedai Gelato</h1>
          <p>100% Modern Taste!</p>
          <h2>Products</h2>
        </div>
        <motion.div className="container home__container" variants={stagger}>
          {products.map((product, idx) => (
            <motion.div
              key={product._id}
              className={` home__product--${product.class}`}
              variants={fadeInUp}
            >
              <div className="home__product-image">
                <Image
                  src={product.img}
                  width={200}
                  height={280}
                  alt={product.title}
                />
              </div>
              <h3>{product.title.toUpperCase()}</h3>
              <span>⭒ ⭒ ⭒</span>
              <p>
                {product.desc.length > 135
                  ? product.desc.slice(0, 135) + "..."
                  : product.desc}
              </p>
              <Link href={`/product/${product._id}`} passHref>
                <a className="btn btn--primary">See Details</a>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const res = await fetch(
    "https://kedai-gelato-xvferdy.vercel.app/api/products"
  );
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
