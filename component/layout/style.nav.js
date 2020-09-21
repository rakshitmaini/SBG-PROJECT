import styled from "styled-components";
import variables from "../../styles/variables";

export default styled.div`
  div {
    width: 100%;
    .nav-outer {
      background-color: rgba(240, 240, 240, 1);
      border-radius: 30px;
      width: 95%;
      height: 70px;
      position: fixed;
      top: 10px;
      left: 50%;
      transform: translateX(-50.5%);
      z-index: 9999;
      padding: 10px 50px;
      /* height: 70px; */
      display: flex;
      align-content: center;
      justify-content: space-between;
      .nav-logo img {
        cursor: pointer;
        width: 150px;
      }
      .nav-buttons {
        font-size: 20px;
        color: black;
        max-width: 400px;
        display: flex;
        font-weight: 500;
        div {
          text-align: center;
          border-radius: 20px;
          /* width: 70px; */
          cursor: pointer;
          margin: 0;
          line-height: 52px;
        }
        div:hover {
          /* background-color: rgb(0, 0, 0, 0.1); */
          color: #e05414;
        }
      }
    }
  }
`;
