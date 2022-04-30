import Image from "next/image";

// react icon
import { MdOutlineIcecream } from "react-icons/md";

// mui
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Badge from "@mui/material/Badge";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Product() {
  return (
    <section className="product">
      <div className="title">
        {/* <h2>details</h2> */}
        {/* <h2>OREO TOMATO</h2> */}
      </div>
      <div className="container product__container">
        <div className="product__showcase">
          <Image src="/assets/pr2.png" width={500} height={700} alt="name" />
        </div>
        <div className="product__details">
          <h2 className="product__details-price">$ 123</h2>
          <p className="product__details-description">
            ❝Lorem ipsum dolor sit amet consectetur at consectetur t consectetur
            t consectetur dipisicing el Lorem ipsum dolor sit amet consectetur
            adipisicing el❞
          </p>
          <h2 className="product__details-name">Oreo Ice cream</h2>
          <div className="product__details-size">
            <p>Choose the size</p>
            <div className="size-list">
              <Badge
                badgeContent="small"
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
              <Badge
                badgeContent="medium"
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
              <Badge
                badgeContent="large"
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
            </div>
          </div>

          <div className="product__details-toppings">
            <p>Additional topping</p>
            <form autoComplete="off">
              <div>
                <input type="checkbox" id="d" name="sdsd" className="sdsd" />
                <label htmlFor="d">oreo</label>
              </div>
              <div>
                <input type="checkbox" id="w" name="sdsd" className="sdsd" />
                <label htmlFor="w">matcha</label>
              </div>
              <div>
                <input type="checkbox" id="q" name="sdsd" className="sdsd" />
                <label htmlFor="q">coffe</label>
              </div>
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
