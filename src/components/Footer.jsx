import { faInstagram, faFacebook, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#11468f] h-[250px] w-full flex justify-center items-center mt-10 md:mt-5 font-['Montserrat']">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-white text-center text-sm">
            Copyright &copy; 2024. All rights reserved.
          </p>
          <span className="text-white font-bold text-[25px] md:text-[30px]">M Farhan Ramadhan</span>
          <span className="text-white text-[12px]">Phyiscs Departemen, Math and Nature Faculty</span>
          <span className="text-white text-[16px] md:text-[20px] font-black">Andalas University</span>
          <div className="flex justify-center items-center mt-4 gap-6 md:gap-10 text-[1.5rem] md:text-[2rem]">
                <Link to="https://www.instagram.com/farhan_r45/" className="text-gray-300 hover:text-white cursor-pointer"><FontAwesomeIcon icon={faInstagram}/></Link>
                <Link to="/" className="text-gray-300 hover:text-white cursor-pointer"><FontAwesomeIcon icon={faFacebook}/></Link>
                <Link to="https://github.com/Frhan21" className="text-gray-300 hover:text-white cursor-pointer"><FontAwesomeIcon icon={faGithub}/></Link>
                <Link to="https://x.com/ha_efn?t=xARKUdZOZxlc9lC_rQxU4g&s=09" className="text-gray-300 hover:text-white cursor-pointer"><FontAwesomeIcon icon={faXTwitter}/></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
