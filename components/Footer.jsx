import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Made with 🧡 by{" "}
        <Link href="https://nextjs.org/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            Next JS
          </a>
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
