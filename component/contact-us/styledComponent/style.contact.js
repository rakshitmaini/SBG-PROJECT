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
          color: darkblue;
          padding: 0.8rem;
        }

        label {
          font-weight: 600;
        }
        button {
          font-size: 1.3rem;
          margin-top: 0.8rem;
          margin-bottom: 1.3rem;
          padding: 1.2rem;
        }
      }
      .container-fluid__head-office {
        padding: 1rem 1rem 0rem 0rem;
        span {
          color: ${variables.primary_color};
          font-size: 1.3rem;
          cursor: pointer;
        }
        .social-icons {
          width: 60%;
          padding-top: 1rem;
          margin-left: 0rem;
          i {
            font-size: 1.6rem;
            margin-right: 1.4rem;
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
      padding: 0rem 3.125rem 0rem 3.125rem;
      p {
        font-size: 1rem;
        font-weight: 600;
      }
      h2 {
        color: ${variables.primary_color};
      }
      hr {
        border-width: thin;
        border-color: darkblue;
      }
    }
  }
  .container-fluid__offices-data {
    background-color: #f5f8fa;
    margin-top: 3px;
    padding: 3rem 0;
    .row {
      padding: 0.5rem 3.125rem 0.5rem 3.125rem;
      display: grid;
      grid-template-columns: 50% 50%;

      .container-fluid__offices-text {
        margin-top: 2rem;
        margin-right: 3.5rem;
        .container-fluid__office-name {
          color: #33475b;
          font-size: 28px;
          font-weight: 600;
        }
        h4 {
          color: #33475b;
          text-transform: uppercase;
          /* text-decoration: underline; */
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 29px;
          margin-top: 20px;
          &:first-child {
            /* background-color: rgba(228, 241, 254, 1);
            padding: 1.5rem 0.2rem; */
          }
        }
        span {
          font-size: 1.1rem;
          font-weight: 400;
        }
      }
      .container-fluid__office-details {
        /* padding-left: 10rem; */
        .container-fluid__offices-text {
          max-width: 400px;
        }
      }
      .container-fluid__office-image {
        img {
          width: 500px;
          height: 350px;
          border: 2px solid #d5d5d5;
          padding: 10px;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
      div:nth-child(2) {
        padding-left: 3rem;
        display: grid;
      }
    }
  }
  @media screen and (max-width: 1105px) {
    .container-fluid__offices-data {
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
      div:nth-child(2) {
        padding-left: 0rem;
        display: grid;
      }
      .row:nth-child(odd) {
        display: grid;

        grid-template-columns: 100%;
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
      text-align: center;
      align-items: center;
      img {
        width: 100% !important;
        height: 100% !important;
      }
    }
    form {
      padding-right: 0rem !important;
    }
  }
`;
