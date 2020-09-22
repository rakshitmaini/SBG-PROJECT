import AboutWrapper from "./style.about";
import HeaderBanner from '../baseComponent/headerComponent/HeaderBanner'
const AboutUs = () => {
  return (
    <div>
      <AboutWrapper>
        <div className="container-fluid">
          <HeaderBanner img="/aboutUsAssets/about-us.jpg" tag="About Us" />

          <div className="">
            <div className="section-outer row ">
              <div className="content  col-lg-6 col-md-12">
                <p>Exceptional Service</p>
                <h2>Practical Financial Advice You Can Count On</h2>
                <h4>
                  Focus Your Time And Efforts On Running Your Business And Leave
                  The Accounting To Me
                </h4>
                <p>
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>{" "}
              <div className="section-image col-lg-6 col-md-12">
                <div>
                  <img src="https://websitedemos.net/chartered-accountant-02/wp-content/uploads/sites/236/2019/06/feature3-free-img.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutWrapper>
    </div>
  );
};

export default AboutUs;
