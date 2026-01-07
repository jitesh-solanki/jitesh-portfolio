import { FaCode, FaClock, FaMicrochip, FaTrophy } from "react-icons/fa";
import {
  FaHeadphones,
  FaCamera,
  FaGamepad,
  FaBasketballBall,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* Component 1 - ABOUT HEADING SECTION */}
      <div className="w-full flex justify-center h-auto min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:h-[calc(100vh-72px)]">
        <div className="container flex items-center justify-center px-4">
          <h1 className="text-black text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[170px] font-normal text-center">
            ABOUT <span className="text-purple-800">ME?</span>
          </h1>
        </div>
      </div>

      {/* Component 2 - ABOUT CONTENT SECTION */}
      <div className="w-full flex justify-center h-auto min-h-screen lg:h-[calc(100vh-72px)] overflow-hidden">
        <div className="container flex flex-col lg:flex-row">
          {/* Image Section - Comes first on mobile */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-1 p-4 sm:p-6 md:p-8">
            <img
              src="/profile-pic1.png"
              alt="Profile"
              className="h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:h-full lg:max-h-none object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 bg-gradient-to-r from-gray-200 to-black shadow-lg p-4 sm:p-6 md:p-8 order-2 lg:order-2">
            <div className="w-full bg-[#ffffff] rounded-2xl lg:rounded-[20px] p-4 sm:p-6 md:p-8 lg:ps-[40px] lg:py-[50px] lg:pe-[60px] text-justify mt-4 sm:mt-6 md:mt-8 lg:mt-[100px]">
              <h1 className="text-blue-800 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-4">
                Who am i ?
              </h1>
              <div className="space-y-4 sm:space-y-5">
                <p className="text-sm sm:text-base md:text-md">
                  I'm Jitesh Solanki, a passionate Frontend Developer and
                  Computer Engineering student who enjoys building modern,
                  responsive, and user-friendly web applications. I focus on
                  creating clean interfaces that solve real-world problems and
                  deliver smooth user experiences.
                </p>
                <p className="text-sm sm:text-base md:text-md">
                  Beyond writing code, I love exploring UI/UX design,
                  experimenting with layouts, animations, and interactions to
                  blend creativity with performance. I believe a great product
                  is not just functional, but also intuitive and visually
                  engaging.
                </p>
                <p className="text-sm sm:text-base md:text-md">
                  I am a Computer Engineering student with hands-on experience
                  in HTML, CSS, JavaScript, React.js, and modern frontend tools.
                  I'm actively seeking opportunities where I can contribute my
                  frontend skills, learn from industry professionals, and grow
                  as a developer while building impactful digital products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Component 3 - STATS & HOBBIES SECTION */}
      <div className="container mx-auto h-auto lg:h-[calc(100vh-72px)] flex flex-col py-8 sm:py-12 md:py-16 lg:py-0">
        {/* ================= STATS SECTION ================= */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[200px] flex flex-1 justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 w-full">
            {[
              { icon: <FaCode />, value: "5+", label: "Projects Completed" },
              {
                icon: <FaClock />,
                value: "6 Month",
                label: "Experience React",
              },
              {
                icon: <FaMicrochip />,
                value: "4+",
                label: "Technologies\nMastered",
              },
              { icon: <FaTrophy />, value: "jitesh", label: "solanki" },
            ].map((item, index) => (
              <div
                key={index}
                className="
    relative w-full max-w-[280px] mx-auto
    h-[250px] sm:h-[300px] md:h-[320px] lg:h-[340px]
    rounded-xl lg:rounded-2xl
    flex flex-col items-center justify-center text-center p-4
    transition-all duration-300 sm:mb-5

    /* ✅ Mobile + sm + md — permanent hover look */
    border border-cyan-400
    shadow-[0_20px_60px_rgba(0,0,0,0.12)]
    -translate-y-2

    /* 🔁 Reset at lg */
    lg:border-transparent
    lg:shadow-none
    lg:translate-y-0

    /* 🖱 Hover only on lg+ */
    lg:hover:border lg:hover:border-cyan-400
    lg:hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
    lg:hover:-translate-y-2
  "
              >
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-purple-600 text-2xl sm:text-3xl">
                  {item.icon}
                </div>

                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r
                         from-purple-500 to-pink-400
                         bg-clip-text text-transparent"
                >
                  {item.value}
                </h2>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 tracking-wide whitespace-pre-line">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= HOBBIES SECTION ================= */}
        <div className="pb-6 sm:pb-8 md:pb-10 lg:pb-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0">
          <h2 className="flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-5 md:mb-6">
            Hobbies
          </h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {[
              {
                icon: <FaHeadphones />,
                label: "Listening to Music",
                color: "text-purple-600",
              },
              {
                icon: <FaCamera />,
                label: "Photography",
                color: "text-gray-700",
              },
              {
                icon: <FaGamepad />,
                label: "Gaming",
                color: "text-purple-700",
              },
              {
                icon: <FaBasketballBall />,
                label: "Sports & Fitness",
                color: "text-orange-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
                         rounded-lg sm:rounded-xl bg-white shadow-md
                         cursor-pointer transition-all duration-300
                         hover:border hover:border-purple-500
                         hover:shadow-lg flex-1 sm:flex-none min-w-[140px] sm:min-w-0"
              >
                <span className={`${item.color} text-lg sm:text-xl`}>
                  {item.icon}
                </span>
                <span className="text-xs sm:text-sm font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
