import styles from "./section_heading.module.scss";

const SectionHeading = (props) => {
  const { children } = props;

  return <h1 className={styles.section_heading}>{children}</h1>;
};

export default SectionHeading;
