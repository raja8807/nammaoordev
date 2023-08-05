import BannerSection from "./banner-section/banner_section";
import FooterSection from "./footer-section/footer-section";
import PricingSection from "./pricing-section/pricing_section";
import WebsitesSection from "./websites-section/websites_section";

export const HOME_SECTIONS = [
    {
      id: "banner",
      varient: "banner",
      heading: null,
      component: <BannerSection />,
      inEffect: "fade-in",
    },
    {
      id: "websotes",
      varient: "dark",
      heading: "Websites We Built",
      component: <WebsitesSection />,
      inEffect: "fade-in",
    },
    {
      id: "pricing",
      varient: "darkest",
      heading: "Our Pricing",
      component: <PricingSection />,
      inEffect: "fade-in",
    },
    {
      id: "footer",
      varient: "dark",
      heading: 'Contact',
      component: <FooterSection />,
      inEffect: "fade-in",
    },
  ]

