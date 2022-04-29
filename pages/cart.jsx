import Image from "next/image";

import { SiZcash } from "react-icons/si";

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
            <span>Image</span>
            <span>Name</span>
            <span>Toppings</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          <div className="art__details-item">
            <div className="item-image">
              <Image
                src="/assets/pr2.png"
                width={100}
                height={100}
                alt="name"
              />
            </div>
            <span className="item-name">Oereuo Tou Luv</span>
            <div className="item-topping">
              <small>No topping</small>
            </div>
            <span className="item-price">$123</span>
            <span className="item-quantity">2</span>
            <span className="item-total">$345</span>
          </div>
          <div className="art__details-item">
            <div className="item-image">
              <Image
                src="/assets/pr2.png"
                width={100}
                height={100}
                alt="name"
              />
            </div>
            <span className="item-name">Oereuo Tou Luv</span>
            <div className="item-topping">
              <span>Strawberry Ice, Neon flavour</span>
            </div>
            <span className="item-price">$123</span>
            <span className="item-quantity">2</span>
            <span className="item-total">$345</span>
          </div>
        </div>
        <div className="cart__payments">
          <p>Cart Total: $900</p>
          <small>Shipping & taxes calculated at checkout</small>
          <button className="btn btn--primary">
            <SiZcash /> Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default cart;
