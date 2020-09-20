import React, { Component } from 'react'
import Slider from "react-slick";
import TeamWrapper from './styledComponent/style.team';
class Team extends Component {

  render() {
    const teamData = [
      {
        name: 'ABC',
        profile: '',
        introLine: '',
        src: '/images/sud.jpg'
      },
      {
        name: 'DEF',
        profile: '',
        introLine: '',
        src: '/images/sud.jpg'
      },
      {
        name: 'GHI',
        profile: '',
        introLine: '',
        src: '/images/sud.jpg'
      },
      {
        name: 'JKL',
        profile: '',
        introLine: '',
        src: '/images/sud.jpg'
      }

    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 30000,
      autoplay: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

          }
        },
      ]
    };
    return (
      <>
        <TeamWrapper>
          <div className="team-slider">
            <h2>
              <span>~~~</span> Our Team <span>~~~</span>
            </h2>

            <Slider className="container-fluid row" {...settings} centerMode={true}>


              {
                teamData.map((key) => (
                  <div className="col-list col-md-4">
                    <div className="slide-outer">

                      <div className="card row">
                        {/* <figure className="col-12">
                            <img alt="A rather marvellous macaw, opening one of its wings to support the cause." src={key.src} />
                          </figure> */}
                        <div clasName="card-image">
                          <img class="card-img-top rounded-circle" src={key.src} alt="Card image cap" />
                        </div>
                        <div className="slide-content">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?
                    </p>
                          <h1>
                            Marvellous Macaw
                    </h1>
                        </div>
                      </div>


                    </div>

                  </div>
                ))
              }



            </Slider>


          </div>
        </TeamWrapper>
      </>
    )
  }
}

export default Team;
