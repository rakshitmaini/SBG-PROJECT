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
      top: 17.5rem;
      left: 3.125rem;
      h1 {
        font-weight: 700;
        font-size: 3.5rem;
        color: white;
      }
      h3 {
        color: ${variables.primary_color};
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
`;
