import Link from "next/link";

function Footer() {
  return (
    <footer>
      <p>
        Made with 🧡 by{" "}
        <Link href="https://nextjs.org/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            Next JS
          </a>
        </Link>
        , {"  "}
        <Link href="https://sass-lang.com/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            {" "}
            Sass
          </a>
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/mui-org/material-ui" passHref>
          <a target="_blank" rel="noopener noreferrer">
            Material-UI
          </a>
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
