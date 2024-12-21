import React from "react";
import ContactForm from "../../components/ui/ContactForm";

const contact = () => {
  return (
    <div className="w-full z-20 h-full flex justify-center items-center flex-col">
      <div className="w-11/12 h-full pt-14 pb-12 flex flex-col gap-4 justify-center items-center">
        <div className="w-full">
          <h1 className="font-bold text-center text-2xl ">Contact Me</h1>
        </div>
        <div className="w-full flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default contact;
