
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">

        <div className="max-w-4xl mx-auto text-center">

          {/* Small Heading */}
          <p className="text-accent font-semibold tracking-[0.25em] uppercase text-sm">
            About Me
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
            Designing Digital
            <span className="text-accent"> Experiences</span>
          </h2>

          {/* Decorative Line */}
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-6"></div>

          {/* Description */}
          <p className="text-gray-400 mt-8 leading-8 text-base md:text-lg">
            I'm a passionate UI/UX designer focused on creating
            meaningful digital experiences. I combine creativity,
            research and modern design principles to build products
            that are both beautiful and easy to use.
          </p>

          <p className="text-gray-400 mt-5 leading-8 text-base md:text-lg">
            My goal is to transform complex ideas into simple,
            elegant and engaging user experiences.
          </p>

          {/* Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-accent px-8 py-4 rounded-xl mt-9 font-semibold hover:bg-orange-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            Let's Talk
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default About;
