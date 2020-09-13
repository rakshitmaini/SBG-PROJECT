import styled from "styled-components";

export default styled.div`
  .container-fluid {
    background-color: whitesmoke;
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    /* padding: 0 50px; */
    .title {
      padding-top: 100px;
      margin-top: 50px;
      h1 {
        font-weight: 700;
        font-size: 30px;
      }
      h1:last-of-type {
        font-size: 40px;
      }
    }
    .row {
      padding-bottom: 100px;
      .card {
        margin: auto;
        margin-top: 70px;
        padding: 40px;
        width: 350px;
        max-width: 95%;
        border: none;
        border-radius: 30px;
        background-color: rgba(250, 250, 250, 1);
        .card-image {
          i {
            font-size: 60px;
            padding: 30px;
            color: rgb(68, 85, 90);
          }
        }
        .content {
          h2 {
            font-size: 20px;
            font-weight: 700;
          }
          p {
            font-size: 15px;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .container-fluid {
      .row {
        margin: 0px 130px;
      }
    }
  }
`;
