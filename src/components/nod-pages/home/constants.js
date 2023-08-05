import BannerSection from "./banner-section/banner_section";
import FooterSection from "./footer-section/footer-section";
import PricingSection from "./pricing-section/pricing_section";
import WebsitesSection from "./websites-section/websites_section";

export const HOME_SECTIONS = [
    {
      id: "home",
      varient: "banner",
      name:'Home',
      heading: null,
      component: <BannerSection />,
      inEffect: "fade-in",
    },
    {
      id: "websites",
      varient: "dark",
      name:'Websites',
      heading: "Websites We Built",
      component: <WebsitesSection />,
      inEffect: "fade-in",
    },
    {
      id: "pricing",
      varient: "darkest",
      name:'Pricing',
      heading: "Our Pricing",
      component: <PricingSection />,
      inEffect: "fade-in",
    },
    {
      id: "contact",
      varient: "dark",
      heading: 'Contact',
      name:'Contact Us',
      component: <FooterSection />,
      inEffect: "fade-in",
    },
  ]

