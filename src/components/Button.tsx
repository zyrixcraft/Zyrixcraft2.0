import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/client");
  };
  
  return (
    <div
      onClick={handleClick}
      className="absolute md:top-3 md:right-4 md:fixed top-[60%] z-100 px-5 py-2.5 bg-transparent text-orange-500 border border-orange-500 rounded-full font-medium tracking-wider uppercase transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(255,107,0,0.6),0_0_30px_rgba(255,107,0,0.4)] hover:scale-105 cursor-pointer"
    >
      BECOME A CLIENT
    </div>
  );
}

export default Button;

