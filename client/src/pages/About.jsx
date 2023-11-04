import {
  AboutUs,
  Feeds,
  Team,
  WhatWeDo,
} from "../components/common/page-components";
import { Testimonial } from "../components/home/home-1";

const About = () => {
  return (
    <div className='pt-20 px-[3%] md:px-[6%]'>
      <AboutUs />
      <Team />
      <WhatWeDo />
      <Testimonial />
      <Feeds />
    </div>
  );
};

export default About;
