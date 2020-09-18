import styled from "styled-components";
import variables from "../../styles/variables";

export default styled.div`
  div {
    width: 100%;
    background-color: transparent;
    .nav-outer {
      position: absolute;
      z-index: 9999;
      padding: 10px 50px;
      width: 100%;
      /* height: 70px; */
      display: flex;
      align-content: center;
      justify-content: space-around;
      .nav-logo {
      }
      .nav-buttons {
        background-color: rgba(240, 240, 240, 0.37);
        box-shadow: 0 5px 15px gray;
        color: black;
        border-radius: 10px;
        width: 500px;
        display: flex;
        font-weight: 600;
        div {
          /* width: 70px; */
          cursor: pointer;
          margin: 0 15px;
          line-height: 70px;
        }
      }
    }
  }
`;
