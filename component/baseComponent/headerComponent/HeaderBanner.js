import React from "react";
import HeaderWrapper from "./style.headerbanner";
const HeaderBanner = (props) => {
  return (
    <>
      <HeaderWrapper>
        <div className="header">
          <div className="banner-img">
            <img src={props.img} />
          </div>

          <div className="overlay"></div>
          <div className="title">
            <h3>{props.intro}</h3>
            <h1>{props.tag}</h1>
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default HeaderBanner;
