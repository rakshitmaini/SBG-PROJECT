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
    tag: "FAQs",
    path: "/faqs",
    style: "fa fa-question-circle",
  },
];
const locationLinks = [
  {
    tag: "Delhi",
  },
  {
    tag: "Jaipur",
  },
  {
    tag: "Odisha",
  },
  {
    tag: "West Bengal",
  },
  {
    tag: "Kolkata",
  },
  {
    tag: "Nagpur",
  },
  {
    tag: "Maharashtra",
  },
  {
    tag: "Ranchi",
  },
  {
    tag: "Agra",
  },
  {
    tag: "Pune",
  },
];
const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <img src="/Asset 3.png" alt="" className="logo-img" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                suscipit, libero a molestie consectetur, sapien elit lacinia mi.
              </p>
              <ul className="social-icon">
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
              </ul>
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
                    <Link key={ll.tag} href="#">
                      {ll.tag}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center">
            Copyright © 2021 SHRI BALAJI GLOBAL PRIVATE LIMITED
          </div>
        </div>
      </footer>
    </FooterWrapper>
  );
};

export default Footer;
