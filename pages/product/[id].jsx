import Image from "next/image";
import { useState, useEffect } from "react";

// react icon
import { MdOutlineIcecream } from "react-icons/md";

// mui
import Badge from "@mui/material/Badge";

// redux
import { addProduct, reset } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function Product({ product }) {
  const [prizeSize, setPrizeSize] = useState(product.prices[0].price);
  const [prizeTopping, setPrizeTopping] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const [priceTotal, setPriceTotal] = useState(product.prices[0].price);
  const [priceTotalNonQty, setPriceTotalNonQty] = useState(
    product.prices[0].price
  );

  useEffect(() => {
    setPriceTotal((prizeSize + prizeTopping) * quantity);
  }, [prizeSize, prizeTopping, quantity]);
  useEffect(() => {
    setPriceTotalNonQty(prizeSize + prizeTopping);
  }, [prizeSize, prizeTopping]);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const handleAddProduct = () => {
    if (quantity <= 0) {
      return alert("Error!");
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
  };

  return (
    <section className="product">
      <div className="title">
        {/* <h2>Details</h2> */}
        {/* <h2>Product Details</h2> */}
      </div>
      <div className="container product__container">
        <div className="product__showcase">
          <Image src={product.img} width={500} height={700} alt="name" />
        </div>
        <div className="product__details">
          <h2 className="product__details-price">$ {priceTotal}</h2>

          <p className="product__details-description">❝{product.desc}❞</p>
          <h2 className="product__details-name">{product.title}</h2>

          {/* SIZE */}
          <div className="product__details-size">
            <p>Choose the size</p>
            <div className="size-list">
              {product.prices.map((size) => (
                <Badge
                  key={size._id}
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
                  <MdOutlineIcecream
                    className="size-icon"
                    onClick={() => setPrizeSize(size.price)}
                  />
                </Badge>
              ))}
            </div>
          </div>

          {/* TOPPINGS */}
          <div className="product__details-toppings">
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
                            extras.filter((extra) => extra._id !== topping._id)
                          ));
                    }}
                  />
                  <label htmlFor={topping.text}>{topping.text}</label>
                </div>
              ))}
            </form>
          </div>

          {/* QUANTITY */}
          <div className="product__details-quantity">
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
                type="number"
                value={quantity.toString()}
                placeholder="Ex: 2"
                onChange={(e) => {
                  setQuantity(Number(e.target.value));
                }}
              />
            </form>
          </div>

          <button className="btn btn--primary" onClick={handleAddProduct}>
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Product;

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:3000/api/products");
//   const data = await res.json();
//   const paths = data.map((product) => ({
//     params: {
//       id: product._id,
//     },
//   }));

//   return {
//     paths: paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (ctx) => {
//   const { id } = ctx.params;
//   const res = await fetch(`http://localhost:3000/api/products/${id}`);

//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       product: data,
//     },
//   };
// };

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
