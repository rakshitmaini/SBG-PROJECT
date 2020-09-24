import React from "react";
import ServicesWrapper from "./styledComponent/style.services";

const ServicesInfo = [
  {
    title: "Life Insurance",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    align: "top",
    count: "1",
    image: "/images/life-insurance.jpg",
  },
  {
    title: "Medical Insurance",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    align: "top",
    count: "2",
    image: "/images/medical-insurance.png",
  },
  {
    title: "Motor Insurance",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
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
          <div class="row services-main flex justify-content-between">

            <div class="col-md-5 services-left">
              <div class="py-4">
                <span class="text-secondary text-uppercase">services</span>
                <h1 class="text-capitalize font-weight-bold my-3">Our <span className="service-tag">Services</span></h1>
                <p class="text-secondary" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, ea atque reiciendis saepe et similique eveniet distinctio autem odit blanditiis. </p>
                <p class="text-secondary" > consequatur nesciunt doloribus ad sit reprehenderit, beatae error illo aut!</p>
              </div>
            </div>
            <div class="col-md-6 services-right">

              <div class="row">

                {ServicesInfo.map((s) => (
                  <div className={s.align === "top" ? "col-md-6 p-2 text-center" : "col-md-12 p-2 text-center"} >
                    <div class=" px-3 py-5">

                      <div class="mt-3">
                        <div className="service-img">
                          <img src={s.image} alt="" />
                        </div>
                        <h5 class="mb-2" ><a href="#" class="stretched-link">{s.title}</a></h5>

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
