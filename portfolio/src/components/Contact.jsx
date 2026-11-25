import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-[#FFFFFF] text-[#252525]">
      <div className="container-custom">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#F97316] uppercase tracking-widest text-sm font-semibold">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#252525]">
            Let's Work <span className="text-[#F97316]">Together</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-bold text-[#252525]">
              Have a project in mind?
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              I'm always interested in hearing about new projects
              and creative opportunities. Let's create something amazing.
            </p>

            <div className="space-y-7 mt-10">

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-[#FFF3E8] p-4 rounded-xl text-[#F97316]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="font-medium text-[#252525]">
                    hello@example.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-[#FFF3E8] p-4 rounded-xl text-[#F97316]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="font-medium text-[#252525]">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="bg-[#FFF3E8] p-4 rounded-xl text-[#F97316]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="font-medium text-[#252525]">
                    Kerala, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
            className="space-y-5"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-[#FFF9F5] text-[#252525] placeholder-gray-500 border border-[#F3D8C5] rounded-xl p-4 outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-[#FFF9F5] text-[#252525] placeholder-gray-500 border border-[#F3D8C5] rounded-xl p-4 outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full bg-[#FFF9F5] text-[#252525] placeholder-gray-500 border border-[#F3D8C5] rounded-xl p-4 outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full bg-[#FFF9F5] text-[#252525] placeholder-gray-500 border border-[#F3D8C5] rounded-xl p-4 outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition resize-none"
            />

            <button
              type="submit"
              className="bg-[#F97316] text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold hover:bg-[#EA580C] hover:shadow-lg hover:shadow-orange-200 transition duration-300"
            >
              Send Message <Send size={18} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
