import React from "react";
import ServicesWrapper from "./styledComponent/style.services";
import HeaderBanner from "../baseComponent/headerComponent/HeaderBanner";

const ServicesInfo = [
  {
    title: "Life Insurance",
    id: "life",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    align: "right",
    count: "1",
    image: "/images/life-insurance.jpg",
  },
  {
    title: "Medical Insurance",
    id: "medical",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    align: "left",
    count: "2",
    image: "/images/medical-insurance.png",
  },
  {
    title: "Motor Insurance",
    id: "motor",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    align: "right",
    count: "3",
    image: "/images/motor-insurance.png",
  },
];

const ServicesPage = () => {
  return (
    <>
      <HeaderBanner
        img="/servicesAssets/services.jpg"
        intro="Here to help you!"
        tag="Services"
      />
      <ServicesWrapper>
        <div className="container-fluid">
          <div className="title">
            <h1>Services</h1>
            <h1>What We Do</h1>
          </div>
          {ServicesInfo.map((s) => (
            <div
              key={s.count}
              className={s.align === "left" ? "row flex-row-reverse" : "row"}
            >
              <div
                className="image-block col-md-6 col-sm-12 col-xs-12"
                id={s.id}
              >
                <img
                  data-aos={s.align === "left" ? "fade-right" : "fade-left"}
                  data-aos-duration="1000"
                  src={s.image}
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="content-block col-md-6 col-sm-12 col-xs-12"
              >
                <div className="count">#{s.count}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.info}</p>
                  {/* <button>Read More</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ServicesWrapper>
    </>
  );
};

export default ServicesPage;
