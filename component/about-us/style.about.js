import styled from "styled-components";
import variables from "../../styles/variables";
import { fadeIn } from "../../styles/animations";

export default styled.div`
  .container-fluid {
    animation: ${fadeIn} 0.7s ease-in;
    margin: 0;
    padding: 0;
    width: 100%;
    
    .section-outer {
      padding: 50px 80px;
      .content {
        text-align: left;
        p:first-of-type {
          font-weight: 600;
        }
        h2 {
          font-weight: 700;
          font-size: 35px;
        }
        h4 {
          font-weight: 700;
          font-size: 20px;
          margin: 30px 0;
        }
        p:last-of-type {
          font-weight: 400;
        }
      }
      .section-image {
        padding: 20px 50px;
        text-align: center;
        img {
          width: 400px;
          max-width: 100%;
          overflow: hidden;
          padding: 0px 10px;
          /* border: 0.01px solid gray; */
          border-radius: 35px;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
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
        padding: 0px 10px;
        /* border: 0.01px solid gray; */
        border-radius: 35px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        img {
          padding: 0 !important;
          border-radius: none !important;
          box-shadow: none !important;
        }
      }
    }
  }
`;
