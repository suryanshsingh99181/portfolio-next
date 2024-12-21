const ProjectCard = ({ imgSrc, title, main, demoLink, srcLink }) => {
  return (
    <div className="w-full">
      <div className="w-full p-2 md:p-6 flex flex-col bg-white shadow-xl shadow-slate-900 rounded-2xl">
        <img
          className="p-2 rounded-3xl shadow-md shadow-black h-96"
          src={imgSrc}
          alt="bannerimage"
        />
        <h3 className=" pt-2 px-4 text-xl md:text-2xl font-semibold leading-normal text-slate-600   overflow-x-scroll scrollbar-hide whitespace-nowrap  ">
          {title}
        </h3>
        <p className="px-4 text-sm md:text-base leading-tight py-2 text-red-400 text-nowrap">
          {main}
        </p>
        <div className="md:p-4 flex gap-2 md:gap-4 ">
          <a href={demoLink}>
            <button
              className={`md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] ${
                !demoLink ? "hidden" : ""
              }`}
            >
              Demo
            </button>
          </a>
          <a href={srcLink}>
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Source Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
