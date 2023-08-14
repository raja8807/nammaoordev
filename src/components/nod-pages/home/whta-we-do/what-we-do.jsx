import { Col, Container, Row } from "react-bootstrap";
import styles from "./what-we-do.module.scss";
import Nodbutton from "@/components/nod-ui/nod-button/nod_button";
import Card from "./card/card";
import { useRouter } from "next/router";

const WhatWeDo = () => {
  const router = useRouter();

  return (
    <div className={styles.what_we_do}>
      <Container>
        <Row>
          <Col>
            <div className={styles.top}>
              <div className={styles.abs}>Website for 2999/-</div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <p>Single Page Website</p>
                  </li>
                  <li>
                    <p>Basic Domain And Hosting</p>
                  </li>
                  <li>
                    <p>Contact Integration</p>
                  </li>
                  <li>
                    <p>Ideal For Startups</p>
                  </li>
                  <li>
                    <p>24 x 7 Support</p>
                  </li>
                </ul>
                <div className={styles.cheap_btn}>
                  <Nodbutton
                    clickHandler={() => {
                      router.push("https://wa.me/+917904236030");
                    }}
                  >
                    Get Started
                  </Nodbutton>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
      </Container>
    </div>
  );
};

export default WhatWeDo;
