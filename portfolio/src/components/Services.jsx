
import {
  Palette,
  Smartphone,
  Monitor,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful and user-friendly interfaces with a focus on user experience.",
    number: "01",
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description:
      "Designing modern mobile experiences for Android and iOS applications.",
    number: "02",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Building responsive, modern and visually attractive website designs.",
    number: "03",
  },
  {
    icon: Layers,
    title: "Prototyping",
    description:
      "Creating interactive prototypes to visualize and test digital products.",
    number: "04",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-[#FFFFFF] text-[#252525]">
      <div className="container-custom">

        <div className="text-center mb-16">
          <p className="text-[#F97316] uppercase tracking-widest text-sm font-semibold">
            What I Do
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#252525]">
            My <span className="text-[#F97316]">Services</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="bg-[#FFF9F5] border border-[#F3D8C5] p-8 rounded-xl hover:border-[#F97316]/60 hover:-translate-y-2 transition duration-300 group"
              >
                <div className="flex justify-between items-center">
                  <Icon
                    size={38}
                    className="text-[#F97316] group-hover:scale-110 transition"
                  />

                  <span className="text-[#F97316]/40 text-3xl font-bold">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold mt-8 text-[#252525]">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-7 mt-4">
                  {service.description}
                </p>

                <div className="h-1 w-10 bg-[#F97316] mt-7 group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;
