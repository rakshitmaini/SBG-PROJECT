import styled from "styled-components";
import variables from "../../../styles/variables";

export default styled.div`
  .container-fluid {
    background-color: whitesmoke;
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    /* padding: 0 50px; */
    .title {
      padding-top: 2.25rem;
      margin-top: 3.125rem;
      h1 {
        font-weight: 700;
        font-size: 1.875rem;
      }
      h1:last-of-type {
        font-size: 2.5rem;
      }
    }
    .row {
      padding-bottom: 6.25rem;
      .card {
        margin: auto;
        margin-top: 4.375rem;
        padding: 2.5rem;
        width: 21.875rem;
        max-width: 95%;
        border: none;
        border-radius: 1.875rem;
        background-color: rgba(250, 250, 250, 1);
        .card-image {
          i {
            font-size: 3.75rem;
            padding: 1.875rem;
            color: ${variables.primary_color};
          }
        }
        .content {
          h2 {
            font-size: 1.25rem;
            font-weight: 700;
          }
          p {
            font-size: 0.9375rem;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .container-fluid {
      .row {
        margin: 0rem 8.125rem;
      }
    }
  }
`;
