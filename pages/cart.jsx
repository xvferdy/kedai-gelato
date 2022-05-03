import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CartItem from "../components/CartItem";

// react-icon
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
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

// redux related
import { useSelector, useDispatch } from "react-redux";
import { reset, removeProduct } from "../redux/cartSlice";

// framer
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

function Cart() {
  const [cart, setCart] = useState([]);
  const [cod, setCod] = useState(false);
  const [open, setOpen] = useState(false);
  const [orderData, setOrderData] = useState({
    customer: "",
    address: "",
    phone: "",
  });
  const [loadingPost, setLoadingPost] = useState(false);
  const dispatch = useDispatch();
  const cartRedux = useSelector((state) => state.cart);
  const router = useRouter();
  let dollarUSLocale = Intl.NumberFormat("en-US");

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
  console.log(cart);

  const handleCreateOrder = async (orderData) => {
    try {
      setLoadingPost(true);
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const data = await res.json();

      if (res.status === 201) {
        // handleClose();
        console.log(data);
        router.push(`/orders/${data._id}`);
        dispatch(reset());
      }
      if (res.status !== 201) {
        alert("Error");
        setLoadingPost(false);
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
      <motion.section className="cart">
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
              <small onClick={() => dispatch(reset())}>Remove</small>
            </div>

            {cart.products?.length <= 0 ? (
              <>
                <small>Basket is empty . . .</small>
                <Image
                  src="/assets/empty.gif"
                  width={800}
                  height={800}
                  alt="No product here"
                />
              </>
            ) : (
              <AnimatePresence>
                {cart.products?.map((product, idx) => (
                  <CartItem key={product.reduxId} product={product} idx={idx} />
                ))}
              </AnimatePresence>
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
                <AnimatePresence exitBeforeEnter>
                  <motion.button
                    className="btn btn--primary"
                    onClick={handleClickOpen}
                  >
                    Cash On Delivery <FiTruck className="icon" />
                  </motion.button>
                  <button type="button" disabled>
                    powered by J&T Express.
                    <FiTruck className="icon" />
                  </button>
                </AnimatePresence>
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
                inputProps={{ style: { fontSize: "162.5%" } }}
                InputLabelProps={{ style: { fontSize: "162.5%" } }}
                autoFocus
                label="Name"
                fullWidth
                variant="standard"
                name="customer"
                onChange={handleChange}
              />
              <TextField
                sx={{ marginBottom: 3 }}
                inputProps={{ style: { fontSize: "162.5%" } }}
                InputLabelProps={{ style: { fontSize: "162.5%" } }}
                autoFocus
                label="Phone Number"
                fullWidth
                variant="standard"
                name="phone"
                onChange={handleChange}
              />
              <TextField
                sx={{ marginBottom: 3 }}
                inputProps={{ style: { fontSize: "162.5%" } }}
                InputLabelProps={{ style: { fontSize: "162.5%" } }}
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
                sx={{
                  fontSize: "142.5%",
                  fontWeight: "bold",
                }}
                onClick={() =>
                  handleCreateOrder({
                    ...orderData,
                    total: cart.totalPrice,
                    method: 0,
                  })
                }
                disabled={loadingPost}
              >
                Order Now
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </motion.section>
    </>
  );
}

export default Cart;
