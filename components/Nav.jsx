import Link from "next/link";
import Image from "next/image";

// material
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// react-icons
import { AiOutlineShoppingCart } from "react-icons/ai";

function Nav() {
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
          <li>
            <Link href="/" passHref>
              <a>Homepage</a>
            </Link>
          </li>
          <li>
            <Link href="/orders/1" passHref>
              <a>Orders</a>
            </Link>
          </li>
        </ul>
        {/* CART */}
        <Link href="/cart" passHref>
          <div className="nav__cart">
            <Badge
              badgeContent={4}
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
