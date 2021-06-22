import Carousel from "./Carousel";
import Team from "./Team";
import Partner from "./Partners";
import Services from "./Services";
import InfoTiles from "./info-tiles";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Services />
      <InfoTiles />
      <Team />
      {/* <Partner /> */}
    </>
  );
};

export default HomePage;
