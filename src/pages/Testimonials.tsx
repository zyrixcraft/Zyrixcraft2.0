import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  category: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: "Through Zyrixcraft, we were able to transform our digital presence completely. The team has demonstrated exceptional creativity and technical expertise time and time again!",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechFlow Solutions",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    category: "Web Development"
  },
  {
    id: 2,
    quote: "The UI/UX design work exceeded our expectations. Our user engagement increased by 300% after the redesign. Absolutely phenomenal work!",
    author: "Michael Chen",
    position: "Product Manager",
    company: "InnovateLab",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    category: "UI/UX Design"
  },
  {
    id: 3,
    quote: "Their graphic design team brought our brand vision to life perfectly. The attention to detail and creative approach was outstanding.",
    author: "Emily Rodriguez",
    position: "Brand Manager",
    company: "Creative Studios",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    category: "Graphic Design"
  },
  {
    id: 4,
    quote: "Working with Zyrixcraft was a game-changer for our startup. They delivered a complete digital solution that helped us scale rapidly.",
    author: "David Park",
    position: "CEO & Founder",
    company: "StartupVenture",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    category: "Web Development"
  },
  {
    id: 5,
    quote: "The mobile app they developed for us has received incredible user feedback. The user experience is seamless and intuitive.",
    author: "Lisa Thompson",
    position: "Operations Director",
    company: "MobileFirst Inc",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    category: "Mobile Development"
  },
  {
    id: 6,
    quote: "Their automation solutions streamlined our entire workflow. We've saved countless hours and improved efficiency dramatically.",
    author: "Robert Kim",
    position: "CTO",
    company: "AutoFlow Systems",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    category: "Automation"
  }
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial>(testimonialsData[0]);

  const handleTestimonialClick = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  return (
    <div id="Testimonials" className="w-full bg-black text-white px-5 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-8 sm:py-12 md:py-15 flex flex-col">
      {/* Testimonials Heading */}
      <div className="flex whitespace-nowrap gap-3 sm:flex-row items-center mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-0 sm:mr-6">
          CLIENT <span className="text-orange-600">TESTIMONIALS</span>
        </h1>
        <hr className="w-full sm:w-auto sm:flex-grow border-t border-orange-600" />
      </div>

      {/* Main Testimonial Display */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] mb-16">
        <div className="text-center mb-8">
          <p className="text-orange-600 text-sm uppercase tracking-wider mb-4">
            HEAR FROM THE DECISION MAKERS THEMSELVES!
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTestimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Quote */}
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed mb-12 text-gray-200">
              "{selectedTestimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <motion.img
                src={selectedTestimonial.avatar}
                alt={selectedTestimonial.author}
                className="w-16 h-16 rounded-full mb-4 object-cover"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              />
              <h3 className="text-lg font-semibold text-white mb-1">
                {selectedTestimonial.author}, {selectedTestimonial.position}
              </h3>
              <p className="text-gray-400 text-base font-medium">
                {selectedTestimonial.company}
              </p>
            </div>

            {/* Category indicator */}
            <div className="mt-6">
              <span className="inline-block w-2 h-2 bg-orange-600 rounded-full"></span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Horizontal Scrolling Testimonials */}
      <div className="relative">
        <div className="flex overflow-hidden pb-4">
          <motion.div
            className="flex flex-shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className={`flex-shrink-0 w-80 p-6 rounded-2xl cursor-pointer transition-all duration-300 mr-6 ${
                  selectedTestimonial.id === testimonial.id
                    ? 'bg-gray-1000 border-2 border-orange-600/50 shadow-[0_0_20px_rgba(255,107,0,0.3)]'
                    : 'bg-gray-900 border-2 border-transparent hover:border-orange-600/30 hover:shadow-[0_0_15px_rgba(255,107,0,0.2)]'
                }`}
                onClick={() => handleTestimonialClick(testimonial)}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {testimonial.position}
                      </p>
                      <p className="text-orange-400 text-xs font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second row moving in opposite direction */}
      <div className="relative mt-6">
        <div className="flex overflow-hidden pb-4">
          <motion.div
            className="flex flex-shrink-0"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonialsData.slice().reverse(), ...testimonialsData.slice().reverse()].map((testimonial, index) => (
            <motion.div
              key={`reverse-${testimonial.id}-${index}`}
              className={`flex-shrink-0 w-80 p-6 rounded-2xl cursor-pointer transition-all duration-300 mr-6 ${
                selectedTestimonial.id === testimonial.id
                  ? 'bg-gray-1000 border-2 border-orange-600/50 shadow-[0_0_20px_rgba(255,107,0,0.3)]'
                  : 'bg-gray-900 border-2 border-transparent hover:border-orange-600/30 hover:shadow-[0_0_15px_rgba(255,107,0,0.2)]'
              }`}
              onClick={() => handleTestimonialClick(testimonial)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {testimonial.position}
                    </p>
                    <p className="text-orange-400 text-xs font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="flex justify-center mt-6">
        <p className="text-gray-500 text-sm">Click any testimonial to view details</p>
      </div> */}
    </div>
  );
};

export default Testimonials;