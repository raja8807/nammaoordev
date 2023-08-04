const { default: BannerSection } = require("./banner-section/banner_section")
const { default: Section } = require("./section/section")

const HomePage = ()=>{
    return <>
    <Section varient="banner">
        <BannerSection/>
    </Section>
    
    </>
}

export default HomePage