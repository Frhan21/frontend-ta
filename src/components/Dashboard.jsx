// import { NavLink } from "react-router-dom";
import TableDashboard from "./TableDashboard";

const Dashboard = () => {
  return (
    <>
      <section className="mt-5 md:mt-[10rem]">
        <div className="flex flex-wrap flex-col items-center justify-center font-['Montserrat']">
          <span className="text-sm text-white p-3 md:px-6 md:py-2 bg-[#11468f] rounded-full ">
            Want see more ?
          </span>
          <span className="text-2xl md:text-4xl  mt-2 text-[#11468f] font-black uppercase">
            Dashboard Sample
          </span>
          <div className="h-full w-full md:h-[30rem] md:w-[60rem] mt-5 rounded-lg">
            <TableDashboard/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
