import { Col, Row } from "react-bootstrap";
import styles from "./footer-section.module.scss";
import Contact from "./contact/contact";
import About from "./about/about";

const FooterSection = () => (
  <footer className={styles.footer_section}>
    <Row style={{margin:'0'}}>
      <Col xs={12} lg={8}>
        <About />
      </Col>
      <Col xs={12} lg={4}>
        <Contact />
      </Col>
    </Row>
  </footer>
);

export default FooterSection;
