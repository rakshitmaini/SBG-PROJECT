import styled from "styled-components";
import variables from "../../styles/variables";
import { fadeIn } from "../../styles/animations";

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
      padding: 10px 3.125rem;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      .nav-logo img {
        cursor: pointer;
        width: 9.375rem;
      }
      .nav-icon {
        display: none;
      }
      .nav-buttons {
        font-size: 1.25rem;
        color: black;
        display: flex;
        justify-content: flex-end;
        flex-wrap: nowrap;
        font-weight: 500;
        div {
          max-width: 110px;
          color: #e05414;
          text-align: center;
          border-radius: 1.25rem;
          /* width: 70px; */
          cursor: pointer;
          margin: 0;
          line-height: 3.25rem;
          a {
            text-decoration: none;
            color: #e05414;
          }
        }
        div:nth-child(3) {
          margin-right: 0.8rem;
        }
        .nav-icon {
          display: block;
          width: 27.44px;
          float: right;
          i {
            line-height: 50px;
          }
        }
      }
    }
  }
  .overlay-btns {
    display: none;
  }
  @media screen and (max-width: 776px) {
    div {
      .nav-outer {
        .nav-icon {
          display: flex;
          width: auto;
          i {
            line-height: 50px;
          }
        }
        .nav-buttons {
          display: none;
        }
      }
    }
    .overlay-btns {
      position: fixed;
      display: block;
      background-color: rgba(240, 240, 240, 1);
      z-index: 9999;
      top: 90px;
      right: 50px;
      width: 200px;
      border: 0.3px solid rgb(255, 176, 0);
      .up {
        position: absolute;
        top: -21px;

        color: rgba(240, 240, 240, 1);
        left: 160px;
      }
      .page-links {
        a {
          padding: 5px 10px;
          display: block;
          text-decoration: none;
          width: 100%;
          color: #e05414;
        }
      }
      .page-links:hover {
        background-color: rgba(250, 250, 250, 1);
      }
    }
  }
`;
