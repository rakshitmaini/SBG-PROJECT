import styled from "styled-components";
import variables from "../../../styles/variables";
export default styled.div`
  .header {
    position: relative;
    height: 25rem;
    overflow: hidden;
    .overlay {
      width: 100%;
      height: 25rem;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 1;
      position: absolute;
      top: 0;
    }
    .banner-img {
      height: 25rem;
      width: 100%;
      img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        max-height: 25rem;
      }
    }
    .title {
      z-index: 2;
      position: absolute;
      top: 16rem;
      padding: 1.25rem 0;
      padding-left: 3.125rem;
      background-color: #00000088;
      width: 100%;
      h1 {
        font-weight: 700;
        font-size: 3.5rem;
        color: ${variables.primary_color};
      }
      h3 {
        color: ${variables.secondary_color};
        font-weight: 700;
        font-size: 1.5625rem;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .header {
      .title {
        h1 {
          font-size: 3rem;
        }
      }
    }
  }
  @media screen and (max-width: 675px) {
    .banner-img {
      height: 25rem;
      width: 100%;
      img {
        position: absolute;
        left: 45%;
        transform: translateX(-50%);
        max-height: 25rem;
      }
    }
  }
`;
