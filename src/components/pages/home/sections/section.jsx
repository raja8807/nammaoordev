import SectionHeading from "@/components/ui/custom_button/section_heding/section_heading";
import styles from "./section.module.scss";

const Section = (props) => {
  const { children, heading } = props;

  return (
    <div className={`${styles.section}`}>
      {children}
    </div>
  );
};

export default Section;
