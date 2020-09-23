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
            /* width: 33%; */
            padding: 0.625rem 3.125rem;
            .card-outer {
              opacity: 0.3;
              padding: 3.125rem 1.25rem;
              background-color: whitesmoke;
              border-radius: 1.875rem;
              width: 100%;
              .card-inner {
                text-align: center;
                width: 25rem;
                max-width: 100%;
                .card-image {
                  img {
                    width: 9.375rem;
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
          .slick-center {
            -webkit-transform: scale(1.25);
            -moz-transform: scale(1.25);
            transform: scale(1.1) !important;
            padding: 1.25rem;
            .card-outer {
              opacity: 1 !important;
              background-color: whitesmoke;
              border-radius: 0;
              width: 100%;
              .card-inner {
                /* padding: 30px 10px; */
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
`;
