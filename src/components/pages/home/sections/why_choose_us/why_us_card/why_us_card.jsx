import { Col, Image } from "react-bootstrap";
import styles from "./why_us_card.module.scss";

const WhyUsCard = ({content}) => {
  return (
    <Col xs={12} md={6} xl={3}>
      <div className={styles.why_us_card}>
        <div className={styles.overlay}>
            <p>Get Quotes</p>
        </div>
        <div className={styles.top}>
            {
                content.icon
            }
        </div>
        <h3>{content.head}</h3>
        <p>
         {content.text}
        </p>
      </div>
    </Col>
  );
};

export default WhyUsCard;
