// import { NavLink } from "react-router-dom";
import Chart from "./Chart";
import DataTable from "./DataTable";
import TableDashboard from "./TableDashboard";



const Footer = () => {
  return (
    <>
      <section className="mt-10">
        <div className="flex flex-wrap flex-col items-center justify-center font-['Montserrat']">
          <span className="text-sm text-white px-6 py-2 bg-[#11468f] rounded-full ">
            Want see more ?
          </span>
          <span className="text-4xl mt-2 text-[#11468f] font-black uppercase">
            Dashboard Sample
          </span>
          <div className="h-[30rem] w-[60rem] mt-5 rounded-lg">
            <TableDashboard/>
            {/* <DataTable/> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
