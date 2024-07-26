import { React } from "react";

const Header = () => {
  return (
    <>
      {/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3506041666. */}
      <section className="lg:container flex md:flex-row flex-col mt-[4rem] md:items-start items-center justify-center font-['Montserrat']">
        <div className="lg:basis-1/2 basis-full md:ml-[6rem] flex justify-center md:items-start items-center flex-col">
          <p className="text-[11px] md:text-[20px] bg-[#11468f] w-1/2 text-center py-2 rounded-lg text-white italic">
            Welcome to My Web Research
          </p>
          <p className="text-[30px] md:text-[45px] md:leading-tight uppercase mt-4 font-black md:w-[500px] text-[#11468f] md:text-left text-center px-[1rem] md:px-0">
            Rancang Bangun Alat Pendeteksi Formalin pada Daging Sapi Berbasis
            Internet of Things (IoT)
          </p>
          <div>
            <form className="border-2 w-full md:w-[400px] mt-4 border-[#11468f] rounded-[10px] md:rounded-[15px]">
              <input type="text" className="rounded-md mx-auto" />
              <button className="bg-[#11468f] text-white text-[14px] md:ml-[6.7rem] px-[4.55px] md:px-[18.9px] py-3 md:rounded-[10px] rounded-[6px]">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/3 h-1/3 md:ml-[17rem] mt-10  md:block hidden">
          <img
            src="./Gambar.png"
            alt="Descriptive Alt Text"
            className="md:h-[500px] h-[300px]"
          />
        </div>
      </section>
    </>
  );
};

export default Header;
