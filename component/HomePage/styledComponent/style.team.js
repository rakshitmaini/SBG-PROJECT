import styled from "styled-components";

export default styled.div`
.team-slider{
    margin-top:3rem;
}
article {
  /* limit the width of the article container */
 
  /* display the contents in a column */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: hsl(0, 0%, 100%); */
  line-height: 2;
  border-radius: 10px;
  margin: 0.5rem;
  /* transition for the transform property, updated in the script */
  transition: transform 0.2s ease-out;
  box-shadow: 0 0 5px -2px hsla(0, 0%, 0%, 0.1);
}
article figure {
  /* limit the width and height of the figure to show the image in a circle */
  width: 120px;
  height: 120px;
  border-radius: 50%;
  /* specify negative margin matching half the height of the element */
  margin-top: -60px;
  /* position relative for the pseudo element */
  position: relative;
  
}
article figure:before {
  /* add a border around the figure matching the color of the background, faking the clip */
  content: "";
  border-radius: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  border: 0.5rem solid hsl(250, 85%, 97%);
  box-shadow: 0 1px hsla(0, 0%, 0%, 0.1);
}
article figure img {
  /* stretch the image to cover the size of the wrapping container */
  border-radius: inherit;
  width: 100%;
  height: 100%;
  /* object fit to maintain the aspect ratio and fit the width/height */
  object-fit: cover;
}

article div {
  /* center the text in the div container */
  text-align: center;
  margin: 2rem;
}
article div p {
  color: hsl(250, 5%, 45%);
  font-weight: 400;
  font-style: italic;
  margin: 1rem 0 3rem;
  font-family: "Noticia Text", serif;
  /* position relative for the pseudo element */
  position: relative;
  z-index: 5;
}
article div p:before {
  /* with SVG elements include two icons for the quote */
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: -5;
  /* opacity: 0.05; */
  /* position the icons at either end of the paragraph, rotate the second to have a mirrorer image */
  
}
article div h1 {
  /* considerably reduce the size of the heading */
  color: hsl(260, 5%, 55%);
  font-family: "Lato", sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}
.team-slider button{
    margin-right:2rem;
}
.slick-list{
    width:98%
}
`;