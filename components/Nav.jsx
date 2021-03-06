import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Badge from "@mui/material/Badge";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function Nav() {
  const [clientQty, setClientQty] = useState(0);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const router = useRouter();
  useEffect(() => {
    setClientQty(totalQuantity);
  }, [totalQuantity]);

  return (
    <nav className="nav">
      <div className="container nav__container">
        {/* HAMBURGER */}
        <button className="nav__hamburger-icon">
          <div className="component">&#9776;</div>
        </button>

        {/* LOGO */}
        <Link href="/" passHref>
          <a className="nav__logo">
            <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
            <h2>Kedai Gelato</h2>
          </a>
        </Link>

        {/* LIST */}
        <ul className="nav__list">
          <li className={router.pathname == "/" ? "nav__list--active" : ""}>
            <Link href="/" passHref>
              <a>Homepage</a>
            </Link>
          </li>
          <li
            className={router.pathname == "/orders" ? "nav__list--active" : ""}
          >
            <Link href="/orders" passHref>
              <a>Orders</a>
            </Link>
          </li>
        </ul>
        {/* CART */}
        <Link href="/cart" passHref>
          <div className="nav__cart">
            <Badge
              badgeContent={clientQty}
              max={10}
              sx={{
                ".MuiBadge-badge": {
                  fontSize: 12,
                  height: 15,
                  minWidth: 18,
                  backgroundColor: "#ffc743",
                  cursor: "pointer",
                  right: -3,
                },
              }}
            >
              <a>
                <AiOutlineShoppingCart />
              </a>
            </Badge>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
