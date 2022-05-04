import Image from "next/image";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartSlice";

import { BsTrash } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeDownCart } from "../utils/motion";

function CartItem({ product, idx }) {
  const dispatch = useDispatch();
  let dollarUSLocale = Intl.NumberFormat("en-US");
  return (
    <motion.div
      className="cart__details-item"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeDownCart(idx)}
    >
      <div className="item-image">
        <Image src={product.img} width={100} height={140} alt={product.title} />
      </div>
      <span className="item-name">{product.title}</span>
      <div className="item-topping">
        {product.extras.length <= 0 ? (
          <small>no toppings</small>
        ) : (
          product.extras.map((extra, idx) => (
            <span key={extra._id}>
              {extra.text}
              {idx < product.extras.length - 1 && ","}
              &nbsp;
            </span>
          ))
        )}
      </div>
      <span className="item-price">
        ${dollarUSLocale.format(product.priceTotalNonQty)}
      </span>
      <span className="item-quantity">{product.quantity}</span>
      <span className="item-total">
        ${dollarUSLocale.format(product.priceTotalNonQty * product.quantity)}
      </span>
      <Tooltip
        title={
          <p
            style={{
              color: "#fff",
              padding: "0.5rem",
              fontSize: 14,
            }}
          >
            Remove
          </p>
        }
        placement="top"
        disableRipple
        className="delete"
        onClick={() =>
          confirm("Remove from cart?") &&
          dispatch(
            removeProduct({
              id: product.reduxId,
              price: product.priceTotalNonQty * product.quantity,
            })
          )
        }
      >
        <IconButton>
          <BsTrash />
        </IconButton>
      </Tooltip>
    </motion.div>
  );
}

export default CartItem;
