import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <>
      <div className="font-['Montserrat'] flex flex-col items-start mx-[6rem] p-10 mt-10">
        <Link className="px-4 py-2 rounded-md bg-[#11468f] text-white mb-5" to="/"> Home </Link>
        <span className="font-black text-4xl text-[#11468f] uppercase">Sample Dashboard</span>
        <span className="text-white text-sm bg-[#11468f] p-2 w-fit rounded-md italic">Formalin detection</span>
      </div>
    </>
  );
};

export default DashboardHeader;

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1274470146.d
