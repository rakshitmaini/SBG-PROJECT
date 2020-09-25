import styled from "styled-components";
import { fadeIn } from "../../../styles/animations";

export default styled.div`
  .container-fluid {
    animation: ${fadeIn} 0.3s ease-in;
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    .overlay {
      width: 100%;
      height: 100vh;
      background-color: black;
      position: absolute;
      top: 4.375rem;
      opacity: 0;
      z-index: 1;
    }
    .overlay-text {
      z-index: 999;
      width: 100%;
      padding: 3.125rem;
      background-color: rgba(68, 85, 90, 0.3);
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      h1 {
        font-weight: 700;
        font-size: 2.5rem;
      }
      h3 {
        font-weight: 500;
      }
    }

    .banner-image img {
      object-fit: cover;
      /* height: 700px; */
      height: 100vh;
    }
    .slick-dots {
      z-index: 2;
      position: absolute;
      bottom: 2.5rem;
      li {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background-color: whitesmoke;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .overlay-text {
      h1 {
        font-size: 1.875rem;
      }
    }
  }
`;
