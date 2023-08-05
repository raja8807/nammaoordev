import { Col, Row } from "react-bootstrap";
import styles from "./pricing_section.module.scss";

import PriceCard from "./price-card/price_card";
import { useState } from "react";
import { PRICINGS_DATA } from "./cosntants";

const PricingSection = () => {
  

  const [showInfoFor, setShowInfoFor] = useState(null);

  return (
    <div className={styles.pricing_section}>
       
      <Row>
        {PRICINGS_DATA.map((priceData, idx) => (
          <PriceCard
            key={priceData.id}
            priceData={priceData}
            index={idx}
            showInfoFor={showInfoFor}
            setShowInfoFor={setShowInfoFor}
          />
        ))}
      </Row>
    </div>
  );
};

export default PricingSection;
