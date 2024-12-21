"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);
  const form = useRef();

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publickey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(publickey);

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publickey,
      })
      .then(
        () => {
          setMessageSent(true);
          setButtonDisable(true);
          form.current.reset();
          console.log("SUCCESS!");
          setTimeout(() => {
            setMessageSent(false);
            setButtonDisable(false);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div className="glass2 px-8 py-16 w-full max-w-md rounded-xl overflow-hidden">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full h-full flex flex-col gap-3 bg-transparent "
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full glass p-3 outline-none  border-b-2 border-gray-400"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          className="w-full glass p-3 outline-none  border-b-2 border-gray-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          id=""
          rows={4}
          className="w-full glass p-3 outline-none  border-b-2 border-gray-400"
        ></textarea>
        <button className="bg-primarycolor p-2 w-full transition-all duration-300 ease-in-out hover:bg-transparent border-2 border-primarycolor">
          Send
        </button>
      </form>
      <h4 className={`text-center py-2 ${messageSent ? "visible" : "hidden"}`}>
        Your Message successfully sent!!
      </h4>
    </div>
  );
};

export default ContactForm;
