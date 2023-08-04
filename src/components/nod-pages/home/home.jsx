import PricingSection from "./pricing-section/pricing_section";
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
      </Section>
      <Section varient="darkest" heading="Our Pricing">
        
        <PricingSection/>
      </Section>
    </>
  );
};

export default HomePage;
