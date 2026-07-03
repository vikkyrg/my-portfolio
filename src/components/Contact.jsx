import { FiMail, FiGithub, FiLinkedin, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FadeIn from "./FadeIn";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null); // success | error | null
  const [loading, setLoading] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus(null);

  emailjs
    .sendForm(
      "service_75g3bc1",
      "template_7azfh5l",
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setStatus("success");
        setLoading(false);
        form.current.reset();

        setTimeout(() => setStatus(null), 5000);
      },
      (error) => {
        setStatus("error");
        setLoading(false);
        console.log(error.text);

        setTimeout(() => setStatus(null), 5000);
      }
    );
};

  return (
  <FadeIn>
  <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 relative z-20">
    
    {/* SECTION HEADER */}
    <div className="max-w-7xl mx-auto relative z-10 mb-16 sm:mb-20 flex flex-col items-center text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9FAFB] tracking-tight">
        Contact
      </h2>
      <div className="w-12 h-1.5 bg-cyan-500 mt-5 rounded-full" />
    </div>

    <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

    {/* LEFT SIDE — LET'S CONNECT */}
    <div className="relative">
      <div className="bg-[#020817] p-8 sm:p-10 md:p-12 rounded-3xl border border-[#1E293B]">
        
        <div className="mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#F9FAFB]">
            Let's Connect
          </h3>
        </div>

        <p className="text-[#9CA3AF] text-base sm:text-lg mb-12 max-w-prose font-light leading-relaxed">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech!
        </p>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <a 
            href="mailto:rvikky05@gmail.com"
            className="flex flex-col items-center p-6 rounded-2xl bg-[#020817] border border-[#1E293B] hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-[#020817] border border-[#1E293B] rounded-2xl flex items-center justify-center mb-4 group-hover:border-cyan-500/30 transition-colors shadow-sm">
              <FiMail className="text-[#9CA3AF] group-hover:text-cyan-400 text-xl transition-colors" />
            </div>
            <span className="text-[#F9FAFB] font-medium group-hover:text-cyan-400 transition-colors text-sm mb-1">Email</span>
            <span className="text-xs text-[#9CA3AF]">rvikky05@gmail.com</span>
          </a>

          <a 
            href="https://github.com/vikkyrg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-2xl bg-[#020817] border border-[#1E293B] hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-[#020817] border border-[#1E293B] rounded-2xl flex items-center justify-center mb-4 group-hover:border-cyan-500/30 transition-colors shadow-sm">
              <FiGithub className="text-[#9CA3AF] group-hover:text-cyan-400 text-xl transition-colors" />
            </div>
            <span className="text-[#F9FAFB] font-medium group-hover:text-cyan-400 transition-colors text-sm mb-1">GitHub</span>
            <span className="text-xs text-[#9CA3AF]">@vikkyrg</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/vignesh-r-a634a2293/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-2xl bg-[#020817] border border-[#1E293B] hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 transform hover:-translate-y-1 group sm:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 bg-[#020817] border border-[#1E293B] rounded-2xl flex items-center justify-center mb-4 group-hover:border-cyan-500/30 transition-colors shadow-sm">
              <FiLinkedin className="text-[#9CA3AF] group-hover:text-cyan-400 text-xl transition-colors" />
            </div>
            <span className="text-[#F9FAFB] font-medium group-hover:text-cyan-400 transition-colors text-sm mb-1">LinkedIn</span>
            <span className="text-xs text-[#9CA3AF]">Vignesh R</span>
          </a>

        </div>
      </div>
    </div>

    {/* RIGHT SIDE — CONTACT FORM */}
    <div className="relative">
      <div className="bg-[#020817] p-8 sm:p-10 md:p-12 rounded-3xl border border-[#1E293B]">
        
        <h3 className="text-2xl sm:text-3xl font-bold text-[#F9FAFB] mb-8">
          Send a Message
        </h3>

        {/* Status Messages */}
        {status && (
          <div
            className={`mb-8 p-5 rounded-2xl border transition-all duration-300 ${
              status === "success"
                ? "bg-[#020817] border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                : "bg-[#020817] border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`shrink-0 w-12 h-12 rounded-2xl border flex items-center justify-center ${status === "success" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-red-500/10 border-red-500/20 text-red-400"}`}>
                {status === "success" ? (
                  <FiCheckCircle className="text-2xl" />
                ) : (
                  <FiXCircle className="text-2xl" />
                )}
              </div>
              <div>
                {status === "success" ? (
                  <>
                    <h4 className="text-[#F9FAFB] font-medium text-base">Message Sent Successfully</h4>
                    <p className="text-sm text-[#9CA3AF] mt-1 font-light">Thank you! I'll get back to you shortly.</p>
                  </>
                ) : (
                  <>
                    <h4 className="text-[#F9FAFB] font-medium text-base">Something Went Wrong</h4>
                    <p className="text-sm text-[#9CA3AF] mt-1 font-light">Please try again or email me directly.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-[#020817] border border-[#1E293B] text-[#F9FAFB] placeholder-[#64748B] focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-[#020817] border border-[#1E293B] text-[#F9FAFB] placeholder-[#64748B] focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-xl bg-[#020817] border border-[#1E293B] text-[#F9FAFB] placeholder-[#64748B] focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-cyan-600 text-white font-medium hover:bg-cyan-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-cyan-500/50 shadow-sm"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>

    </div>
  </section>
  </FadeIn>
 );
}

export default Contact;