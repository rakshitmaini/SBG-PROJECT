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
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <img src='/Asset 3.png' alt="" class="logo-img" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, libero a molestie consectetur, sapien elit lacinia mi.</p>
              <ul class="social-icon">
                <Link href="#" class="social"><i class="fa fa-facebook" aria-hidden="true"></i></Link>
                <Link href="#" class="social"><i class="fa fa-twitter" aria-hidden="true"></i></Link>
                <Link href="#" class="social"><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                <Link href="#" class="social"><i class="fa fa-youtube-play" aria-hidden="true"></i></Link>
                <Link href="#" class="social"><i class="fa fa-google" aria-hidden="true"></i></Link>

              </ul>
            </div>
            <div class="col-sm-4">
              <h4 class="title">Useful Links</h4>
              <span class="acount-icon">
                <ul>

                  {
                    UsefulLinks.map((l) => (
                      <Link href="#"><i class={l.style} aria-hidden="true">{l.tag}</i></Link>
                    ))
                  }


                </ul>
              </span>
            </div>
            <div class="col-sm-4">
              <h4 class="title">Available at</h4>
              <div class="category">
                <ul>
                  {
                    locationLinks.map((ll) => (
                      <Link href="#">{ll.tag}</Link>
                    ))
                  }

                  {/* <a href="#">men</a>
                <a href="#">women</a>
                <a href="#">boy</a>
                <a href="#">girl</a>
                <a href="#">Car</a>
                <a href="#">teshart</a>
                <a href="#">top</a>
                <a href="#">glass</a>
                <a href="#">baby dress</a> */}
                </ul>
              </div>
            </div>

          </div>
          <hr />
          <div class="row text-center"><a href="http://lacodeid.com/" style={{ color: '#fff' }}>Copyright © Your Website lacodeid 2017</a></div>
        </div>
      </footer>
    </FooterWrapper>
  );
};

export default Footer;
