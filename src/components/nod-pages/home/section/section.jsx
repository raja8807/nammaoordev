import Proptypes from "prop-types";
import styles from "./section.module.scss";
import { Container, Row } from "react-bootstrap";
import SectionHeading from "./section-heading/section_heading";
import "aos/dist/aos.css";


const Section = (props) => {
  const { varient, children, heading ,inEffect='fade-in',id} = props;

  return (
    <section className={`home_section ${styles.section} ${varient && styles[varient]}`}
    data-aos={inEffect}
    id={id}
    >
      {varient === "banner" && <div className={styles.bg_overlay}></div>}
      <Container>
        <Row style={{margin:'0'}}>{heading && <SectionHeading heading={heading} />}</Row>
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
