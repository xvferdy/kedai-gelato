import Image from "next/image";
import { useEffect, useState } from "react";

// icon
import { MdOutlineShoppingBasket } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";

// mui
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addProduct, reset, removeProduct } from "../redux/cartSlice";

function cart() {
  const [cart, setCart] = useState([]);
  const [cod, setCod] = useState(false);

  // redux
  const dispatch = useDispatch();
  const cartRedux = useSelector((state) => state.cart);
  console.log(cart);
  useEffect(() => {
    setCart(cartRedux);
  }, [cartRedux]);

  return (
    <section className="cart">
      <div className="title">
        {/* <p>details</p>
        <h2>cart page</h2> */}
      </div>
      <div className="container cart__container">
        <div className="cart__details">
          <div className="cart__details-header">
            <small>Img</small>
            <small>Name</small>
            <small className="header-topping">Toppings</small>
            <small className="header-price">Price</small>
            <small>Qty</small>
            <small>Total</small>
            <small>Remove</small>
          </div>

          {cart.products?.map((product, idx) => (
            <div key={idx} className="cart__details-item">
              <div className="item-image">
                <Image
                  src={product.img}
                  width={100}
                  height={140}
                  alt={product.title}
                />
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
              <span className="item-price">${product.priceTotalNonQty}</span>
              <span className="item-quantity">{product.quantity}</span>
              <span className="item-total">
                ${product.priceTotalNonQty * product.quantity}
              </span>
              <Tooltip
                title={
                  <p style={{ color: "#fff", padding: "0.5rem", fontSize: 14 }}>
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
            </div>
          ))}
        </div>
        <div className="cart__payments">
          <div>
            <h2>Cart Total: ${cart.totalPrice}</h2>
            <span>Shipping & taxes calculated at checkout</span>
          </div>
          <button className="btn btn--primary" onClick={() => setCod(!cod)}>
            <MdOutlineShoppingBasket className="icon" /> Checkout
          </button>
          {cod && (
            <button className="btn btn--primary">
              Cash On Delivery <FiTruck className="icon" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default cart;
