import Link from "next/link";
import Image from "next/image";

// material
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav__container">
        {/* HAMBURGER */}
        <button className="nav__hamburger-icon">
          <div className="component">&#9776;</div>
        </button>

        {/* LOGO */}
        <Link href="#" passHref>
          <a className="nav__logo">
            <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
            <h3>Kedai Gelato</h3>
          </a>
        </Link>

        {/* LIST */}
        <ul className="nav__list">
          <li>
            <Link href="#homepage" passHref>
              <a>Homepage</a>
            </Link>
          </li>
          <li>
            <Link href="#orders" passHref>
              <a>Orders</a>
            </Link>
          </li>
        </ul>
        {/* CART */}
        <Link href="#" passHref>
          <div className="nav__cart">
            <a>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon color="action" />
              </Badge>
            </a>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
