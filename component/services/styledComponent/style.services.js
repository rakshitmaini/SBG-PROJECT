import styled from "styled-components";
import variables from "../../../styles/variables";

export default styled.div`
  .container-fluid {
    /* animation: ${fadeIn} 3s ease-in; */
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    .title {
      margin-top: 35px;
      h1 {
        font-weight: 700;
        font-size: 30px;
      }
      h1:last-of-type {
        font-size: 40px;
      }
    }
    .row {
      display: flex !important;
      flex-direction: row-gap !important;
      margin: 50px auto;
      max-width: 1600px;
      /* flex-wrap: wrap-reverse !important; */
      .image-block img {
        max-width: 100%;
        width: 400px;
      }
      .content-block {
        order: 1;
        padding: 0 50px;
        float: left;
        .count {
          display: block;
          font-size: 70px;
          color: lightgray;
          font-weight: 700;
          text-align: left;
          margin-bottom: 20px;
        }
        div:last-of-type {
          h3 {
            font-weight: 700;
            text-align: left;
          }
          p {
            clear: both;
            text-align: left;
            float: left;
          }
          button {
            cursor: pointer;
            color: whitesmoke;
            font-weight: 600;
            float: left;
            margin-top: 20px;
            font-size: 22px;
            background-color: ${variables.primary_color};
            border: none;
            box-shadow: 2px 3px 10px 2px blue;

            border-radius: 50px;
            padding: 7px 10px;
          }
        }
      }
    }
  }
`;
