import Image from "next/image";

import { MdOutlineShoppingBasket } from "react-icons/md";

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
            <small>Toppings</small>
            <small>Price</small>
            <small>Qty</small>
            <small>Total</small>
          </div>
          <div className="cart__details-item">
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
          <div className="cart__details-item">
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
            <span className="item-price">$12.345</span>
            <span className="item-quantity">200</span>
            <span className="item-total">$3.450.000</span>
          </div>
          <div className="cart__details-item">
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
            <span className="item-price">$12.345</span>
            <span className="item-quantity">200</span>
            <span className="item-total">$3.450.000</span>
          </div>
          <div className="cart__details-item">
            <div className="item-image">
              <Image
                src="/assets/pr6.png"
                width={100}
                height={100}
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
          </div>
        </div>
        <div className="cart__payments">
          <div>
            <h2>Cart Total: $900</h2>
            <small>Shipping & taxes calculated at checkout</small>
          </div>
          <button className="btn btn--primary">
            <MdOutlineShoppingBasket /> Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default cart;
