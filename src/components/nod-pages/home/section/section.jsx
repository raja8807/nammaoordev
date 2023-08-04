import Proptypes from "prop-types";
import styles from "./section.module.scss";
import { Container } from "react-bootstrap";

const Section = (props) => {
  const { varient, children } = props;

  return (
    <section className={`${styles.section} ${varient && styles[varient]}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;

Section.propTypes = {
  varient: Proptypes.string,
  children: Proptypes.any,
};
