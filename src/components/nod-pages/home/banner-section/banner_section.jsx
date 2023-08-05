import styles from "./banner_section.module.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Nodbutton from "@/components/nod-ui/nod-button/nod_button";
import { CheckCircle } from "react-bootstrap-icons";

const BannerSection = () => {
  return (
    <div className={styles.banner_section}>
      <div className={styles.banner_bg}>
     
        <div className={styles.banner_logo}>
          <Image
            src="/images/logo/logo.png"
            alt="xx"
            height={1000}
            width={1000}
          />
        </div>
      </div>
      <div className={styles.banner_content}>
        <Row>
          <Col lg={9} className={styles.text}>
            <div className={styles.brand}>
              <small>Namma Ooru</small>

              <span>
                <hr />
                Dev
                <hr />
              </span>
            </div>
            <h1>
              Empowering Your Business With Our Website Development Services
            </h1>
            <p className={styles.slogan}>
            Take your business to new heights with a website that represents your brand, engages your audience, and drives results.
            </p>
            <Nodbutton>Start a Project</Nodbutton>
            <Row className={styles.features}>
              <Col xs={6} className={styles.feature}>
                <CheckCircle />
                <p>Responsive Design</p>
              </Col>
              <Col xs={6} className={styles.feature}>
                <CheckCircle />
                <p>SEO optimized</p>
              </Col>
              <Col xs={6} className={styles.feature}>
                <CheckCircle />
                <p>CMS-Friendly</p>
              </Col>
              <Col xs={6} className={styles.feature}>
                <CheckCircle />
                <p>Advanced Animations</p>
              </Col>
              <Col xs={6} className={styles.feature}>
                <CheckCircle />
                <p>Hosting & Maintenance</p>
              </Col>
              <Col xs={6} className={styles.feature}>
                <CheckCircle />
                <p>Customised Web Design</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BannerSection;
