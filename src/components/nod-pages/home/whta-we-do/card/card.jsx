import { Col } from "react-bootstrap";
import styles from "./card.module.scss";

const Card = ({ data }) => {
  return (
    <Col xs={12} sm={6} lg={4} xl={3}>
      <div className={styles.card}>
        <div className={styles.top}>{data.icon}</div>
        <h1>{data.head}</h1>
        <p>{data.content}</p>
      </div>
    </Col>
  );
};

export default Card;
