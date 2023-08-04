import Image from "next/image";
import styles from "./nod_logo.module.scss";

const NodLogo = () => {
  return (
    <div className={styles.nod_logo}>
      <Image
        src="/images/logo/logo.png"
        alt="logo"
        height={100}
        width={100}
      />
    </div>
  );
};

export default NodLogo;
