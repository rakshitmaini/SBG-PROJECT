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
        margin-top: 6.25rem;
        font-weight: 700;
        font-size: 1.875rem;
      }
      h1:last-of-type {
        font-weight: 700;
        font-size: 2.5rem;
      }
    }
    .prev-btn {
      z-index: 99;
      position: absolute;
      left: 6.25rem;
      top: 12.5rem;
      width: 21.875rem;
      height: 28.125rem;
      background-color: transparent;
    }
    .next-btn {
      z-index: 99;
      position: absolute;
      right: 6.25rem;
      top: 12.5rem;
      width: 21.875rem;
      height: 28.125rem;
      background-color: transparent;
    }
    .slick-slider {
      .slick-list {
        margin: 6.25rem auto;
        text-align: center;
        .slick-track {
          .slick-slide {
            padding: 0.625rem 3.125rem;
            .card-outer {
              opacity: 1;
              padding: 3.125rem 1.25rem;
              background-color: whitesmoke;
              border-radius: 1.875rem;
              width: 100%;
              height: 450px;
              .card-inner {
                text-align: center;
                width: 25rem;
                max-width: 100%;
                display: grid;
                place-items: center;
                .member-img {
                  min-width: 75px;
                  height: 175px;
                  width: 175px;
                  img {
                    border-radius: 50%;
                    margin: auto;
                    width: 100%;
                    height: 100%;

                    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                    background: rgb(250, 246, 237);
                    background: linear-gradient(
                      90deg,
                      rgba(250, 246, 237, 1) 0%,
                      rgba(247, 250, 255, 1) 100%
                    );
                  }
                }
                .card-content {
                  margin: 1.875rem 0;
                  p {
                    font-size: 0.9375rem;
                  }
                  h2 {
                    font-size: 1.25rem;
                    font-weight: 600;
                  }
                }
              }
            }
          }
          .slick-center {
            -webkit-transform: scale(1.25);
            -moz-transform: scale(1.25);
            transform: scale(1.09) !important;
            padding: 1.25rem;
            .card-outer {
              opacity: 1 !important;
              background-color: whitesmoke;
              border-radius: 0;
              width: 100%;
              .card-inner {
                text-align: center;
                width: 25rem;
                max-width: 100%;
                .card-image {
                  img {
                    margin: auto;
                    border-radius: 50%;
                  }
                }
                .card-content {
                  margin: 1.875rem 0;
                  p {
                    font-size: 0.9375rem;
                  }
                  h2 {
                    font-size: 1.25rem;
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
        width: 25rem;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .member-img {
      min-width: 75px;
      height: auto;

      img {
        border-radius: 50%;
        /* border: 1px solid #d5d5d5; */
        margin: auto;
        width: 150px !important;
        height: 150px !important;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        background: rgb(250, 246, 237);
        background: linear-gradient(
          90deg,
          rgba(250, 246, 237, 1) 0%,
          rgba(247, 250, 255, 1) 100%
        );
      }
    }
    .card-outer {
      opacity: 1;
      padding: 3.125rem 1.25rem;
      background-color: whitesmoke;
      border-radius: 1.875rem;
      width: 100%;
      height: auto !important;
    }
  }
  @media screen and (min-width: 1200px) and (max-width: 1321px) {
    .card-outer {
      opacity: 1;
      padding: 3.125rem 1.25rem;
      background-color: whitesmoke;
      border-radius: 1.875rem;
      width: 100%;
      height: 470px !important;
    }
  }
  @media screen and (min-width: 1111px) and (max-width: 1200px) {
    .card-outer {
      opacity: 1;
      padding: 3.125rem 1.25rem;
      background-color: whitesmoke;
      border-radius: 1.875rem;
      width: 100%;
      height: 440px !important;
    }
  }
  @media screen and (max-width: 1024px) {
    .card-outer {
      opacity: 1;
      padding: 3.125rem 1.25rem;
      background-color: whitesmoke;
      border-radius: 1.875rem;
      width: 100%;
      height: 440px !important;
    }
  }
  @media screen and(min-width:661px) and (max-width: 768px) {
    .card-outer {
      opacity: 1;
      padding: 3.125rem 1.25rem;
      background-color: whitesmoke;
      border-radius: 1.875rem;
      width: 100%;
      height: 370px !important;
      p {
        font-size: 0.9375rem !important;
        font-weight: 500 !important;
      }
    }
  }
  @media screen and(min-width:481px) and (max-width: 539px) {
    .card-outer {
      opacity: 1;
      padding: 3.125rem 1.25rem;
      background-color: whitesmoke;
      border-radius: 1.875rem;
      width: 100%;
      height: 480px !important;
      p {
        font-size: 0.9375rem !important;
        font-weight: 500 !important;
      }
    }
    .member-img {
      min-width: 75px;
      height: auto;

      img {
        border-radius: 50%;
        /* border: 1px solid #d5d5d5; */
        margin: auto;
        width: 120px !important;
        height: 120px !important;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        background: rgb(250, 246, 237);
        background: linear-gradient(
          90deg,
          rgba(250, 246, 237, 1) 0%,
          rgba(247, 250, 255, 1) 100%
        );
      }
    }
  }
`;
