import React from 'react'
import Slider from "react-slick";
import TeamWrapper from './styledComponent/style.team';
// import Button from "@material-ui/core";
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

]
const settings = {
  dots: true,
  // centerMode: true,
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
};

const Team = () => {
  { console.log(teamData.centerMode); }
  return (
    <>
      <TeamWrapper>
        <div className="team-slider">
          <Slider {...settings} centerMode={true}>
            {
              teamData.map((key) => (
                <button>
                  <article className="row">
                    <figure>
                      <img alt="A rather marvellous macaw, opening one of its wings to support the cause." src={key.src} />
                    </figure>

                    <div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?
                    </p>
                      <h1>
                        Marvellous Macaw
                    </h1>
                    </div>
                  </article>


                </button>
              ))
            }

          </Slider>
        </div>
      </TeamWrapper>
    </>
  )
}

export default Team
