import styled from "styled-components";

export const BannerWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7rem 7rem 0 7rem;
  /* border-bottom: 12px solid whitesmoke; */
  background: rgb(15, 11, 13);
  background: linear-gradient(
      90deg,
      rgba(15, 11, 13, 1) 0%,
      rgba(73, 88, 111, 1) 66%,
      rgba(192, 200, 210, 1) 100%
    ),
    url("/vision-assets/vision-bg.jpg");
  background-blend-mode: screen;
  .content {
    z-index: 4;

    h2 {
      color: white;
      font-weight: 700;
      font-size: 4rem;
    }
    p {
      color: black;
      background-color: white;
      display: inline;
      /* font-weight: 700; */
      font-size: 1.5rem;
    }
  }
  .quote-img {
    z-index: 4;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    img {
      padding: 20px;
      max-width: 450px;
    }
  }
  #svg,
  .wave {
    z-index: 3;
    position: absolute;
    bottom: -1px;
    left: 0;
  }
  @media screen and (max-width: 950px) {
    padding: 6rem 3rem;
    .quote-img {
      img {
        max-width: 400px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 4rem 3rem;
    .quote-img {
      img {
        max-width: 400px;
      }
    }
  }
  @media screen and (max-width: 620px) {
    padding: 10rem 3rem;
    text-align: center;
    flex-direction: column;
    gap: 6rem;
    .quote-img {
      img {
        padding: 10px;

        max-width: 350px;
      }
    }
  }
`;

export const IntroWrapper = styled.section`
  margin-top: 4rem;
  .section-outer {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    /* justify-content: space-around; */
    place-content: center;
    .section-inner {
      width: 45%;
      margin: 0;
      max-width: 700px;

      .block-head {
        display: block;
        h3 {
          overflow: hidden;
          text-align: center;
        }
        h3 ::before,
        h3 ::after {
          background-color: #d5d5d5;
          content: "";
          display: inline-block;
          height: 2px;
          position: relative;
          vertical-align: middle;
          width: 50%;
        }
        h3::before {
          right: 1rem;
          margin-left: -50%;
        }
        h3::after {
          left: 1rem;
          margin-right: -50%;
        }
      }
      .block-body {
        padding: 1rem;
        font-size: 1.2rem;
      }
    }
  }
  @media screen and (max-width: 620px) {
    margin-top: 14rem;
    .section-outer {
      flex-direction: column;
      .section-inner {
        width: 85%;
      }
    }
  }
`;

export const ValuesWrapper = styled.section`
  margin-top: 6rem;
  .values-outer {
    padding: 4rem 1rem;
    background: rgb(211, 210, 210);
    background: linear-gradient(
      90deg,
      rgba(211, 210, 210, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    .values-head {
      width: 92%;

      margin: auto;
      h3 {
        overflow: hidden;
        text-align: center;
        font-weight: 600;
        font-size: 2.5rem;
      }
      h3::before,
      h3::after {
        content: "";
        width: 50%;
        height: 3px;
        position: relative;
        background-color: #c5c5c5;
        display: inline-block;
        vertical-align: middle;
      }
      h3 ::before {
        margin-left: -50%;
        right: 1rem;
      }
      h3 ::after {
        margin-right: -50%;
        left: 1rem;
      }
    }
    .values-list {
      display: grid;
      grid-template-columns: auto auto auto;
      align-content: center;
      width: 90%;
      margin: 4rem auto;
      gap: 3rem;
      .value {
        background-color: #576174;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        align-items: center;
        text-align: center;
        padding: 2rem;
        .value-title {
          font-size: 2rem;
          font-weight: 600;
        }
        .value-desc {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    .values-outer {
      .values-list {
        grid-template-columns: auto auto;
      }
    }
  }

  @media screen and (max-width: 620px) {
    .values-outer {
      .values-list {
        grid-template-columns: auto;
      }
    }
  }
`;
