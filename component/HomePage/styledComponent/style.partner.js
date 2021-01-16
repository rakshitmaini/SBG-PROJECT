import styled from "styled-components";

export default styled.div`
  .container-fluid {
    margin-bottom: 6.25rem;
    text-align: center;
    .title {
      h1 {
        padding: 6.25rem 0rem 4.375rem 0rem;
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
      }
    }
    .slider-block {
      display: inline-block;
      position: relative;

      .prev {
        position: absolute;
        top: 50%;
        left: -0.625rem;
        transform: translateY(-50%);
      }
      .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -0.625rem;
      }
      .slider-outer {
        max-width: 100%;
        overflow: hidden;
        margin: auto;
        .slick-list {
          width: calc(140 * 6px);
          display: inline-block;
          .slick-track {
            text-align: center;
            .slick-slide {
              padding: 0 0.625rem;
              display: inline-block;
              text-align: center;
              .slide {
                padding: 2.5rem;
                width: 7.5rem !important;
                height: 7.5rem;
                background-color: whitesmoke;
                border: none;
                border-radius: 1.25rem;
                i {
                  font-size: 2.5rem;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 885px) {
    .slider-outer {
      .slick-list {
        width: calc(140 * 4px) !important;
      }
    }
  }
`;
