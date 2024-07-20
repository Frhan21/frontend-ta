import { React } from "react";

const Header = () => {
  return (
    <>
      <section className="lg:container flex mt-[4rem] justify-between font-['Montserrat']">
        <div className="lg:basis-1/2 basis-full ml-[6rem]">
          <p className="text-sm bg-[#11468f] w-1/2 text-center py-2 rounded-lg text-white italic">
            Welcome to My Web Research
          </p>
          <p className="text-[45px] leading-tight uppercase mt-4 font-black w-[500px] text-[#11468f]">
            Rancang Bangun Alat Pendeteksi Formalin pada Daging Sapi Berbasis
            Internet of Things (IoT)
          </p>
          <div>
            <form className="border-2 w-[400px] mt-4 border-[#11468f] rounded-[15px]">
              <input type="text" className="rounded-md mx-auto" />
              <button className="bg-[#11468f] text-white ml-[6.25rem] px-[18.9px] py-3 rounded-[13px]">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/3 h-1/2 ml-[17rem]">
          <img src="./Gambar.png" alt="" srcset="" className="h-[500px]" />
        </div>
      </section>
    </>
  );
};

export default Header;
