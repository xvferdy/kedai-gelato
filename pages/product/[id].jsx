import Image from "next/image";
import { MdOutlineIcecream } from "react-icons/md";

function Product() {
  return (
    <section className="product">
      <div className="title">
        <p>details</p>
        <h2>OREO TOMATO</h2>
      </div>
      <div className="container product__container">
        <div className="product__showcase">
          <Image src="/assets/pr6.png" width={500} height={500} alt="name" />
        </div>
        <div className="product__details">
          <p className="product__details-price">$123</p>
          <p className="product__details-description">DESC</p>
          <h3 className="product__details-name">Oreo Ice cream</h3>
          <p>Choose the size</p>
          <div className="product__details-size">
            {[...Array(3)].map((size) => (
              <MdOutlineIcecream />
            ))}
          </div>

          <p>Another topping</p>
          <form autoComplete="off">
            <input type="checkbox" id="d" name="sdsd" className="sdsd" />
            <label htmlFor="d">oreo</label>
          </form>
          <form autoComplete="off" style={{ display: "inline" }}>
            <input type="number" />
          </form>
          <button className="btn btn--primary">Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default Product;
