import NavWrapper from "./style.nav";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [show, setshow] = useState(false);
  const toggle = () => {
    setshow((show) => !show);
  };
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
              <div>
                <Link href="/">Home</Link>
              </div>
              <div>
                <Link href="/about">About</Link>
              </div>
              <div>
                <Link href="/contact">Contact</Link>
              </div>
              <div>
                <Link href="/services">Services</Link>
              </div>
            </div>
            <div className="nav-icon">
              <i
                onClick={toggle}
                class="fa fa-bars fa-2x"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div
          style={show ? { display: "block" } : { display: "none" }}
          className="overlay-btns"
        >
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <Link href="/services">Services</Link>
          </div>
        </div>
      </NavWrapper>
    </>
  );
};
export default Header;
