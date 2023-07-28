import Banner from "./sections/banner/banner";
import Section from "./sections/section";
import WhyUs from "./sections/why_choose_us/whyUs";

const HomePage = () => {
  return (
    <>
      <Section varient="banner">
        <Banner />
      </Section>
      <Section>
          <WhyUs />
      </Section>
    </>
  );
};

export default HomePage;
