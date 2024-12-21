import { after } from "node:test";
import React from "react";

const Resume = () => {
  const experiencedata = [
    {
      name: "Web developer",
      year: "2020-present",
      comapany: "Allstate Solutions Pvt Ltd",
    },
    {
      name: "Web developer",
      year: "2020-present",
      comapany: "Allstate Solutions Pvt Ltd",
    },
    {
      name: "Web developer",
      year: "2020-present",
      comapany: "Allstate Solutions Pvt Ltd",
    },
  ];
  const educationdata = [
    {
      name: "B.Tech",
      year: "2018-2022",
      comapany: "LPU",
    },
    {
      name: "Web developer",
      year: "2020-present",
      comapany: "Allstate Solutions Pvt Ltd",
    },
  ];
  const skillsdata = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next.Js",
    "MongoDB",
    "Node",
    "Express",
  ];
  return (
    <div className="w-full z-20 h-full flex justify-center items-center flex-col">
      <div className="w-11/12 h-full pt-14 pb-12 flex flex-col gap-4 justify-center items-center">
        <div className="w-full flex gap-10 justify-center items-center">
          <div className="w-1/2">
            <div className="rounded-xl px-6 py-14 overflow-hidden primary-glass border border-gray-600/[.5]">
              <div className="w-full z-30 relative">
                <h1 className="text-2xl font-bold">Experience</h1>
              </div>
              <div className="py-5 z-30 w-10/12 mx-auto relative ">
                <ul className="relative before:content-[''] before:w-0.5 before:h-full before:bg-gray-400 before:absolute before:-left-5 before:top-0 ">
                  {experiencedata.map((experience, index) => {
                    return (
                      <li
                        key={index}
                        className={`py-3 relative ${
                          index === 0
                            ? "after:content-[''] after:w-5 after:h-5 after:bg-primarycolor after:absolute after:-left-7 after:top-4 after:rounded-full"
                            : ""
                        } before:content-[''] before:w-5 before:h-5 before:bg-gray-400 before:absolute before:-left-7 before:top-4 before:rounded-full`}
                      >
                        <h4 className="text-md font-bold text-white">
                          {experience.name}
                        </h4>
                        <p className="text-sm py-1 text-gray-400">
                          {experience.year}
                        </p>
                        <p className="text-md py-1 font-bold text-gray-400">
                          {experience.comapany}
                        </p>
                      </li>
                    );
                  })}
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-2 py-4 pb-4">
            <div className="rounded-xl p-4 overflow-hidden glass2 border border-gray-600/[.5]">
              <div className="w-full z-30 relative">
                <h1 className="text-2xl font-bold">Education</h1>
              </div>
              <div className="py-5 z-30 w-10/12 mx-auto relative ">
                <ul className="relative before:content-[''] before:w-0.5 before:h-full before:bg-gray-400 before:absolute before:-left-5 before:top-0 ">
                  {educationdata.map((education, index) => {
                    return (
                      <li
                        key={index}
                        className={`py-3 relative ${
                          index === 0
                            ? "after:content-[''] after:w-5 after:h-5 after:bg-primarycolor after:absolute after:-left-7 after:top-4 after:rounded-full"
                            : ""
                        } before:content-[''] before:w-5 before:h-5 before:bg-gray-400 before:absolute before:-left-7 before:top-4 before:rounded-full`}
                      >
                        <h4 className="text-md font-bold text-white">
                          {education.name}
                        </h4>
                        <p className="text-sm py-1 text-gray-400">
                          {education.year}
                        </p>
                        <p className="text-md py-1 font-bold text-gray-400">
                          {education.comapany}
                        </p>
                      </li>
                    );
                  })}
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl p-4 overflow-hidden glass2 border border-gray-600/[.5]">
              <div className="w-full z-30 relative">
                <h1 className="text-2xl font-bold">Skills</h1>
              </div>
              <div className="py-5 z-30 w-10/12 mx-auto relative ">
                <ul className=" relative flex gap-2 flex-wrap">
                  {skillsdata.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className={`text-sm py-2 rounded-xl relative glass px-2 overflow-hidden cursor-default`}
                      >
                        {skill}
                      </li>
                    );
                  })}
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
