const { default: NodLogo } = require("../nod-ui/nod-logo/nod_logo");
import Nodbutton from '../nod-ui/nod-button/nod_button';
import styles from './header.module.scss'

const NodHeader = () => (
  <header className={styles.nod_header}>
    <div className={styles.header_logo}>
    <NodLogo />
    </div>
    <Nodbutton>
        Get Started
    </Nodbutton>
  </header>
);

export default NodHeader;
