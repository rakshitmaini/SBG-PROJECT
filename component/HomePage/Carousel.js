import Slider from "react-slick";
import CarouselWrapper from "./style.carousel";

const settings = {
  dots: true,
  // arrows: true,
  infinite: true,
  autoplaySpeed: 5000,
  autoplay: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
};
const BannerList = [
  { image: "/images/image1.jpg" },
  { image: "/images/image2.jpg" },
  { image: "/images/image3.jpg" },
];

const Carousel = () => {
  return (
    <>
      <CarouselWrapper>
        <div className="container-fluid">
          <Slider {...settings}>
            {BannerList.map((banner, i) => (
              <div key={i} className="banner-image">
                <img src={banner.image} width="100%" />
              </div>
            ))}
          </Slider>
          <div className="overlay"></div>
          <div className="overlay-text">
            <h1>
              WE HELP YOU SECURE YOUR <br /> FINANCIAL FUTURE.
            </h1>
            <h3>India’s most trusted wealth management company</h3>
          </div>
        </div>
        {/* <div className="test"></div> */}
      </CarouselWrapper>
    </>
  );
};

export default Carousel;
