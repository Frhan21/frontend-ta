import React from "react";

const About = () => {
  return (
    <>
      <section className="lg:container font-['Montserrat'] mt-[40px]" id="about">
        <div className="flex flex-col text-center items-center justify-center">
          <span className="text-[40px] uppercase text-[#11468f] font-black">
            About Research
          </span>
          <span className="bg-[#11468f] text-white px-4 py-2 mt-1 rounded-[7px] ">
            Formalin Detection
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center mt-10 gap-[2rem]">
          <div className="w-full flex items-center text-md md:text-[18px] mx-2 md:w-[650px] md:h-[300px] bg-[#11468f] rounded-[20px]">
            <span className="flex md:px-[4rem] text-justify p-[2rem] text-white items-center justify-center">
            Daging sapi merupakan salah satu komoditi peternakan yang menjadi andalan sumber protein hewani yang mampu menunjang kebutuhan dasar pangan di Indonesia. Proses pengawetan daging sapi sangat penting untuk mempertahankan kualitas dan kandungan protein daging. Banyak produsen yang tidak bertanggung jawab menggunakan bahan kimia, seperti formalin, untuk mengawetkan dan menjaga tampilan daging sapi.
            </span>
          </div>
          <div className="w-[374px] h-[300px] bg-[#11468f] rounded-[20px]">
            <span>Image Section</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
