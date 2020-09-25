import styled from "styled-components";
import variables from "../../styles/variables";
import { fadeIn } from "../../styles/animations";

export default styled.div`
  .container-fluid {
    animation: ${fadeIn} 0.3s ease-in;
    margin: 0;
    padding: 0;
    width: 100%;

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
        }
      }
      .section-image {
        padding: 1.25rem 3.125rem;
        text-align: center;
        img {
          width: 25rem;
          max-width: 100%;
          overflow: hidden;
          padding: 0rem 0.625rem;
          /* border: 0.01px solid gray; */
          border-radius: 2.1875rem;
          box-shadow: 0.125rem 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
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
  @media screen and (max-width: 992px) {
    .section-outer .content {
      text-align: center !important;
    }
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
`;
