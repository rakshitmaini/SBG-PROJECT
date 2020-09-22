import styled from "styled-components";
import variables from '../../../styles/variables';
export default styled.div`
.header {
      position: relative;
      .overlay {
        width: 100%;
        height: 400px;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 1;
        position: absolute;
        top: 0;
      }
      img {
        /* max-height: 500px; */
        height: 400px;
        display: block;
      }
      .title {
        z-index: 2;
        position: absolute;
        top: 280px;
        left: 80px;
        h1 {
          font-weight: 700;
          font-size: 55px;
          color: white;
        }
        h3 {
          color: ${variables.primary_color};
          font-weight: 700;
          font-size: 25px;
        }
      }
    }
`;