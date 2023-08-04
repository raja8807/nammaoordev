import WebsitesSection from "./websites-section/websites_section";

const { default: BannerSection } = require("./banner-section/banner_section");
const { default: Section } = require("./section/section");

const HomePage = () => {
  return (
    <>
      <Section varient="banner">
        <BannerSection />
      </Section>
      <Section varient="dark" heading="Websites We Built">
        <WebsitesSection/>
        {/* <BannerSection /> */}
      </Section>
    </>
  );
};

export default HomePage;
