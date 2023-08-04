import Proptypes from "prop-types";
import styles from "./section.module.scss";
import { Container, Row } from "react-bootstrap";
import SectionHeading from "./section-heading/section_heading";

const Section = (props) => {
  const { varient, children, heading } = props;

  return (
    <section className={`${styles.section} ${varient && styles[varient]}`}>
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
  children: Proptypes.any,
};
