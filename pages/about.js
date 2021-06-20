import React from "react";
import AboutUs from "../component/about-us";
import Head from "next/head";
import { MetaHead } from "../component/baseComponent/Meta-Head";

const About = () => {
  return (
    <>
      <MetaHead title="About Us" />
      <AboutUs />
    </>
  );
};

export default About;
