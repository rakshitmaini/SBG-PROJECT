import Slider from "react-slick";
import styled from "./style.carousel";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  return (
    <>
      <styled>
        <carousel>
          <Slider className="hello" {...settings}>
            <div>
              <img src="./public/images/image1.jpg" width="100%" />
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </carousel>
      </styled>
    </>
  );
};

export default Carousel;
