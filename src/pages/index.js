import NodHeader from "@/components/layout/header";
import HomePage from "@/components/nod-pages/home/home";
import { useState } from "react";

const Home = () => {

  const [currentSection, setCurrentSection] = useState("/#home");


  return (
    <>
      <NodHeader currentSection={currentSection} setCurrentSection={setCurrentSection}/>
      <HomePage currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </>
  );
};

export default Home;
