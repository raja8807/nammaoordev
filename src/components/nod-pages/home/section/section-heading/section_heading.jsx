import PropTypes from "prop-types";
import styles from './section-heading.module.scss'
const SectionHeading = (props) => {
  const { heading } = props;

  return <h1 className={styles.section_heading}>{heading}</h1>;
};

export default SectionHeading;

SectionHeading.proptypes = {
  heading: PropTypes.string,
};
