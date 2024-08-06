const Purpose = () => {
  return (
    <>
      <section id="purpose">
        <div className="flex flex-col text-center items-center justify-center mt-6 md:mt-[10rem] font-['Montserrat']">
          <span className="text-[40px] p-2 md:text-[40px] font-black uppercase text-[#11468f]">
            Purpose and Benefit
          </span>
          <span className="bg-[#11468f] text-white px-4 py-2 rounded-[10px]">
            Formalin Detection
          </span>
        </div>

        <div className="flex sm:flex-row flex-col items-center justify-center gap-2 md:gap-[4rem] mx-4 md:mx-[10rem] mt-4">
          {/* Kotak 1 */}
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl text-center uppercase mx-auto font-extrabold text-[#11468f] my-2">
              Purpose Research
            </span>
            <div className="py-[2rem] text-center px-0.5 md:px-[2rem] md:mx-2 bg-white border-2 border-[#11468f] rounded-[20px]">
              <span className="text-[#11468f]">
              Penelitian ini bertujuan mengembangkan sebuah rancang bangun alat mendeteksi formalin pada daging sapi dengan menggunakan sistem optik
              </span>
            </div>
          </div>
          {/* Kotak 2 */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl text-center uppercase mx-auto font-extrabold text-[#11468f] my-2">
              Benefit of Research
            </span>
            <div className="py-[2rem] text-center px-[2rem] mx-2 bg-white border-2 border-[#11468f] rounded-[20px]">
              <span className="text-[#11468f]">
              Manfaat penelitian ini untuk memberikan kemudahan kepada konsumen dalam menghindari produk daging yang mengandung formalin dan berpotensi membahayakan
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purpose;
