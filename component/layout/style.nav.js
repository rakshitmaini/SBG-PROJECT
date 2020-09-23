import styled from "styled-components";
import variables from "../../styles/variables";

export default styled.div`
  div {
    width: 100%;
    .nav-outer {
      background-color: rgba(240, 240, 240, 1);
      border-radius: 1.875rem;
      width: 95%;
      height: 4.375rem;
      position: fixed;
      top: 0.625rem;
      left: 50%;
      transform: translateX(-50.5%);
      z-index: 9999;
      padding: 0.625rem 3.125rem;
      /* height: 70px; */
      display: flex;
      align-content: center;
      justify-content: space-between;
      .nav-logo img {
        cursor: pointer;
        width: 9.375rem;
      }
      .nav-buttons {
        font-size: 1.25rem;
        color: black;
        max-width: 25rem;
        display: flex;
        font-weight: 500;
        div {
          text-align: center;
          border-radius: 1.25rem;
          /* width: 70px; */
          cursor: pointer;
          margin: 0;
          line-height: 3.25rem;
        }
        div:hover {
          /* background-color: rgb(0, 0, 0, 0.1); */
          color: #e05414;
        }
      }
    }
  }
`;
