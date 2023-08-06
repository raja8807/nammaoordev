const { default: NodLogo } = require("../nod-ui/nod-logo/nod_logo");
import { useState } from "react";
import Nodbutton from "../nod-ui/nod-button/nod_button";
import styles from "./header.module.scss";
import HeaderDrawer from "./header-drawer/header_drawer";

const NodHeader = (props) => {

  const {currentSection,setCurrentSection} = props

  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <header className={styles.nod_header}>
        <div className={styles.header_logo}>
          <NodLogo
            clickHandler={() => {
              setShowDrawer(true);
            }}
          />
        </div>
        <Nodbutton>Get Started</Nodbutton>
      </header>
      <HeaderDrawer show={showDrawer} setShow={setShowDrawer} currentSection={currentSection}
      setCurrentSection={setCurrentSection}
      />
    </>
  );
};
export default NodHeader;
