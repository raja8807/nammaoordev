import { Col } from "react-bootstrap";
import styles from "./card.module.scss";

const Card = () => {
  return (
    <Col xs={12} sm={6} lg={4} xl={3}>
      <div className={styles.card}>
        <div className={styles.top}></div>
        <h1>Lorem, ipsum.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          doloribus inventore earum vitae esse amet sed repudiandae voluptatem,
          exercitationem dicta omnis ratione autem neque iste culpa aut facilis
          ullam. Soluta?
        </p>
      </div>
    </Col>
  );
};

export default Card;
