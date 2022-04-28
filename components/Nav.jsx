function Nav() {
  return (
    <nav className="nav">
      <div className="container nav__container">
        {/* HAMBURGER */}
        <button className="nav__hamburger-icon">
          <img src="/assets/icon-menu.svg" alt="Menu Hamburger" />
        </button>

        {/* LOGO */}
        <a className="nav__logo" href="#">
          <img src="/assets/logo.png" alt="Logo" />
          <span href="#">Kedai Gelato</span>
        </a>

        {/* LIST */}
        <ul className="nav__list">
          <li>
            <a href="#homepage">Homepage</a>
          </li>
          <li>
            <a href="#orders">Orders</a>
          </li>
        </ul>
        {/* CART */}
        <div className="nav__cta">
          <span href="#">cart</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
