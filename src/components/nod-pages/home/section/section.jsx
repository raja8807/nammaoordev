import Proptypes from "prop-types";
import styles from "./section.module.scss";
import { Container, Row } from "react-bootstrap";
import SectionHeading from "./section-heading/section_heading";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Section = (props) => {
  const { varient, children, heading ,inEffect='fade-in',id} = props;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className={`${styles.section} ${varient && styles[varient]}`}
    data-aos={inEffect}
    id={id}
    >
      {varient === "banner" && <div className={styles.bg_overlay}></div>}
      <Container>
        <Row>{heading && <SectionHeading heading={heading} />}</Row>
        {children}
      </Container>
    </section>
  );
};

export default Section;

Section.propTypes = {
  varient: Proptypes.string,
  inEffect: Proptypes.string,
  id: Proptypes.string,
  children: Proptypes.any,
};
