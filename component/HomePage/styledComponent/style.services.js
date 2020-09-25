import styled from "styled-components";
import { fadeIn } from "../../../styles/animations";

export default styled.div`
  .container-fluid {
    /* animation: ${fadeIn} 3s ease-in; */
    margin: 0;
    padding: 0;
    width: 100%;
    .services-main{
    padding: 3.125rem 3.125rem;
    }
    .services-left{
      .py-4{
      p{
        line-height:2;
        font-size:1.3rem;
        color:black !important;
      }
      .service-tag{
        color:#e05414;
      }
    }
    }
    .services-right{
      .py-5{
        padding-top: 1rem!important;
        padding-bottom: 0rem!important;
        .service-img{
          img{
                width: 9rem;
                height: 7.8rem;
          }
        }
      .mb-2{
        font-weight: 600;
        a{
          color:#e05414;
        }
      }
    }
    }
    
  }
`;
