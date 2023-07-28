const { Container, Image } = require("react-bootstrap");
import CustomButton from "@/components/ui/custom_button/custom_button";
import styles from "./banner.module.scss";
// import Container from "react-bootstrap";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Container>
        <div className={styles.banner_wrapper}>
          <div className={styles.banner_logo}>
            <Image src="/images/banner/logo.png" alt="xx" fluid />
          </div>
          <div className={styles.banner_content}>
            <div className={styles.brand}>
              <h1>Namma Ooru</h1>
              <div>
                <hr />
                <p>Dev</p>
                <hr />
              </div>
            </div>
            <div>
             <p>
             We believe that a powerful online presence is the key to success
              in today&apos;s digital world. Whether you are a small business, a
              startup, or a large enterprise, having a well-designed and
              functional website is crucial for establishing your brand,
              attracting customers, and driving growth. We are here to help you
              harness the true potential of the web through our top-notch
              website development services.
             </p>
              <br/>
              <div>
                <CustomButton>Get Started !</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
