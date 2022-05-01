import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// icon
import { MdOutlineShoppingBasket } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";

// mui
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addProduct, reset, removeProduct } from "../redux/cartSlice";

function cart() {
  const [cart, setCart] = useState([]);
  const [cod, setCod] = useState(false);
  const [open, setOpen] = useState(false);
  const [orderData, setOrderData] = useState({
    customer: "",
    address: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const cartRedux = useSelector((state) => state.cart);
  const router = useRouter();
  let dollarUSLocale = Intl.NumberFormat("en-US");

  console.log(cart);
  useEffect(() => {
    setCart(cartRedux);
  }, [cartRedux]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };
  console.log(orderData);

  const handleCreateOrder = async (orderData) => {
    console.log(orderData);
    try {
      // const res = await fetch("http://localhost:3000/api/orders", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      // });
      // return res.json();

      const res = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const data = await res.json();

      if (res.status === 201) {
        console.log(data);
        dispatch(reset());
        router.push(`/orders/${data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Kedai Gelato | Cart</title>
        <meta name="keyword" content="Ice Cream, Gelato, Kedai" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
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
            {cart.products?.length <= 0 ? (
              <small>Basket is empty . . .</small>
            ) : (
              <>
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
                    <span className="item-price">
                      ${dollarUSLocale.format(product.priceTotalNonQty)}
                    </span>
                    <span className="item-quantity">{product.quantity}</span>
                    <span className="item-total">
                      $
                      {dollarUSLocale.format(
                        product.priceTotalNonQty * product.quantity
                      )}
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
                  </div>
                ))}
              </>
            )}
          </div>

          {cart.products?.length >= 1 && (
            <div className="cart__payments">
              <div>
                <h2>Cart Total: ${dollarUSLocale.format(cart.totalPrice)}</h2>
                <p>Shipping & taxes calculated at checkout</p>
              </div>
              <button className="btn btn--primary" onClick={() => setCod(!cod)}>
                <MdOutlineShoppingBasket className="icon" /> Checkout
              </button>
              {cod && (
                <button className="btn btn--primary" onClick={handleClickOpen}>
                  Cash On Delivery <FiTruck className="icon" />
                </button>
              )}
            </div>
          )}

          {/* MODAL */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle sx={{ fontSize: "182.5%", color: "#1976D2" }}>
              You will pay ${dollarUSLocale.format(cart.totalPrice)} after
              delivery
            </DialogTitle>
            <DialogContent>
              <TextField
                sx={{ marginBottom: 3 }}
                inputProps={{ style: { fontSize: "162.5%" } }} // font size of input text
                InputLabelProps={{ style: { fontSize: "162.5%" } }} // font size of input label
                autoFocus
                label="Name"
                fullWidth
                variant="standard"
                name="customer"
                onChange={handleChange}
              />
              <TextField
                sx={{ marginBottom: 3 }}
                inputProps={{ style: { fontSize: "162.5%" } }} // font size of input text
                InputLabelProps={{ style: { fontSize: "162.5%" } }} // font size of input label
                autoFocus
                label="Phone Number"
                fullWidth
                variant="standard"
                name="phone"
                onChange={handleChange}
              />
              <TextField
                sx={{ marginBottom: 3 }}
                inputProps={{ style: { fontSize: "162.5%" } }} // font size of input text
                InputLabelProps={{ style: { fontSize: "162.5%" } }} // font size of input label
                autoFocus
                label="Address"
                fullWidth
                variant="standard"
                name="address"
                onChange={handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                sx={{ fontSize: "142.5%", fontWeight: "bold" }}
              >
                Cancel
              </Button>
              <Button
                sx={{ fontSize: "142.5%", fontWeight: "bold" }}
                onClick={() =>
                  handleCreateOrder({
                    ...orderData,
                    total: cart.totalPrice,
                    method: 0,
                  })
                }
              >
                Order Now
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </section>
    </>
  );
}

export default cart;
