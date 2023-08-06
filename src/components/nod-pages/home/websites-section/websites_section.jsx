import Link from "next/link";
import styles from "./websites-section.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import Nodbutton from "@/components/nod-ui/nod-button/nod_button";
import { WEBSITES } from "./constants";

const WebsitesSection = () => {
  

  return (
    <Row className={styles.websites_section} style={{margin:'0'}}>
      {WEBSITES.map((website) => (
        <Col lg={6} key={website.id}>
          <div className={styles.website}
          
          data-aos='zoom-out'>
            <div className={styles.overlay}>
              <Link href={website.href}
              target="_blank"
              >{website.href}</Link>
              <Nodbutton>Start A Project</Nodbutton>
            </div>
            <Image src={website.src} fluid alt="website"/>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default WebsitesSection;
