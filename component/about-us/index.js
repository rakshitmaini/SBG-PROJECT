import AboutWrapper from "./style.about";

const AboutUs = () => {
  return (
    <div>
      <AboutWrapper>
        <div className="container-fluid">
          <div className="header">
            {/* <div className="header-image"> */}
            <img src="/images/about-us.jpg" />
            {/* </div> */}
            <div className="overlay"></div>
            <div className="title">
              <h3>A few words</h3>
              <h1>About Us</h1>
            </div>
          </div>
        </div>
      </AboutWrapper>
    </div>
  );
};

export default AboutUs;
