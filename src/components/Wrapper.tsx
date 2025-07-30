
import HeroSection from "../pages/HeroSection"
import Service from "../pages/Service"
import Footer from "../pages/Footer"
import PcAnimation from "../pages/PcAnimation"
import Portfolio from "../pages/Portfolio"
import Testimonials from "../pages/Testimonials"




function Wrapper() {
 

  return (
    <div className="min-h-screen min-w-screen ">
      <HeroSection  />
      <Service />
      <PcAnimation />
      <Portfolio />
      <Testimonials />
      <Footer  />
      
    </div>
  )
}
export default Wrapper