import styled from "styled-components";
import variables from "../../../styles/variables";

export default styled.div`
  .container-fluid {
    padding: 0;
    margin: 0;
    width: 100%;
    .contact-outer {
      padding: 3.125rem;

      form {
        padding-right: 2rem;
        input,
        textarea {
          background-color: #f5f2f2;
        }

        label {
          font-weight: 600;
        }
        button {
          margin-top: 0.8rem;
          margin-bottom: 1.3rem;
        }
      }
      .container-fluid__head-office {
        padding: 1rem 1rem 0rem 0rem;
        span {
          color: blue;
          font-size: 1.3rem;
        }
        .social-icons {
          width: 60%;
          padding-top: 1rem;
          i {
            font-size: 1.6rem;
          }
          i:hover {
            font-size: 1.9rem;
          }
          .fb {
            color: blue;
          }
          .twitter {
            color: purple;
          }
          .youtube {
            color: red;
          }
          .google {
            color: orangered;
          }
        }
      }
    }
    .container-fluid__offices-outer {
      padding: 3.125rem;

      hr {
        border-width: thin;
        border-color: darkblue;
      }
    }
  }
  .container-fluid__offices-data {
    background-color: #f5f8fa;
    margin-top: 0rem;

    .row {
      padding: 3rem 3rem;
      display: grid;
      grid-template-columns: 50% 50%;

      .container-fluid__offices-text {
        margin-top: 2rem;
        .container-fluid__office-name {
          color: #33475b;
          font-size: 28px;
          font-weight: 600;
        }
        h4 {
          color: #33475b;
          font-size: 18px;
          font-weight: 600;
          line-height: 29px;
          margin-top: 20px;
        }
      }
      .container-fluid__office-image {
        img {
          width: 500px;
          height: 350px;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
            rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
            rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    .container-fluid__office-image {
      img {
        width: 100% !important;
        height: 400px !important;
      }
    }
    .container-fluid__offices-data {
      background-color: #d4ebf2;

      div:nth-child(2) {
        padding-left: 3rem;
        display: grid;
      }
    }
  }
  @media screen and (max-width: 675px) {
    .container-fluid__office-image {
      img {
        width: 100% !important;
        height: 400px !important;
      }
    }
    .container-fluid__offices-data {
      background-color: #d4ebf2;
      div:nth-child(2) {
        padding-left: 0rem;
        display: grid;
      }
      .row:nth-child(odd) {
        padding: 3rem 3rem;
        display: grid;

        grid-template-columns: 100%;
        /* div:nth-child(2) {
          order: 2;
        } */
      }
      .row:nth-child(even) {
        display: grid;
      }
    }
    .container-fluid__offices-data:nth-child(odd) {
      .row {
        div:nth-child(1) {
          order: 2;
        }
      }
    }
    form {
      padding-right: 0rem;
    }
  }
  @media screen and (max-width: 450px) {
    .container-fluid__office-image {
      img {
        width: 300px !important;
        height: 100% !important;
      }
    }
    form {
      padding-right: 0rem;
    }
  }
`;
