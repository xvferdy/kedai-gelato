import Image from "next/image";

// react icon
import { MdOutlineIcecream } from "react-icons/md";

// mui
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Badge from "@mui/material/Badge";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Product({ product }) {
  return (
    <section className="product">
      <div className="title">
        {/* <h2>details</h2> */}
        {/* <h2>OREO TOMATO</h2> */}
      </div>
      <div className="container product__container">
        <div className="product__showcase">
          <Image src={product.img} width={500} height={700} alt="name" />
        </div>
        <div className="product__details">
          <h2 className="product__details-price">
            $ {product.prices[0].price}
          </h2>

          <p className="product__details-description">❝{product.desc}❞</p>
          <h2 className="product__details-name">{product.title}</h2>

          <div className="product__details-size">
            <p>Choose the size</p>
            <div className="size-list">
              {product.prices.map((topping) => (
                <Badge
                  badgeContent={topping.text}
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
              ))}
            </div>
          </div>

          <div className="product__details-toppings">
            <p>Additional topping</p>
            <form autoComplete="off">
              {product.extraTopping.map((topping) => (
                <div>
                  <input
                    type="checkbox"
                    id={topping.text}
                    name={topping.text}
                  />
                  <label htmlFor={topping.text}>{topping.text}</label>
                </div>
              ))}
            </form>
          </div>

          <div className="product__details-quantity">
            <p>Quantity</p>
            <form autoComplete="off" style={{ display: "inline" }}>
              <input type="number" placeholder="Ex: 2" />
            </form>
          </div>

          <button className="btn btn--primary">Add to Cart</button>
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
