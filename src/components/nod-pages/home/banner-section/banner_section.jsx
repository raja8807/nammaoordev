import styles from "./banner_section.module.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Nodbutton from "@/components/nod-ui/nod-button/nod_button";
import { CheckCircle } from "react-bootstrap-icons";
import { useRouter } from "next/router";

const BannerSection = () => {
  const router = useRouter();

  return (
    <div className={styles.banner_section}>
      <div className={styles.banner_bg}>
        <div className={styles.banner_logo} data-aos="zoom-in">
          <Image
            src="/images/logo/logo.png"
            alt="xx"
            height={1000}
            width={1000}
          />
        </div>
      </div>
      <div className={styles.banner_content}>
        <Row style={{ margin: "0" }}>
          <Col lg={9} className={styles.text}>
            <div className={styles.brand} data-aos="fade-down">
              <small>Namma Ooru</small>

              <span>
                <hr />
                Dev
                <hr />
              </span>
            </div>
            <h1 data-aos="fade-up">
              Empowering Your Business With Our Website Development Services
            </h1>
            <p className={styles.slogan} data-aos="fade-right">
              Take your business to new heights with a website that represents
              your brand, engages your audience, and drives results.
            </p>
            <div data-aos="fade-in">
              <Nodbutton>Start a Project</Nodbutton>
              <div>
                <br />
                <Nodbutton
                  clickHandler={() => {
                    router.push("https://wa.me/+917904236030");
                  }}
                >
                  Quote for 2999/-
                </Nodbutton>
              </div>
            </div>
            {/* <Row className={styles.features}
            data-aos="fade-left"
            >
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
            </Row> */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BannerSection;
