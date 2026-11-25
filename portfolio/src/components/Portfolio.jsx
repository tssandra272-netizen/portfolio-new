
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Website",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
  },
  {
    title: "Mobile Banking App",
    category: "App Design",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900",
  },
  {
    title: "Creative Dashboard",
    category: "UI Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
  },
  {
    title: "Landing Page Design",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-[#FFFFFF] text-[#252525]">
      <div className="container-custom">

        <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 gap-5">

          <div>
            <p className="text-[#F97316] uppercase tracking-widest text-sm font-semibold">
              My Recent Work
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#252525]">
              Featured <span className="text-[#F97316]">Projects</span>
            </h2>
          </div>

          <a
            href="#contact"
            className="text-[#F97316] flex items-center gap-2 hover:gap-4 transition"
          >
            Start a Project <ExternalLink size={17} />
          </a>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-[#FFF9F5] border border-[#F3D8C5] rounded-xl overflow-hidden"
            >

              <div className="overflow-hidden h-[260px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6 flex justify-between items-center">

                <div>
                  <p className="text-[#F97316] text-sm">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-semibold mt-2 text-[#252525]">
                    {project.title}
                  </h3>
                </div>

                <span className="text-[#F97316]/50 text-2xl font-bold">
                  0{index + 1}
                </span>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
