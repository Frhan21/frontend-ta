const Purpose = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center mt-[6rem] font-['Montserrat']">
          <span className="text-[40px] font-black uppercase text-[#11468f]">
            Purpose and Benefit
          </span>
          <span className="bg-[#11468f] text-white px-4 py-2 rounded-[10px]">
            Formalin Detection
          </span>
        </div>

        <div className="flex sm:flex-row flex-col items-center justify-center mt-[6rem] gap-[4rem]">
          {/* Kotak 1 */}
          <div className="flex flex-col items-center">
            <span className="text-4xl uppercase mx-auto font-extrabold text-[#11468f] my-2">
              Purpose Research
            </span>
            <div className="py-[8rem] px-[16rem] bg-white border-2 border-[#11468f] rounded-[20px]"></div>
          </div>
          {/* Kotak 2 */}
          <div className="flex flex-col items-center">
            <span className="text-4xl uppercase mx-auto font-extrabold text-[#11468f] my-2">
              Benefit of Research
            </span>
            <div className="py-[8rem] px-[16rem] bg-white border-2 border-[#11468f] rounded-[20px]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purpose;
