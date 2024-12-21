import { div, image } from "framer-motion/client";
import React from "react";
import ProjectCard from "../../components/ui/ProjectCard";

const Works = () => {
  const worksdata = [
    {
      image: "./1.jpg",
      name: "Authentication App",
      category: "full-stack",
      techUsed: ["NodeJs", "Express", "MongoDb"],
      demoLink: "",
      githubLink: "https://github.com/suryanshsingh99181/Authentication-App",
    },

    {
      image: "./edit_pic.png",
      name: "Image Editor",
      category: "full-stack",
      techUsed: ["ReactJs", "Typescript", "Sharp", "Multer"],
      demoLink: "https://image-processor-tawny.vercel.app/",
      githubLink: "https://github.com/suryanshsingh99181/image-processor",
    },
    {
      image: "./9.png",
      name: "Mobile Website",
      category: "nextjs",
      techUsed: ["NextJs"],
      demoLink: "",
      githubLink: "https://github.com/suryanshsingh99181/website-using-nextJs",
    },
    {
      image: "./music.png",
      name: "Music Player",
      category: "reactjs",
      techUsed: ["ReactJs", "TailwindCss"],
      demoLink: "https://music-player-ui-topaz.vercel.app/",
      githubLink: "https://github.com/suryanshsingh99181/Music-Player-UI",
    },
    {
      image: "./2.png",
      name: "Website with Firebase Authentication",
      category: "react",
      techUsed: ["NodeJs", "Express", "MongoDb"],
      demoLink: "https://social-media-app-2015a.web.app/",
      githubLink:
        "https://github.com/suryanshsingh99181/Authentication-App-Firebase",
    },
    {
      image: "./4.jpeg",
      name: "Myntra Functional Clone",
      category: "reactjs",
      techUsed: ["ReactJs", "TailwindCss"],
      demoLink: "https://myntra-functional-clone-react.vercel.app/",
      githubLink:
        "https://github.com/suryanshsingh99181/myntra-functional-clone-react",
    },
    {
      image: "./2.jpg",
      name: "Social Media App",
      category: "reactjs",
      techUsed: ["ReactJs", "Bootstrap"],
      demoLink: "https://social-media-app-eight-alpha.vercel.app/",
      githubLink: "https://github.com/suryanshsingh99181/social-media-app",
    },
    {
      image: "./8.jpg",
      name: "Counter App",
      category: "reactjs",
      techUsed: ["React Redux"],
      demoLink: "https://suryanshsingh99181.github.io/counter/",
      githubLink: "https://github.com/suryanshsingh99181/counter",
    },
    {
      image: "./13.png",
      name: "Personal PortFolio",
      category: "reactjs",
      techUsed: ["ReactJs", "TailwindCss"],
      demoLink: "https://portfolio-opal-alpha-28.vercel.app/",
      githubLink: "https://github.com/suryanshsingh99181/portfolio",
    },
    {
      image: "./10.jpg",
      name: "Todo App",
      category: "reactjs",
      techUsed: ["ReactJs", "Bootstrap"],
      demoLink: "",
      githubLink: "https://github.com/suryanshsingh99181/todo_app-react",
    },
    {
      image: "./3.png",
      name: "Calculator",
      category: "reactjs",
      techUsed: ["ReactJs", "TailwindCss"],
      demoLink: "https://suryanshsingh99181.github.io/calculator/",
      githubLink: "https://github.com/suryanshsingh99181/calculator",
    },
    {
      image: "./7.png",
      name: "Myntra Functional Clone",
      category: "js",
      techUsed: ["Javascript", "TailwindCss"],
      demoLink: "https://suryanshsingh99181.github.io/myntra-funtional-clone/",
      githubLink:
        "https://github.com/suryanshsingh99181/myntra-funtional-clone",
    },
    {
      image: "./6.png",
      name: "Rock Paper Scissor",
      category: "js",
      techUsed: ["HTML", "TailwindCss", "Javascript"],
      demoLink: "https://suryanshsingh99181.github.io/stone-paper-scissor/",
      githubLink: "https://github.com/suryanshsingh99181/stone-paper-scissor",
    },
    {
      image: "./11.jpg",
      name: "Tic Tac Toe",
      category: "js",
      techUsed: ["HTML", "CSS", "Javascript"],
      demoLink: "",
      githubLink: "",
    },
    {
      image: "./14.png",
      name: "Personal PortFolio",
      category: "js",
      techUsed: ["Javascript", "tailwindCss"],
      demoLink: "https://suryanshsingh99181.github.io/portfolio-website/",
      githubLink: "https://github.com/suryanshsingh99181/portfolio-website",
    },
    {
      image: "./5.jpg",
      name: "Amazon Clone UI",
      category: "UI",
      techUsed: ["HTML", "CSS"],
      demoLink: "https://suryanshsingh99181.github.io/amazon-clone-UI/",
      githubLink: "https://github.com/suryanshsingh99181/amazon-clone-UI",
    },
  ];
  return (
    <div className="w-full z-20 h-full flex justify-center items-center flex-col">
      <div className="w-11/12 h-full pt-14 pb-12 flex flex-col gap-4 justify-center items-center">
        <div className="w-full ">
          <h1 className="font-bold text-center text-2xl">Work & Projects </h1>
        </div>
        <div className="w-full m-2">
          <ul className="flex items-center justify-evenly">
            <li>All</li>
            <li>Full Stack</li>
            <li>NextJs</li>
            <li>ReactJs</li>
            <li>Javascript</li>
            <li>HTML & CSS</li>
          </ul>
        </div>
        <div className="w-full grid grid-cols-3 gap-3">
          {" "}
          {worksdata.map((project, index) => {
            return (
              <div key={index} className="">
                <ProjectCard
                  imgSrc={project.image}
                  title={project.name}
                  main={`Tech Used: ${project.techUsed}`}
                  demoLink={project.demoLink}
                  srcLink={project.githubLink}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
