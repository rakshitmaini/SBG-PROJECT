import styled from "styled-components";

export default styled.div`
  .container-fluid {
    margin-bottom: 100px;
    text-align: center;
    .title {
      h1 {
        padding: 100px 0 70px 0;
        text-align: center;
        font-size: 40px;
        font-weight: 700;
      }
    }
    .slider-block {
      display: inline-block;
      position: relative;

      .prev {
        position: absolute;
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
      }
      .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -10px;
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
              padding: 0 10px;

              display: inline-block;
              text-align: center;
              .slide {
                padding: 40px;
                width: 120px !important;
                height: 120px;
                background-color: whitesmoke;
                border: none;
                border-radius: 20px;
                i {
                  font-size: 40px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 930px) {
  }
`;
