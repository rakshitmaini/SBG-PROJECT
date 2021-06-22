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
                <img
                  src="/logo.png"
                  height="100%"
                  alt="Shri Balaji Global Insurance Solution Private Limited"
                />
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
              <div>
                <Link href="/mission-vision">Vision</Link>
              </div>
            </div>
            <div className="nav-icon">
              <i
                onClick={toggle}
                className="fa fa-bars fa-2x"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div style={show ? {} : { display: "none" }} className="overlay-btns">
          <div className="up">
            <i className="fa fa-2x fa-caret-up" aria-hidden="true"></i>
          </div>
          <div className="page-links">
            <Link href="/">
              <a onClick={toggle}>Home</a>
            </Link>
          </div>
          <div className="page-links">
            <Link href="/about">
              <a onClick={toggle}>About</a>
            </Link>
          </div>
          <div className="page-links">
            <Link href="/contact">
              <a onClick={toggle}>Contact</a>
            </Link>
          </div>
          <div className="page-links">
            <Link href="/services">
              <a onClick={toggle}>Services</a>
            </Link>
          </div>
          <div className="page-links">
            <Link href="/mission-vision">
              <a onClick={toggle}>Vision</a>
            </Link>
          </div>
        </div>
      </NavWrapper>
    </>
  );
};
export default Header;
