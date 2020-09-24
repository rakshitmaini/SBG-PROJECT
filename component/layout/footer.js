import FooterWrapper from './style.footer'
import Link from "next/link";

const UsefulLinks = [
  {
    tag: 'Life Insurance',
    path: '',
    style: 'fa fa-heart'
  },
  {
    tag: 'Motor Insurance',
    path: '',
    style: 'fa fa-motorcycle'
  },
  {
    tag: 'Medi- Claim',
    path: '',
    style: 'fa fa-medkit'
  },
  {
    tag: 'FAQs',
    path: '',
    style: 'fa fa-question-circle'
  }
];
const locationLinks = [
  {
    tag: 'Delhi'
  },
  {
    tag: 'Jaipur'
  },
  {
    tag: 'Rajasthan'
  },
  {
    tag: 'Mumbai'
  },
  {
    tag: 'Banglore'
  },
  {
    tag: 'Lucknow'
  }

]
const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <img src='/Asset 3.png' alt="" className="logo-img" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, libero a molestie consectetur, sapien elit lacinia mi.</p>
              <ul className="social-icon">
                <Link href="#" className="social"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                <Link href="#" className="social"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                <Link href="#" className="social"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                <Link href="#" className="social"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link>
                <Link href="#" className="social"><i className="fa fa-google" aria-hidden="true"></i></Link>

              </ul>
            </div>
            <div className="col-sm-4">
              <h4 className="title">Useful Links</h4>
              <span className="acount-icon">
                <ul>

                  {
                    UsefulLinks.map((l) => (
                      <Link href="#"><i className={l.style} aria-hidden="true"><span>{l.tag}</span></i></Link>
                    ))
                  }


                </ul>
              </span>
            </div>
            <div className="col-sm-4">
              <h4 className="title">Available at</h4>
              <div className="category">
                <ul>
                  {
                    locationLinks.map((ll) => (
                      <Link href="#">{ll.tag}</Link>
                    ))
                  }

                </ul>
              </div>
            </div>

          </div>
          <hr />
          <div className="row text-center"><a href="http://lacodeid.com/" style={{ color: '#fff' }}>Copyright © Your Website lacodeid 2017</a></div>
        </div>
      </footer>
    </FooterWrapper>
  );
};

export default Footer;
