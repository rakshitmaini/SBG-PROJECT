import React, { useRef } from "react";
import PartnerWrapper from "./styledComponent/style.partner";
import Slider from "react-slick";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 3000,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 885,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
};

const imagesList = [
  {
    icon: "fa-eercast",
  },
  {
    icon: "fa-quora",
  },
  {
    icon: "fa-superpowers",
  },
  {
    icon: "fa-bandcamp",
  },
  {
    icon: "fa-telegram",
  },
  {
    icon: "fa-imdb",
  },
  {
    icon: "fa-podcast",
  },
  {
    icon: "fa-meetup",
  },
];

export default function Partners() {
  const customSlider = useRef();

  return (
    <div>
      <PartnerWrapper>
        <div className="container-fluid">
          <div className="title">
            <h1>A Few of our Partner Companies</h1>
          </div>
          <div className="slider-block">
            <span className="prev">
              <i
                onClick={() => customSlider.current.slickPrev()}
                className="fa fa-chevron-circle-left"
                aria-hidden="true"
              ></i>
            </span>
            <span className="next">
              <i
                onClick={() => customSlider.current.slickNext()}
                className="fa fa-chevron-circle-right"
                aria-hidden="true"
              ></i>
            </span>
            <Slider
              ref={(slider) => (customSlider.current = slider)}
              className="slider-outer"
              {...settings}
            >
              {imagesList.map((img, i) => (
                <div key={i} className="slide">
                  <i className={"fa" + ` ${img.icon}`} aria-hidden="true"></i>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </PartnerWrapper>
    </div>
  );
}
