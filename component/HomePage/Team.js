import React, { Component, useRef } from "react";
import Slider from "react-slick";
import TeamWrapper from "./styledComponent/style.team";

const teamData = [
  {
    name: "ABC",
    profile: "",
    introLine:
      "lorem ipsum lorem ipsumlorem ipsumlorem lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem  ipsumlorem ipsumlorem ipsumlorem ipsum ",
    src: "/images/sud.jpg",
  },
  {
    name: "DEF",
    profile: "",
    introLine:
      "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem  ",
    src: "/images/sud.jpg",
  },
  {
    name: "GHI",
    profile: "",
    introLine:
      "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem  lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum ",
    src: "/images/sud.jpg",
  },
  {
    name: "JKL",
    profile: "",
    introLine:
      "lorem lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem  ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum ",
    src: "/images/sud.jpg",
  },
];
const settings = {
  centerMode: true,
  arrows: true,
  className: "center",
  autoplay: true,
  autoplaySpeed: 8000,
  infinite: true,
  speed: 10000,
  slidesToShow: 3,
  speed: 500,
};
const Team = () => {
  const customSlider = useRef();
  return (
    <>
      <TeamWrapper>
        <div className="container-fluid">
          <div className="title">
            <h1>Team</h1>
            <h1>Our Squad</h1>
          </div>
          <div
            className="prev-btn"
            onClick={() => customSlider.current.slickPrev()}
          ></div>
          <div
            className="next-btn"
            onClick={() => customSlider.current.slickNext()}
          ></div>
          <Slider
            ref={(slider) => (customSlider.current = slider)}
            {...settings}
          >
            {teamData.map((t) => (
              <div className="col-sm-12 card-outer">
                <div className="card-inner">
                  <div className="card-image">
                    <img src={t.src} />
                  </div>
                  <div className="card-content">
                    <p>{t.introLine}</p>
                    <h2>{t.name}</h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </TeamWrapper>
    </>
  );
};

export default Team;
