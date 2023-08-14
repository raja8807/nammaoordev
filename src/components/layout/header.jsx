const { default: NodLogo } = require("../nod-ui/nod-logo/nod_logo");
import { useState } from "react";
import Nodbutton from "../nod-ui/nod-button/nod_button";
import styles from "./header.module.scss";
import HeaderDrawer from "./header-drawer/header_drawer";
import { useRouter } from "next/router";

const NodHeader = (props) => {
  const { currentSection, setCurrentSection } = props;

  const [showDrawer, setShowDrawer] = useState(false);
  const router = useRouter();

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
        <Nodbutton
          clickHandler={() => {
            router.push("https://wa.me/+917904236030");
          }}
        >
          Get Quote for 2999/-
        </Nodbutton>
      </header>
      <HeaderDrawer
        show={showDrawer}
        setShow={setShowDrawer}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </>
  );
};
export default NodHeader;
