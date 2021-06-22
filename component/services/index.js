import React from "react";
import ServicesWrapper from "./styledComponent/style.services";
import HeaderBanner from "../baseComponent/headerComponent/HeaderBanner";

const ServicesInfo = [
  {
    title: "Life Insurance",
    id: "life",
    info: "When you buy life insurance, you enter a contract with an insurance company that promises to provide your beneficiaries with a certain amount of money upon your death. In return, you make periodic payments, called premiums. The premium amount is based on factors such as your age, gender, medical history, and the dollar amount of life insurance you purchase.",
    align: "right",
    count: "1",
    image: "/images/life-insurance.jpg",
  },
  {
    title: "Medical Insurance",
    id: "medical",
    info: "Health insurance (sometimes called health coverage) pays for some or all of the cost of the health services you receive, like doctors’ visits, hospital stays, and visits to the emergency room. It helps keep your health care costs predictable and affordable. You may have to pay several different amounts for health insurance",
    align: "left",
    count: "2",
    image: "/images/medical-insurance.png",
  },
  {
    title: "Motor Insurance",
    id: "motor",
    info: "Motor insurance is effectively a contract between yourself and an insurance company in which you agree to pay premiums in exchange for protection against financial losses stemming from an accident or other damage to the vehicle",
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
