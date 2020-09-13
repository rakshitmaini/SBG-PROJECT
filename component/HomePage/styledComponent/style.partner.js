import styled from "styled-components";

export default styled.div`

.slider-main {
  -webkit-box-align: center;
  align-items: center;
  background: #E3E3E3;
  display: -webkit-box;
  display: flex;
  /* height: 25vh; */
  -webkit-box-pack: center;
  justify-content: center;
}

@-webkit-keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    -webkit-transform: translateX(calc(-250px * 7));
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    -webkit-transform: translateX(calc(-250px * 4));
    transform: translateX(calc(-250px * 4));
  }
}

.slide-track{
margin-top:1.9rem;
}
.slider {
  background: azure;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 150px;
  line-height:50px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slider::before,
.slider::after {
  background: -webkit-gradient(linear, left top, right top, from(white), to(rgba(255, 255, 255, 0)));
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slider .slide-track {
  -webkit-animation: scroll 40s linear infinite;
  animation: scroll 40s linear infinite;
  display: -webkit-box;
  display: flex;
  width: calc(250px * 8);
}

.slider .slide {
  margin:0rem 1.2rem 0rem 1.2rem;
  height: 100px;
  width: 250px;
}

  
`;