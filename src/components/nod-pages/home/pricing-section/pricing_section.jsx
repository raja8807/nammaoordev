import { Col, Row } from "react-bootstrap";
import styles from "./pricing_section.module.scss";
import { Check } from "react-bootstrap-icons";
import Nodbutton from "@/components/nod-ui/nod-button/nod_button";


const PricingSection = () => (
  <div className={styles.pricing_section}>
   
    <Row>
      
      <Col xs={12} md={8} lg={4}>
        <div className={styles.price_card}>
          <div className={styles.recommended}>
            {/* <p>Recommended</p> */}
          </div>
          <div className={styles.details}>
            <h1>Static</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos!
            </p>
            <br />
            <small>₹10,000</small>
            <h1>₹6,000</h1>
            <div className={styles.benifits}>
              <div className={styles.benifit}>
              <Check size='30px'/>
                <p>24/7 Support</p>
              </div>
              <div className={styles.benifit}>
              <Check size='30px'/>
                <p>Editable Content</p>
              </div>
              <div className={styles.benifit}>
                <Check size='30px'/>
                <p>24/7 Support</p>
              </div>
            </div>

            <Nodbutton>
                Get Started
            </Nodbutton>
          </div>
        </div>
      </Col>
      <Col xs={12} md={8} lg={4}>
        <div className={`${styles.price_card} ${styles.card_recommended}`}>
          <div className={styles.recommended}>
            <p>Recommended</p>
          </div>
          <div className={styles.details}>
            <h1>Dynamic</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos!
            </p>
            <br />
            <small>₹15,000</small>
            <h1>₹10,000</h1>
            <div className={styles.benifits}>
              <div className={styles.benifit}>
              <Check size='30px'/>
                <p>24/7 Support</p>
              </div>
              <div className={styles.benifit}>
              <Check size='30px'/>
                <p>Editable Content</p>
              </div>
              <div className={styles.benifit}>
                <Check size='30px'/>
                <p>24/7 Support</p>
              </div>
            </div>

            <Nodbutton>
                Get Started
            </Nodbutton>
          </div>
        </div>
      </Col>
      <Col xs={12} md={8} lg={4}>
        <div className={styles.price_card}>
          <div className={styles.recommended}>
            {/* <p>Recommended</p> */}
          </div>
          <div className={styles.details}>
            <h1>Customized</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos!
            </p>
            <br />
            <small>₹25,000</small>
            <h1>₹15,000+</h1>
            <div className={styles.benifits}>
              <div className={styles.benifit}>
              <Check size='30px'/>
                <p>24/7 Support</p>
              </div>
              <div className={styles.benifit}>
              <Check size='30px'/>
                <p>Editable Content</p>
              </div>
              <div className={styles.benifit}>
                <Check size='30px'/>
                <p>24/7 Support</p>
              </div>
            </div>

            <Nodbutton>
                Get Started
            </Nodbutton>
          </div>
        </div>
      </Col>
      
    </Row>
  </div>
);

export default PricingSection;
