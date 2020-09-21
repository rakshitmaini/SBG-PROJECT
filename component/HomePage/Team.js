import React, { Component } from "react";
import Slider from "react-slick";
import TeamWrapper from "./styledComponent/style.team";
class Team extends Component {
  render() {
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
    return (
      <>
        <TeamWrapper>
          <div className="container-fluid">
            <div className="title">
              <h1>Team</h1>
              <h1>Our Squad</h1>
            </div>
            <Slider {...settings}>
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

            {/* <Slider
              className="container-fluid row"
              {...settings}
              centerMode={true}
            >
              {teamData.map((key) => (
                <div className="col-list col-md-4">
                  <div className="slide-outer">
                    <div className="card row">
                      <div clasName="card-image">
                        <img
                          class="card-img-top rounded-circle"
                          src={key.src}
                          alt="Card image cap"
                        />
                      </div>
                      <div className="slide-content">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Corrupti repellat, consequuntur doloribus
                          voluptate esse iure?
                        </p>
                        <h1>Marvellous Macaw</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider> */}
          </div>
        </TeamWrapper>
      </>
    );
  }
}

export default Team;
