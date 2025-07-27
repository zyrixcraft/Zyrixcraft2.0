import '../style/HeroSection.css'
function HeroSectionStripOne() {
  return (
    <div className="overflow-hidden">
      <div className="absolute flex -left-0 text-xl -bottom-[20%]   md:top-[80%]  text-center text-white -rotate-5 bg-white/10 h-15 w-screen">
        <div className="marquee-mobile flex md:ml-70 justify-center items-center gap-5 text-sm md:text-xl lg:whitespace-nowrap   ">
          <div className="uppercase">Graphic Design</div>
          <div className="text-orange-600">●</div>
          <span className="uppercase">UI/UX</span>
          <div className="text-orange-600">●</div>
          <span className="uppercase">MARKETING</span>
          <div className="text-orange-600">●</div>
          <span className="uppercase">Web Project</span>
          <div className="text-orange-600">●</div>
          <span className="uppercase">Animation</span>
        </div>
      </div>
    </div>


  );
}

export default HeroSectionStripOne;
