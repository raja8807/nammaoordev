import Link from "next/link";
import styles from "./websites-section.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import Nodbutton from "@/components/nod-ui/nod-button/nod_button";

const WebsitesSection = () => {
  const websites = [
    {
      id: "1",
      src: "/images/websites/web_1.png",
      href: "https://www.trenthamizh.info/",
    },
    {
      id: "2",
      src: "/images/websites/web_1.png",
      href: "https://www.trenthamizh.info/",
    },
    {
      id: "3",
      src: "/images/websites/web_1.png",
      href: "https://www.trenthamizh.info/",
    },
    {
      id: "4",
      src: "/images/websites/web_1.png",
      href: "https://www.trenthamizh.info/",
    },
  ];

  return (
    <Row className={styles.websites_section}>
      {websites.map((website) => (
        <Col lg={6} key={website.id}>
          <div className={styles.website}>
            <div className={styles.overlay}>
              <Link href={website.href}>{website.href}</Link>
              <Nodbutton>Start A Project</Nodbutton>
            </div>
            <Image src={website.src} fluid />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default WebsitesSection;
