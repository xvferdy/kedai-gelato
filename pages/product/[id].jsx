import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";

import { MdOutlineIcecream } from "react-icons/md";

import Badge from "@mui/material/Badge";
import { useSnackbar } from "notistack";

import { addProduct } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];
const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
const fadeInUp = {
  hidden: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

function Product({ product }) {
  const [prizeSize, setPrizeSize] = useState(product.prices[0].price);
  const [prizeTopping, setPrizeTopping] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const [priceTotal, setPriceTotal] = useState(product.prices[0].price);
  const [priceTotalNonQty, setPriceTotalNonQty] = useState(
    product.prices[0].price
  );
  let dollarUSLocale = Intl.NumberFormat("en-US");
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  useEffect(() => {
    setPriceTotal((prizeSize + prizeTopping) * quantity);
  }, [prizeSize, prizeTopping, quantity]);
  useEffect(() => {
    setPriceTotalNonQty(prizeSize + prizeTopping);
  }, [prizeSize, prizeTopping]);

  const handleAddProduct = (variant) => {
    if (quantity <= 0 || quantity.toString().includes(".")) {
      return enqueueSnackbar("Failed to add to cart", { variant });
    }
    dispatch(
      addProduct({
        ...product,
        priceTotalNonQty,
        quantity,
        extras,
        reduxId:
          cart.products.length !== 0
            ? cart.products[cart.products.length - 1].reduxId + 1
            : 1,
      })
    );
    enqueueSnackbar("Successfully added to the cart", { variant });
  };

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="keyword" content="Ice Cream, Gelato, Kedai" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <motion.section className="product" initial="hidden" animate="visible">
        <div className="title">
          {/* <h2>Details</h2> */}
          {/* <h2>Product Details</h2> */}
        </div>
        <div className="container product__container">
          <motion.div
            className="product__showcase"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Image src={product.img} width={500} height={700} alt="name" />
          </motion.div>
          <motion.div className="product__details" variants={stagger}>
            <motion.h2 className="product__details-name" variants={fadeInUp}>
              {product.title.toUpperCase()}
            </motion.h2>
            <motion.p
              className="product__details-description"
              variants={fadeInUp}
            >
              ❝{product.desc}❞
            </motion.p>
            <motion.h2 className="product__details-price" variants={fadeInUp}>
              $ {dollarUSLocale.format(priceTotal)}
            </motion.h2>

            {/* SIZE */}
            <motion.div className="product__details-size" variants={fadeInUp}>
              <p>Choose the size</p>
              <div className="size-list">
                {product.prices.map((size, idx) => (
                  <div key={size._id}>
                    <input
                      type="radio"
                      id={size.text}
                      name="size"
                      value={size.text}
                      defaultChecked={idx === 0}
                      onChange={() => setPrizeSize(size.price)}
                    />
                    <label htmlFor={size.text}>
                      <Badge
                        badgeContent={size.text}
                        max={10}
                        sx={{
                          ".MuiBadge-badge": {
                            fontSize: 12,
                            height: 15,
                            minWidth: 18,
                            backgroundColor: "#ffc743",
                            cursor: "default",
                            letterSpacing: 0,
                            color: "#141414",
                          },
                        }}
                      >
                        <MdOutlineIcecream className="size-icon" />
                      </Badge>
                    </label>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* TOPPINGS */}
            <motion.div
              className="product__details-toppings"
              variants={fadeInUp}
            >
              <p>Additional topping</p>
              <form autoComplete="off">
                {product.extraToppings.map((topping) => (
                  <div key={topping._id}>
                    <input
                      type="checkbox"
                      id={topping.text}
                      name={topping.text}
                      onChange={(e) => {
                        e.target.checked
                          ? (setPrizeTopping(prizeTopping + topping.price),
                            setExtras((prev) => [...prev, topping]))
                          : (setPrizeTopping(prizeTopping - topping.price),
                            setExtras(
                              extras.filter(
                                (extra) => extra._id !== topping._id
                              )
                            ));
                      }}
                    />
                    <label htmlFor={topping.text}>{topping.text}</label>
                  </div>
                ))}
              </form>
            </motion.div>

            {/* QUANTITY */}
            <motion.div
              className="product__details-quantity"
              variants={fadeInUp}
            >
              <p>Quantity</p>
              <form
                autoComplete="off"
                style={{ display: "inline" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddProduct();
                }}
              >
                <input
                  className="qty"
                  type="number"
                  value={quantity.toString()}
                  placeholder="Ex: 2"
                  min="1"
                  step="1"
                  onChange={(e) => {
                    setQuantity(Number(e.target.value));
                  }}
                />
              </form>
            </motion.div>

            <motion.button
              className="btn btn--primary"
              onClick={() =>
                quantity <= 0 || quantity.toString().includes(".")
                  ? handleAddProduct("error")
                  : handleAddProduct("success")
              }
              variants={fadeInUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.85, transition: { duration: 0.01 } }}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Product;

export const getStaticPaths = async () => {
  const res = await fetch("https://kedai-gelato.vercel.app/api/products");
  const data = await res.json();
  const paths = data.map((product) => ({
    params: {
      id: product._id,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await fetch(`https://kedai-gelato.vercel.app/api/products/${id}`);

  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
