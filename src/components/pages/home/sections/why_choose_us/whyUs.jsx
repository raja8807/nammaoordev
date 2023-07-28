import SectionHeading from "@/components/ui/custom_button/section_heding/section_heading";
import styles from "./whyUs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import WhyUsCard from "./why_us_card/why_us_card";
import { Award,BracesAsterisk,Clipboard2Check,Laptop } from "react-bootstrap-icons";


const WhyUs = () => {
  const whyUs = [
    {
      id: "1",
      head: "Expert Team",
      text: "Our team of talented and experienced web developers is passionate about crafting exceptional websites tailored to your unique needs. We combine creativity with technical expertise to deliver websites that leave a lasting impression on your visitors.",
      icon:<Award/>
    },
    {
      id: "2",
      head: "Custom Solutions",
      text: "We understand that every business is different. That's why we take a personalized approach to web development. Our team will work closely with you to understand your goals and objectives, ensuring that the final product aligns perfectly with your vision.",
      icon:<Clipboard2Check/>
    },
    {
        id: "3",
        head: "Responsive Designs",
        text: "In today's mobile-driven world, responsive design is no longer an option; it's a necessity. We create websites that adapt seamlessly to various devices and screen sizes, providing an optimal user experience across desktops, tablets, and smartphones.",
        icon:<Laptop/>
    },
    {
      id: "4",
      head: "Cutting-Edge Technologies",
      text: "Our developers stay up-to-date with the latest trends and technologies in the industry. From robust content management systems to interactive user interfaces, we leverage the power of modern tools to build websites that are both dynamic and secure.",
      icon:<BracesAsterisk/>
    },
  ];

  return (
    <div className={styles.why_us}>
      <Container className={styles.container}>
        <SectionHeading>Why Choose Us?</SectionHeading>
        <br />
        <br />
        <br />
        <Row>
            {
                whyUs?.map((content)=>{
                    return <WhyUsCard key={content.id} content={content}/>
                })
            }
          {/* <WhyUsCard />
          <WhyUsCard />
          <WhyUsCard />
          <WhyUsCard /> */}
        </Row>
      </Container>
    </div>
  );
};

export default WhyUs;
