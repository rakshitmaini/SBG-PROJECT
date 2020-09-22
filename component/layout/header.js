import NavWrapper from "./style.nav";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <NavWrapper>
        <div>
          <div className="nav-outer">
            <div className="nav-logo">
              <Link href="/">
                <img src="/Asset 3.png" height="100%" />
              </Link>
            </div>
            <div className="nav-buttons">
              <Link href="/">
                <div>Home</div>
              </Link>
              <Link href="/about">
                <div>About</div>
              </Link>
              <Link href="/contact">
                <div>Contact</div>
              </Link>
              <Link href="/services">
                <div>Services</div>
              </Link>
            </div>
          </div>
        </div>
      </NavWrapper>
    </>
  );
};
export default Header;
