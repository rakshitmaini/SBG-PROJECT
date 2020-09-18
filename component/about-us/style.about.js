import styled from "styled-components";

export default styled.div`
  .container-fluid {
    margin: 0;
    padding: 0;
    width: 100%;
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
        left: 40px;
        h1 {
          font-weight: 700;
          font-size: 55px;
          color: white;
        }
        h3 {
          color: rgb(68, 85, 90);
          font-weight: 700;
          font-size: 20px;
        }
      }
    }
  }
`;
