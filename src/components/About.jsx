import React from "react";

const About = () => {
  return (
    <>
      <section className="lg:container font-['Montserrat'] mt-[40px]">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[40px] uppercase text-[#11468f] font-black">
            About Research
          </span>
          <span className="bg-[#11468f] text-white px-4 py-2 mt-1 rounded-[7px] ">
            Formalin Detection
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center mt-10 gap-[2rem]">
          <div className="w-[650px] h-[300px] bg-[#11468f] rounded-[20px]">
            <span className="flex items-center justify-center">
              Reasearch About Section
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
