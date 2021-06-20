import styled from "styled-components";
import variables from "../../styles/variables";
import { fadeIn } from "../../styles/animations";

export default styled.div`
  .about-container {
    animation: ${fadeIn} 0.3s ease-in;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow: hidden;

    // about us intro block
    .section-outer {
      padding: 3.125rem 3.125rem;
      .content {
        text-align: left;
        p:first-of-type {
          font-weight: 600;
        }
        h2 {
          font-weight: 700;
          font-size: 2.1875rem;
        }
        h4 {
          font-weight: 700;
          font-size: 1.25rem;
          margin: 1.875rem 0;
        }
        p:last-of-type {
          font-weight: 400;
          font-size: 1.1rem;
        }
      }
      .section-image {
        padding: 1.25rem 3.125rem;
        text-align: center;
        img {
          width: 30rem;
          max-width: 100%;
          overflow: hidden;
          padding: 0rem 0.625rem;
          border: 1px solid gray;
          border-radius: 2.1875rem;
          box-shadow: 0.125rem 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
        }
      }
    }

    // license block
    .intro-block {
      margin: 0 0 2rem 0;
      flex-basis: 100%;
      flex-grow: 1;
      .intro-block-inner {
        box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
        background: rgb(250, 246, 237);
        background: linear-gradient(
          90deg,
          rgba(250, 246, 237, 1) 0%,
          rgba(247, 250, 255, 1) 100%
        );
        margin: 0 3.125rem;
        display: block;
        padding: 2rem;
        h3 {
          font-size: 2rem;
          overflow: hidden;
          text-align: center;
          padding-bottom: 2rem;
        }
        h3 ::before,
        h3 ::after {
          background-color: black;
          content: "";
          display: inline-block;
          height: 2px;
          position: relative;
          vertical-align: middle;
          width: 50%;
        }
        h3 ::before {
          margin-left: -50%;
          right: 1rem;
        }
        h3 ::after {
          margin-right: -50%;
          left: 1rem;
        }
        .content {
          font-size: 1.1rem;
        }
      }
    }

    // teams block
    .team-block {
      margin-bottom: 4rem;
      .block-member {
        display: flex;
        gap: 3rem;
        padding: 4rem;
        &:nth-child(n):nth-child(-n + 2) {
          border-bottom: 1px solid #d5d5d5;
        }
        .member-img {
          min-width: 300px;
          height: 300px;

          img {
            border-radius: 50%;
            /* border: 1px solid #d5d5d5; */
            padding: 0.3rem;
            width: 100%;
            height: 100%;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            background: rgb(250, 246, 237);
            background: linear-gradient(
              90deg,
              rgba(250, 246, 237, 1) 0%,
              rgba(247, 250, 255, 1) 100%
            );
          }
        }
        .member-info {
          h6 {
            color: #777;
            font-size: 1rem;
          }
          p {
            font-size: 1.1rem;
            margin-top: 2rem;
            color: #000;
          }
        }
      }
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1024px) {
    .about-container {
      .team-block {
        .block-member {
          .member-img {
            min-width: 200px;
            height: 200px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 992px) {
    .section-outer .section-image {
      text-align: center;
      div {
        padding: 0rem 0.625rem;
        border-radius: 2.1875rem;
        box-shadow: 0.125rem 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
        img {
          padding: 0 !important;
          border-radius: none !important;
          box-shadow: none !important;
        }
      }
    }
  }
  @media screen and (max-width: 620px) {
    .about-container {
      .team-block {
        .block-member {
          flex-direction: column;
          .member-img {
            width: 250px;
            height: 250px;
            align-self: center;
          }
        }
      }
    }
  }
`;
