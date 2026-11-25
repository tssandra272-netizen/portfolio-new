import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#F3D8C5] py-8">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-5">

        <h2 className="text-2xl font-extrabold text-[#F97316]">
          LOGO<span className="text-[#252525]">.</span>
        </h2>

        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Mahmood Fazile. All rights reserved.
        </p>

        <a
          href="#home"
          aria-label="Back to top"
          className="bg-[#F97316] text-white p-3 rounded-full hover:bg-[#EA580C] transition"
        >
          <ArrowUp size={20} />
        </a>

      </div>
    </footer>
  );
};

export default Footer;
