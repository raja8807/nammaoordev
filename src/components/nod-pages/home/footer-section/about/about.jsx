const { Col, Row, Image } = require("react-bootstrap");
// import Image from 'next/image';
import {
  Envelope,
  Whatsapp,
  Telephone,
  PersonCircle,
  Instagram,
  Linkedin,
  Link45deg,
} from "react-bootstrap-icons";
import styles from "./about.module.scss";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.about}>
      <Row>
        <Col XS={3}>
          <Image src="/images/logo/logo.png" fluid alt="logo" />
        </Col>
        <Col xs={9} className={styles.top}>
          <div className={styles.brand}>
            <h1>Namma Ooru</h1>
            <div>
              <hr />
              <small>Dev</small>
              <hr />
            </div>
          </div>
        </Col>
      </Row>

      <div className={styles.details}>
        <div className={styles.contact_details}>
          <div>
            <PersonCircle />
            <p>Raja Rathinam,</p>
          </div>
          <div>
            <Envelope />
            <p>nammoorudev@gmail.com</p>
          </div>
          <div>
            <Telephone />
            <p>+91 78128 04856</p>
          </div>
          <div>
            <Whatsapp />
            <p>+91 79042 36030</p>
          </div>
        </div>

        <hr/>

        <div className={styles.contact_details}>
          <div>
            <Link45deg />
            <Link href='#'>
              <p>Home</p>
            </Link>
          </div>
          <div>
            <Link45deg />
            <Link href='#'>
              <p>Websites we built</p>
            </Link>
          </div>
          <div>
            <Link45deg />
            <Link href='#'>
              <p>Our Pricing</p>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.social_media}>
        <div className={styles.head}>
          {/* <hr /> */}
          <p>Find us on</p>
          {/* <hr /> */}
        </div>

        <div className={styles.links}>
          <Link href="#">
            <Whatsapp size="20px" />
          </Link>
          <Link href="#">
            <Instagram size="20px" />
          </Link>
          <Link href="#">
            <Linkedin size="20px" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
