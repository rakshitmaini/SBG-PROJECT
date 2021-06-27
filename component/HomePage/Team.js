import React, { useRef } from "react";
import Slider from "react-slick";
import TeamWrapper from "./styledComponent/style.team";
import Link from "next/link";
const teamData = [
  {
    name: "Sachin Sharma",
    profile: "",
    path: "/about#Sachin-Sharma",
    introLine:
      "Mr. Sachin Sharma is a post graduate in Global marketing and Finance with a phenomenal work experience of 23 years in majorly Financial and Insurance services. Read More. . .",
    src: "/aboutUsAssets/team/sachin-sharma.jpg",
  },
  {
    name: "Faizullah khan",
    profile: "",
    path: "/about#Faiz-Khan",
    introLine:
      "20 years of rich experience in Venue Sales model. One of the founder of Venue Sales Channel in Bajaj Capital. Highly experienced and innovative with sophisticated sales, customer service. Read More. . . ",
    src: "/aboutUsAssets/team/faiz-khan.jpg",
  },
  {
    name: "Pankaj Kumar",
    profile: "",
    path: "/about#Pankaj-Kumar",
    introLine:
      "Pankaj Kumar is a self-driven entrepreneurial leader with 16 years of diverse work experience covering BPO & BFSI Sector. He was associated with prestigious NBFC as Vice President. Read More. . .",
    src: "/aboutUsAssets/team/pankaj-kumar.jpg",
  },
];
const settings = {
  centerMode: false,
  focusOnSelect: false,
  arrows: false,
  className: "center",
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
        slidesToShow: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        autoplaySpeed: 6000,
        infinite: true,
        swipeToSlide: true,
        swipe: true,
      },
    },
  ],
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

          <Slider
            // ref={(slider) => (customSlider.current = slider)}
            {...settings}
          >
            {teamData.map((t, i) => (
              <div key={i} className="col-sm-12  card-outer">
                <Link href={t.path}>
                  <div className="card-inner">
                    <div className="card-image member-img">
                      <img src={t.src} alt="Sachin Sharma, Principal Office" />
                    </div>

                    <div className="card-content">
                      <h2>{t.name}</h2>
                      <p>{t.introLine}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </TeamWrapper>
    </>
  );
};

export default Team;
