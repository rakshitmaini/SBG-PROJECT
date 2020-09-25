import styled from "styled-components";
import variables from "../../../styles/variables";
import { fadeIn } from "../../../styles/animations";

export default styled.div`
  .container-fluid {
    animation: ${fadeIn} 0.3s ease-in;
    padding: 0;
    margin: 0;
    width: 100%;
    .contact-outer {
      margin: 50px auto;
      h1 {
        text-align: center;
        font-size: 30px;
        font-weight: 600;
        color: ${variables.primary_color};
      }
      h3 {
        text-align: center;
        font-size: 20px;
        font-weight: 500;
      }
      .contact-inner {
        display: flex;
        justify-content: flex-start;
        div {
          p:first-of-type {
            margin: 100px 10% 50px 10%;
            font-size: 20px;
            color: gray;
          }
          p {
            margin: 0 10% 0 10%;
          }
          h2 {
            margin: 0 10% 0 10%;
            /* margin: 100px 10% 0 10%; */
            font-size: 60px;
            font-weight: 700;
          }
        }
        .contact-form {
          margin: 50px 0;
          form {
            margin: auto;
            /* text-align: center; */
            width: 420px;
            max-width: 100%;
            justify-content: space-around;
            padding: 30px 50px;
            background-color: whitesmoke;
            border-radius: 10px;
            div {
              margin: 20px auto;
              label {
                text-align: left;
                float: left;
              }
              input {
                background-color: transparent;
                font-weight: 500;
                width: 300px;
                /* text-align: right; */
                padding: 10px 20px;
                border: 2px solid slategray;
                border-radius: 5px;
              }
              input:focus {
                outline: none;
              }
              input::placeholder {
                color: lightgray;
                font-weight: 450;
              }
              textarea {
                background-color: transparent;
                font-weight: 500;
                width: 300px;
                padding: 10px 20px;
                border: 2px solid slategray;
                border-radius: 5px;
              }
              textarea:focus {
                outline: none;
              }
              textarea::placeholder {
                color: lightgray;
                font-weight: 450;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    .contact-inner {
      .col-md-12 {
        p,
        h2 {
          text-align: center;
        }
        p:first-of-type {
          margin-top: 50px !important;
        }
      }
    }
  }
  @media screen and (max-width: 675px) {
    .contact-inner {
      .col-md-12 {
        h2 {
          font-size: 40px !important;
        }
      }
    }
  }
  @media screen and (max-width: 450px) {
    .contact-inner {
      .contact-form {
        form {
          margin: 0;
          text-align: center;
          /* padding: 30px 0 !important; */
          width: 100% !important;
          input,
          textarea {
            width: 100% !important;
          }
        }
      }
    }
  }
`;
