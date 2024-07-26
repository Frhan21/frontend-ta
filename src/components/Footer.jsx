import { faInstagram, faFacebook, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-600 h-[250px] w-full flex justify-center items-center mt-10 font-['Montserrat']">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-white text-center text-sm">
            Copyright &copy; 2023. All rights reserved.
          </p>
          <span className="text-white font-bold text-[20px]">M Farhan Ramadhan</span>
          <span className="text-white text-[12px]">Phyiscs Departemen, Math and Nature Faculty</span>
          <span className="text-white text-[16px] font-black">Andalas University</span>
          <div className="flex justify-center items-center mt-4 gap-6 text-[1.5rem]">
                <Link to="https://www.instagram.com/farhan_r45/" className="text-gray-300 hover:text-white cursor-pointer"><FontAwesomeIcon icon={faInstagram}/></Link>
                <Link to="/" className="text-gray-300 hover:text-white cursor-pointer"><FontAwesomeIcon icon={faFacebook}/></Link>
                <Link to="https://github.com/Frhan21" className="text-gray-300 hover:text-white cursor-pointer"><FontAwesomeIcon icon={faGithub}/></Link>
                <Link to="https://github.com/Frhan21" className="text-gray-300 hover:text-white cursor-pointer"><FontAwesomeIcon icon={faXTwitter}/></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
