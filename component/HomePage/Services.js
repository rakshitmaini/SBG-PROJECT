import React from "react";
import ServicesWrapper from "./styledComponent/style.services";

const ServicesInfo = [
  {
    title: "Life Insurance",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    align: "top",
    count: "1",
    image: "/images/life-insurance.jpg",
  },
  {
    title: "Medical Insurance",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    align: "top",
    count: "2",
    image: "/images/medical-insurance.png",
  },
  {
    title: "Motor Insurance",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    align: "bottom",
    count: "3",
    image: "/images/motor-insurance.png",
  },
];

const Services = () => {
  return (
    <>
      <ServicesWrapper>
        <div className="container-fluid">
          <div className="row services-main flex justify-content-between">
            <div className="col-md-5 services-left">
              <div className="py-4">
                <span className="text-secondary text-uppercase">services</span>
                <h1 className="text-capitalize font-weight-bold my-3">
                  Our <span className="service-tag">Services</span>
                </h1>
                <p className="text-secondary">
                  The life and property of an individual are surrounded by the
                  risk of death, disability or destruction. These risks may
                  result in financial losses. Insurance is a prudent way to
                  transfer such risks to an insurance company.
                </p>
                <p className="text-secondary">
                  {" "}
                  Our team does adequate amount research before suggesting right
                  insurance policy to you.
                </p>
              </div>
            </div>
            <div className="col-md-6 services-right">
              <div className="row">
                {ServicesInfo.map((s, i) => (
                  <div
                    key={i}
                    className={
                      s.align === "top"
                        ? "col-md-6 p-2 text-center"
                        : "col-md-12 p-2 text-center"
                    }
                  >
                    <div className=" px-3 py-5">
                      <div className="mt-3">
                        <div className="service-img">
                          <img src={s.image} alt={s.title} />
                        </div>
                        <h5 className="mb-2">
                          <a href="#" className="stretched-link">
                            {s.title}
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ServicesWrapper>
    </>
  );
};

export default Services;
