import styled from "styled-components";

export default styled.div`
.team-slider{
    margin-top:3rem;
    width:100%;
    text-align:center;

    .slick-slider{

      .slick-list{
        padding:0px;
      }
    }
    .slick-slide{
        margin:0rem 1rem 0rem 1rem;
        width:350px !important;
        height:400px !important;

        .col-list{
          width:100%;
        }
    }
    .container{
      width:90%;
    }
    .container-fluid .col-list{
      float:left;
      height:100%;
      width:350px;
      align-items:center;
      border-radius:10px solid;

    }
    h2{
  color:#1169A4;
  margin:1rem 0rem 2rem 0rem;
}
 .slide-outer{
  border-radius:10px;

   .card{
    opacity:0.5;
    align-items: center;
    margin: 0.5rem;
   
    

    .card-image{
      width:100%;

      .card-img-top{
        width:150px !important;
        height:150px !important;
      }
    }
    .slide-content{

      p{
        color: hsl(250, 5%, 45%);
  font-weight: 400;
  font-style: italic;
  margin: 1rem 0 1rem;
  font-family: "Noticia Text", serif;
 
 
  
      }
      h1{
        color: hsl(260, 5%, 55%);
  font-family: "Lato", sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
      }
    }
   }
 }  
}

.slick-dots {
      z-index: 2;
      position: absolute;
      bottom: -30px;
      
    }
 .slick-dots li {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: whitesmoke;
        
      } 
`;