import Image from "next/image";

import { MdOutlineShoppingBasket } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";

// mui
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

function cart() {
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

          <div className="cart__details-item">
            <div className="item-image">
              <Image
                src="/assets/pr6.png"
                width={100}
                height={140}
                alt="name"
              />
            </div>
            <span className="item-name">Oereuo Tou Luv</span>
            <div className="item-topping">
              <span>Strawberry Ice, Neon flavour</span>
            </div>
            <span className="item-price">$12.345</span>
            <span className="item-quantity">200</span>
            <span className="item-total">$3.450.000</span>
            <Tooltip
              title={<small style={{ color: "#fff" }}>Remove</small>}
              placement="top"
              disableRipple
              className="delete"
            >
              <IconButton>
                <BsTrash />
              </IconButton>
            </Tooltip>
          </div>
          <div className="cart__details-item">
            <div className="item-image">
              <Image
                src="/assets/pr2.png"
                width={100}
                height={140}
                alt="name"
              />
            </div>
            <span className="item-name">Oereuo Tou Luv</span>
            <div className="item-topping">
              <span>Strawberry Ice, Neon flavour</span>
            </div>
            <span className="item-price">$12.345</span>
            <span className="item-quantity">200</span>
            <span className="item-total">$3.450.000</span>
            <Tooltip
              title={<small style={{ color: "#fff" }}>Remove</small>}
              placement="top"
              disableRipple
              className="delete"
            >
              <IconButton>
                <BsTrash />
              </IconButton>
            </Tooltip>
          </div>
          <div className="cart__details-item">
            <div className="item-image">
              <Image
                src="/assets/pr4.png"
                width={100}
                height={140}
                alt="name"
              />
            </div>
            <span className="item-name">Oereuo Tou Luv</span>
            <div className="item-topping">
              <span>Strawberry Ice, Neon flavour</span>
            </div>
            <span className="item-price">$12.345</span>
            <span className="item-quantity">200</span>
            <span className="item-total">$3.450.000</span>
            <Tooltip
              title={<small style={{ color: "#fff" }}>Remove</small>}
              placement="top"
              disableRipple
              className="delete"
            >
              <IconButton>
                <BsTrash />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="cart__payments">
          <div>
            <h2>Cart Total: $900</h2>
            <span>Shipping & taxes calculated at checkout</span>
          </div>
          <button className="btn btn--primary">
            <MdOutlineShoppingBasket className="icon" /> Checkout
          </button>
          <button className="btn btn--primary">
            Cash On Delivery <FiTruck className="icon" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default cart;
