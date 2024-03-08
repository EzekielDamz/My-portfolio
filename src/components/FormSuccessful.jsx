import React from "react";

const FormSuccessful = () => {
  return (
    <section>
      {/* <Header /> */}
      <div className="absolute -mt-[13rem]  rounded-xl bg-white  py-[2rem] px-[5rem] mr-14">
        <p className="text-[#0F152E] flex justify-center font-KodeMono text-xl">
          Form Submitted Successfully
        </p>
        <button className="text-white mt-2 btn-style px-5 py-1 font-KodeMono rounded-lg">
          OK
        </button>
      </div>
    </section>
  );
};

export default FormSuccessful;
