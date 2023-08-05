import { Col, Row } from "react-bootstrap";
import styles from "./pricing_section.module.scss";

import PriceCard from "./price-card/price_card";



const PricingSection = () => {
  const pricings = [
    {
        id:',1',
        name:'Static',
        isRecommended:false,
        description:   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos!',
        actualPrice:'10,000',
        currentPrice:'5,999',
        benifits : [
            {
                id:'b1-1',
                text : '24/7 Support',
                applicable : true
            },
            {
                id:'b1-2',
                text : 'No. of Pages - 3',
                applicable : false
            },
            {
                id:'b1-3',
                text : 'Editable Content',
                applicable : false
            },
            {
                id:'b1-4',
                text : 'Responsive Ui',
                applicable : true
            },
        ]
    },
    {
        id:',1',
        name:'Dynamic',
        isRecommended:true,
        description:   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos!',
        actualPrice:'15,000',
        currentPrice:'9,999',
        benifits : [
            {
                id:'b2-1',
                text : '24/7 Support',
                applicable : true
            },
            {
                id:'b2-2',
                text : 'No. of Pages - 3',
                applicable : false
            },
            {
                id:'b2-3',
                text : 'Editable Content',
                applicable : true
            },
            {
                id:'b2-4',
                text : 'Responsive Ui',
                applicable : true
            },
        ]
    },
    {
        id:',3',
        name:'Customzed',
        isRecommended:false,
        description:   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos!',
        actualPrice:'25,000',
        currentPrice:'15,000+',
        benifits : [
            {
                id:'b3-1',
                text : '24/7 Support',
                applicable : true
            },
            {
                id:'b3-2',
                text : 'No. of Pages - 3+',
                applicable : true
            },
            {
                id:'b3-3',
                text : 'Editable Content',
                applicable : true
            },
            {
                id:'b3-4',
                text : 'Responsive Ui',
                applicable : true
            },
        ]
    },
  ];

  return (
    <div className={styles.pricing_section}>
      <Row>
        {
            pricings.map((priceData)=>(
                <PriceCard key={priceData.id} priceData={priceData}/>
            ))
        }
      </Row>
    </div>
  );
};

export default PricingSection;
