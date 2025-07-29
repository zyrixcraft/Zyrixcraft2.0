import '../App.css';
import '../components/services/FlippingCardStyles.css';

import ServiceContainer from '../components/services/ServiceContainer';
import ServiceHeading from '../components/services/ServiceHeading';
import FlippingCard from '../components/services/FlippingCard';
// Service data
const serviceData = [
  {
    title: "Web Projects",
    description: "We craft responsive, high-performance websites that align with your brand and deliver seamless user experiences across all devices. Our development approach ensures optimal performance and security.",
    link: "https://zyrixcraft-project-showcase.vercel.app/",
    images: [
      "assets/portfolio/1.jpg",
      "assets/portfolio/2.jpg",
      "assets/portfolio/3.jpg",
    ],
  },
  {
    title: "Graphic Design",
    description: "From logos to full branding kits, we create visually compelling designs that communicate your message and capture your audience's attention. Our design philosophy blends creativity with strategic messaging.",
    link: "https://book-animation-psi.vercel.app/",
    images: [
      "assets/portfolio/4.png",
      "assets/portfolio/5.png",
      "assets/portfolio/6.png",
    ],
  },
  {
    title: "UX/UI Design",
    description: "Our user-centric approach ensures intuitive, engaging interfaces that enhance usability and turn users into loyal customers. We focus on creating experiences that feel natural and delightful.",
    link: "https://ui-ux-ruddy.vercel.app/",
    images: [
      "assets/portfolio/8.jpg",
      "assets/portfolio/7.png",
      "assets/portfolio/9.jpg",
    ],
  },
  {
    title: "Smart Solutions",
    description: "We develop custom automation solutions that streamline your business processes, reduce manual workload, and increase efficiency. Our solutions are tailored to your specific needs and integrate seamlessly with your existing systems.",
    link: "/automation",
    images: [
      "assets/portfolio/10.jpg",
      "assets/portfolio/11.jpg",
      "assets/portfolio/12.jpg",
    ],
  }
];


// Service page  
const Portfolio = () => {
  return (
    <div id='Portfolio'>
      <ServiceContainer>
        {/* Heading */}
        <div className="mb-20">
          <ServiceHeading title="OUR PORTFOLIO" />
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {serviceData.map((service, index) => (
            <FlippingCard
              key={index}
              title={service.title}
              description={service.description}
              images={service.images}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </ServiceContainer>      
    </div>
  );
};

export default Portfolio;