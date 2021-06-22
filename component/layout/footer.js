import FooterWrapper from "./style.footer";
import Link from "next/link";

const UsefulLinks = [
  {
    tag: "Life Insurance",
    path: "/services#life",
    style: "fa fa-heart",
  },
  {
    tag: "Motor Insurance",
    path: "/services#motor",
    style: "fa fa-motorcycle",
  },
  {
    tag: "Medi- Claim",
    path: "/services#medical",
    style: "fa fa-medkit",
  },
  {
    tag: "Vision",
    path: "/mission-vision",
    style: "fa fa-eye",
  },
];
const locationLinks = [
  {
    tag: "Delhi",
    path: "/contact#delhi-karol",
  },
  {
    tag: "Jaipur",
    path: "/contact#jaipur",
  },
  {
    tag: "Odisha",
    path: "/contact#odisha-balasore",
  },
  {
    tag: "West Bengal",
    path: "/contact#westbengal-Howrah",
  },
  {
    tag: "Kolkata",
    path: "/contact#kolkata",
  },
  {
    tag: "Nagpur",
    path: "/contact#nagpur",
  },
  {
    tag: "Maharashtra",
    path: "/contact#maharashtra-latur",
  },
  {
    tag: "Ranchi",
    path: "/contact#ranchi",
  },
  {
    tag: "Agra",
    path: "/contact#agra",
  },
  {
    tag: "Pune",
    path: "/contact#pune",
  },
];
const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <img
                as="link"
                href="/#"
                src="/logo.png"
                alt="Shri Balaji Global Insurance Solution Private Limited"
                className="logo-img"
              />
              <p>
                We connect families and corporates with most innovative
                insurance solutions to help them get the best and unmatched
                solution possible.
              </p>
              {/* <ul className="social-icon">
                <Link href="#" className="social">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link href="#" className="social">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link href="#" className="social">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
                <Link href="#" className="social">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </Link>
                <Link href="#" className="social">
                  <i className="fa fa-google" aria-hidden="true"></i>
                </Link>
              </ul> */}
            </div>
            <div className="col-sm-4">
              <h4 className="title">Useful Links</h4>
              <span className="acount-icon">
                <ul>
                  {UsefulLinks.map((l) => (
                    <Link key={l.path} href={l.path}>
                      <i className={l.style} aria-hidden="true">
                        <span>{l.tag}</span>
                      </i>
                    </Link>
                  ))}
                </ul>
              </span>
            </div>
            <div className="col-sm-4">
              <h4 className="title">Available at</h4>
              <div className="category">
                <ul>
                  {locationLinks.map((ll) => (
                    <Link key={ll.tag} href={ll.path}>
                      {ll.tag}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center">
            Copyright © 2021 SHRI BALAJI GLOBAL INSURANCE SOLUTION PRIVATE
            LIMITED
          </div>
        </div>
      </footer>
    </FooterWrapper>
  );
};

export default Footer;
