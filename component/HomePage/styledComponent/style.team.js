import styled from "styled-components";

export default styled.div`
  .container-fluid {
    position: relative;
    margin: auto;
    padding: 0;
    width: 100%;
    text-align: center;
    .title {
      h1:first-of-type {
        margin-top: 100px;
        font-weight: 700;
        font-size: 30px;
      }
      h1:last-of-type {
        font-weight: 700;
        font-size: 40px;
      }
    }
    .prev-btn {
      z-index: 99;
      position: absolute;
      left: 100px;
      top: 200px;
      width: 350px;
      height: 450px;
      background-color: transparent;
    }
    .next-btn {
      z-index: 99;
      position: absolute;
      right: 100px;
      top: 200px;
      width: 350px;
      height: 450px;
      background-color: transparent;
    }
    .slick-slider {
      .slick-list {
        margin: 100px auto;
        text-align: center;
        .slick-track {
          .slick-slide {
            /* width: 33%; */
            padding: 10px 50px;
            .card-outer {
              opacity: 0.3;
              padding: 50px 20px;
              background-color: whitesmoke;
              border-radius: 30px;
              width: 100%;
              .card-inner {
                text-align: center;
                width: 400px;
                max-width: 100%;
                .card-image {
                  img {
                    width: 150px;
                    margin: auto;
                    border-radius: 50%;
                  }
                }
                .card-content {
                  margin: 30px 0;
                  p {
                    font-size: 15px;
                  }
                  h2 {
                    font-size: 20px;
                    font-weight: 600;
                  }
                }
              }
            }
          }
          .slick-center {
            -webkit-transform: scale(1.25);
            -moz-transform: scale(1.25);
            transform: scale(1.1) !important;
            padding: 20px;
            .card-outer {
              opacity: 1 !important;
              background-color: whitesmoke;
              border-radius: 0;
              width: 100%;
              .card-inner {
                /* padding: 30px 10px; */
                text-align: center;
                width: 400px;
                max-width: 100%;
                .card-image {
                  img {
                    margin: auto;
                    border-radius: 50%;
                  }
                }
                .card-content {
                  margin: 30px 0;
                  p {
                    font-size: 15px;
                  }
                  h2 {
                    font-size: 20px;
                    font-weight: 600;
                  }
                }
              }
            }
          }
        }
      }
    }
    .card-outer {
      text-align: center;
      .card-inner {
        width: 400px;
      }
    }
  }
`;
