const { default: Section } = require("./section/section");
import { HOME_SECTIONS } from "./constants";

const HomePage = () => {
  

  return (
    <>
      {HOME_SECTIONS.map((section) => (
        <Section
          varient={section.varient}
          key={section.id}
          heading={section.heading}
          inEffect={section.inEffect}
        >
          {section.component}
        </Section>
      ))}
    </>
  );
};

export default HomePage;
