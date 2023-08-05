import { HOME_SECTIONS } from "@/components/nod-pages/home/constants";
import Link from "next/link";
import styles from "./header_drawer.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const { Offcanvas } = require("react-bootstrap");

const HeaderDrawer = (props) => {
  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false);
  };

  const router = useRouter();

  const [currentSection, setCurrentSection] = useState("/#home");

  useEffect(() => {
    setCurrentSection(router.asPath);
  }, [router]);

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <div className={styles.header_drawer}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>Namma Ooru Dev</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {HOME_SECTIONS.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              onClick={() => {
                setShow(false);
              }}
              className={
                currentSection.includes(section.id)
                  ? styles.active
                  : styles.inactive
              }
              //   className={styles.active}
            >
              <p>{section.name}</p>
            </Link>
          ))}
        </Offcanvas.Body>
      </div>
    </Offcanvas>
  );
};

export default HeaderDrawer;
