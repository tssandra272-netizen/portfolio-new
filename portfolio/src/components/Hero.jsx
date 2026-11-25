
import {
  ArrowUpRight,
  Download,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-white text-[#252525]"
    >
      <div className="container-custom grid md:grid-cols-2 items-center gap-10 pt-28 pb-16">

        {/* Left Content */}
        <div className="z-10">

          <p className="text-gray-500 text-lg mb-2">
            Hi! I am
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Sandra...
          </h2>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#F97316] leading-tight">
            UI/UX Designer
          </h1>

          <p className="text-gray-600 mt-6 max-w-md leading-7">
            I create beautiful, intuitive and user-friendly digital
            experiences that help brands connect with their audience.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-7">

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-9">

            <a
              href="#contact"
              className="bg-[#F97316] text-white px-8 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-[#EA580C] transition"
            >
              Hire Me <ArrowUpRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-gray-300 px-7 py-3 rounded-md text-gray-700 flex items-center gap-2 hover:border-[#F97316] hover:text-[#F97316] transition"
            >
              Download CV <Download size={17} />
            </a>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 max-w-md mt-12 bg-[#FFF3E8] p-5 rounded-lg">

            {[
              { number: "5+", label: "Experiences" },
              { number: "20+", label: "Projects done" },
              { number: "80+", label: "Happy Clients" },
            ].map((item) => (
              <div
                key={item.label}
                className="border-r border-orange-200 last:border-none pl-2"
              >
                <h3 className="text-[#F97316] text-xl font-bold">
                  {item.number}
                </h3>

                <p className="text-gray-600 text-xs mt-2">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center">

          <div className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full bg-[#FFF3E8]" />

          

          <div className="absolute top-10 right-5 text-8xl font-black text-orange-500/[0.05]">
            DESIGN
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;