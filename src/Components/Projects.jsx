import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectData from "../Data/ProjectData";

const Project = () => {
  return (
    <div className="w-full flex justify-center min-h-screen lg:min-h-[calc(100vh-72px)]">
      <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:max-w-[1300px]">
        {/* HEADER */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-4 sm:mb-5 md:mb-6 lg:mb-8">
          🚀 My <span className="text-blue-600">Projects</span>
        </h1>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {ProjectData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl lg:rounded-2xl border shadow-sm
                         hover:shadow-lg lg:hover:shadow-xl transition duration-300
                         overflow-hidden flex flex-col h-full"
            >
              {/* IMAGE */}
              <div className="p-3 sm:p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg sm:rounded-xl w-full h-[160px] sm:h-[180px] md:h-[200px] object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2 text-blue-600">
                  <span className="text-base sm:text-lg">{project.icon}</span>
                  {project.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md sm:rounded-lg
                                 bg-blue-50 text-blue-600 border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex justify-end gap-2 sm:gap-3 mt-4 sm:mt-5 md:mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2
                               border border-blue-500 text-blue-500
                               rounded-lg text-xs sm:text-sm hover:bg-blue-50 transition
                               whitespace-nowrap"
                  >
                    <FaGithub className="text-sm sm:text-base" />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2
                               bg-blue-600 text-white rounded-lg
                               text-xs sm:text-sm hover:bg-blue-700 transition
                               whitespace-nowrap"
                  >
                    <FaExternalLinkAlt className="text-sm sm:text-base" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* If you have many projects, consider adding pagination or load more */}
        {ProjectData.length > 6 && (
          <div className="flex justify-center mt-10 sm:mt-12 md:mt-16">
            <button className="px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 text-white 
                             rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;