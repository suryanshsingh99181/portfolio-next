import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="w-full z-20 h-full flex justify-center items-center flex-col">
      <div className="w-11/12 h-full pt-16 flex flex-col gap-8 justify-center py-6 items-center">
        <div className="w-full flex gap-10 justify-center items-center">
          <div className="w-1/2">
            <div className="rounded-xl p-6 glass2 border border-gray-600/[.5]">
              <div className="flex gap-3 ">
                <div>
                  <h1 className="text-2xl font-bold">Skills</h1>
                </div>
              </div>
              <div className="w-full py-2">
                <ui>
                  <li>
                    Front End: HTML & CSS, Javascript, Typescript, ReactJs{" "}
                  </li>
                  <li>Backend End: NodeJs, ExpressJs </li>
                  <li>Database: MongoDb </li>
                  <li>Tools: Git & Github </li>
                </ui>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full flex gap-10 justify-center items-center">
          <div className="w-1/2">
            <div className="rounded-xl p-6 glass2 border border-gray-600/[.5]">
              <div className="flex gap-3 ">
                <div className="w-14 h-14">
                  <img src="./" alt="icon" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Full Stack Developer</h1>
                </div>
              </div>
              <div className="w-full py-2">
                <p className="text-sm ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  voluptatibus, veritatis repellendus tenetur id natus!
                  Doloribus dolor aut expedita? Ratione cupiditate ad quod
                  veritatis dolores ab provident tempore error molestiae.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="rounded-xl p-6 glass2 border border-gray-600/[.5]">
              <div className="flex gap-3 ">
                <div className="w-14 h-14">
                  <img src="./" alt="icon" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Graphic Designing</h1>
                </div>
              </div>
              <div className="w-full py-2">
                <p className="text-sm ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  voluptatibus, veritatis repellendus tenetur id natus!
                  Doloribus dolor aut expedita? Ratione cupiditate ad quod
                  veritatis dolores ab provident tempore error molestiae.
                </p>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Services;
