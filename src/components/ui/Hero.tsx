import React from "react";
import {
  FaDev,
  FaDribbble,
  FaGithub,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import Counter from "./Counter";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="w-full z-20 h-full flex justify-center items-center flex-col">
      <div className="w-11/12 h-full pt-16 flex justify-center items-center">
        <div className="w-7/12">
          <div className="text_container">
            <h5 className="text-neutral-300 ml-2">Hi there!!</h5>
            <h2 className="text-7xl font-bold">
              I'm <span className="text-primarycolor">Suryansh</span>,
              <br />a web developer..
            </h2>
            {/* <p className="py-2 text-base ml-2 text-neutral-300 ">
              a Web-Developer who believes in enhancing the skills and knowledge
            </p> */}
            <a href="/" className="w-auto cursor-default ">
              <button className="bg-primarycolor flex justify-between mt-1 gap-1 items-center px-6 rounded-2xl border-2 text-sm whitespace-nowrap py-2 hover:bg-transparent hover:border-2 border-primarycolor  transition-all ease-out duration-200">
                <FiDownload />
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="w-5/12  flex justify-center items-center">
          {/* apply border and adjust height of img */}
          <div className="hero_img_container bg-secondary w-full max-w-sm h-[380px] rounded p-5  border-white">
            <img
              src="./suryansh.jpg"
              alt="Hero Image"
              className="w-full h-full rounded-3xl "
            />
          </div>
        </div>
      </div>
      <div className="w-11/12 h-fit gap-3 pb-4 flex justify-center items-center">
        <div className="w-7/12 flex h-full items-center py-5 justify-around bg-secondary p-3 rounded-3xl border ">
          <div className="flex w-full items-center justify-center gap-3 border-r-2 ">
            <div className="font-bold flex text-3xl text-primarycolor">
              <Counter from={0} to={2} />+
            </div>
            <div>
              <h4 className="text-md">
                Years of
                <br /> Experience
              </h4>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-3">
            <div className="font-bold flex text-3xl text-primarycolor">
              <Counter from={0} to={25} />+
            </div>
            <div>
              <h4 className="text-md">
                projects
                <br /> Completed
              </h4>
            </div>
          </div>
        </div>
        <div className="w-5/12 flex h-fit items-center py-5 justify-around bg-secondary p-3 rounded-3xl border ">
          <div className="flex w-full items-center justify-center gap-3  ">
            <div className="flex w-full items-center justify-center gap-3">
              <ul className="flex gap-4">
                <li>
                  <a href="">
                    <button className="w-14 h-14 rounded-full flex justify-center items-center glass border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor">
                      <FaLinkedin className="w-8 h-8 text-white" />
                    </button>
                  </a>
                </li>
                <li>
                  <a href="">
                    <button className="w-14 h-14 rounded-full flex justify-center items-center glass border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor">
                      <FaYoutube className="w-8 h-8 text-white" />
                    </button>
                  </a>
                </li>
                <li>
                  <a href="">
                    <button className="w-14 h-14 rounded-full flex justify-center items-center glass border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor">
                      <FaGithub className="w-8 h-8 text-white" />
                    </button>
                  </a>
                </li>
                <li>
                  <a href="">
                    <button className="w-14 h-14 rounded-full flex justify-center items-center glass border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor">
                      <SiGeeksforgeeks className="w-8 h-8 text-white" />
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
