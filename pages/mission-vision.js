import { Banner, IntroSection, Values } from "../component/vision";
import { MetaHead } from "../component/baseComponent/Meta-Head";

const Page = () => {
  return (
    <>
      <MetaHead title="Mission & Vision" />
      <Banner />
      <IntroSection />
      <Values />
    </>
  );
};

export default Page;
