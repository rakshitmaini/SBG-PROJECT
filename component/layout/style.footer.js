import styled from "styled-components";

export default styled.div`
  .footer {
    background-color: #090c14;
    .container {
      padding: 3.125rem 0rem 1.25rem 0rem;
      color: #878c94;
      .row {
        p {
          font-size: 1rem;
        }
        .title {
          text-align: left;
          color: #fff;
          font-size: 1.5625rem;
          margin: 0.7rem 0rem 0.7rem 0rem;
        }
        .acount-icon {
          ul {
            margin-left: 0rem;
            padding-left: 0rem;
            margin-bottom: 0rem;
            i::before {
              margin-right: 1rem;
            }
            i {
              display: block;
              color: #fff;
              font-size: 1.3125rem;
              padding: 0.4375rem 0.4375rem 0.4375rem 0rem;
              text-decoration: none;
              span {
                font-size: 1.2rem;
              }
            }
          }

          .fa {
            margin-right: 1.5625rem;
          }
        }
        .category {
          ul {
            margin-left: 0rem;
            padding-left: 0rem;
            a {
              text-decoration: none;
              color: #fff;
              display: inline-block;
              padding: 0.3125rem 1.25rem;
              margin: 0.1875rem;
              font-size: 0.8rem;
              border-radius: 0.25rem;
              margin-top: 0.375rem;
              background-color: black;
              border: solid 0.0625rem #fff;
            }
          }
        }
        .payment {
          margin: 0rem;
          padding: 0rem;
          list-style-type: none;
          li {
            list-style-type: none;
            a {
              text-decoration: none;
              display: inline-block;
              color: #fff;
              /* float: left; */
              font-size: 1.5625rem;
              padding: 0.625rem 0.625rem;
            }
          }
        }
        .social-icon {
          padding: 0rem;
          margin: 0rem;

          i {
            display: inline-block;
            color: #fff;
            font-size: 1.5625rem;
            padding-right: 0.3125rem;
          }
        }
        .text-center {
          display: block;
          text-align: center;
        }
        hr {
          border-top: 0.125rem solid #e9ecef;
        }
        .logo-img {
          width: 12.5rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
  @media (max-width: 480px) {
    .footer {
      .logo-img {
        width: 12.5rem;
        margin-bottom: 1rem;
      }
      .container {
        padding-right: 0.9375rem;
        padding-left: 0.9375rem;
        p {
          font-size: 0.5rem;
        }
      }
      .social-icon {
        margin-bottom: 1rem;
        i {
          display: inline-block;
          color: #fff;
          font-size: 1.5625rem;
          padding-right: 1.0625rem;
        }
      }
      .category ul {
        margin-bottom: 1rem;
      }
    }
  }
  @media screen and (min-width: 576px) and (max-width: 776px) {
    .footer {
      .category {
        ul {
          a {
            padding: 0.1875rem 0.1875rem;
            font-size: 0.8rem;
          }
        }
      }
      .acount-icon {
        ul {
          i {
            font-size: 1.25rem;
            span {
              padding-left: 0rem;
              font-size: 1rem;
              font-family: sans-serif !important;
            }
          }
        }
        .fa {
          margin-right: -3.6875rem;
        }
      }
      .logo-img {
        width: 9.375rem;
        margin-bottom: 1rem;
      }
    }
  }
  @media screen and (min-width: 777px) and (max-width: 991px) {
    .footer {
      .category {
        ul {
          a {
            padding: 0.3125rem;
          }
        }
      }

      .container {
        width: 100%;
        padding-right: 0rem;
        padding-left: 0rem;
      }
      .acount-icon {
        .fa {
          margin-right: 1.25rem;
        }
      }
    }
  }
`;
