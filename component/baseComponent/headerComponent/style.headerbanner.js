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
    img {
      margin: auto;
      width: 100%;
      height: 25rem;
    }
    .title {
      z-index: 2;
      position: absolute;
      top: 17.5rem;
      left: 5rem;
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
`;
