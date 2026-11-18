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
  <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 relative z-20 overflow-hidden">
    {/* Background visual orb */}
    <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[#0092B8]/10 glow-orb animate-float-slow pointer-events-none" />
    
    {/* SECTION HEADER */}
    <div className="max-w-7xl mx-auto relative z-10 mb-10 sm:mb-16 md:mb-20 flex flex-col items-center text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9FAFB] tracking-tight">
        Contact
      </h2>
      <div className="w-12 h-1.5 bg-cyan-500 mt-5 rounded-full" />
    </div>

    {/* MOBILE ONLY COMPACT SOCIAL CONNECTION AREA (< md) */}
    <div className="md:hidden max-w-lg mx-auto relative z-10 mb-8 flex flex-col items-center text-center">
      <h3 className="text-xl font-bold text-white mb-4">
        Connect With Me
      </h3>
      <div className="flex items-center justify-center gap-4">
        <a
          href="mailto:rvikky05@gmail.com"
          aria-label="Email"
          className="w-12 h-12 rounded-2xl bg-[rgba(5,12,24,0.78)] border border-[#0092B8]/25 text-[#0092B8] hover:text-[#45B9D7] hover:border-[#0092B8]/40 hover:bg-[#0092B8]/[0.12] active:scale-95 flex items-center justify-center backdrop-blur-[8px] transition-all duration-300 shadow-sm"
        >
          <FiMail size={22} />
        </a>

        <a
          href="https://github.com/vikkyrg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-12 h-12 rounded-2xl bg-[rgba(5,12,24,0.78)] border border-[#0092B8]/25 text-[#0092B8] hover:text-[#45B9D7] hover:border-[#0092B8]/40 hover:bg-[#0092B8]/[0.12] active:scale-95 flex items-center justify-center backdrop-blur-[8px] transition-all duration-300 shadow-sm"
        >
          <FiGithub size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/vignesh-r-a634a2293/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-12 h-12 rounded-2xl bg-[rgba(5,12,24,0.78)] border border-[#0092B8]/25 text-[#0092B8] hover:text-[#45B9D7] hover:border-[#0092B8]/40 hover:bg-[#0092B8]/[0.12] active:scale-95 flex items-center justify-center backdrop-blur-[8px] transition-all duration-300 shadow-sm"
        >
          <FiLinkedin size={22} />
        </a>
      </div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-10 lg:gap-20 items-center">

    {/* LEFT SIDE — LET'S CONNECT (Hidden on mobile < md, visible on tablet & desktop >= md) */}
    <div className="relative hidden md:block">
      <div className="bg-[rgba(5,12,24,0.84)] backdrop-blur-[8px] p-8 sm:p-10 md:p-12 rounded-3xl border border-[#0092B8]/20 transition-colors duration-300 hover:border-[#0092B8]/45">
        
        <div className="mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
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
            className="flex flex-col items-center p-6 rounded-2xl bg-[rgba(5,12,24,0.78)] backdrop-blur-[8px] border border-[#0092B8]/15 hover:border-[#0092B8]/40 hover:bg-[rgba(5,12,24,0.84)] transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-[#0092B8]/[0.08] border border-[#0092B8]/25 rounded-2xl flex items-center justify-center mb-4 group-hover:border-[#0092B8]/40 group-hover:bg-[#0092B8]/[0.14] transition-colors shadow-sm">
              <FiMail className="text-[#0092B8] text-xl transition-colors" />
            </div>
            <span className="text-white font-medium group-hover:text-[#45B9D7] transition-colors text-sm mb-1">Email</span>
            <span className="text-xs text-[#9CA3AF]">rvikky05@gmail.com</span>
          </a>

          <a 
            href="https://github.com/vikkyrg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-2xl bg-[rgba(5,12,24,0.78)] backdrop-blur-[8px] border border-[#0092B8]/15 hover:border-[#0092B8]/40 hover:bg-[rgba(5,12,24,0.84)] transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-[#0092B8]/[0.08] border border-[#0092B8]/25 rounded-2xl flex items-center justify-center mb-4 group-hover:border-[#0092B8]/40 group-hover:bg-[#0092B8]/[0.14] transition-colors shadow-sm">
              <FiGithub className="text-[#0092B8] text-xl transition-colors" />
            </div>
            <span className="text-white font-medium group-hover:text-[#45B9D7] transition-colors text-sm mb-1">GitHub</span>
            <span className="text-xs text-[#9CA3AF]">@vikkyrg</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/vignesh-r-a634a2293/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-2xl bg-[rgba(5,12,24,0.78)] backdrop-blur-[8px] border border-[#0092B8]/15 hover:border-[#0092B8]/40 hover:bg-[rgba(5,12,24,0.84)] transition-all duration-300 transform hover:-translate-y-1 group sm:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 bg-[#0092B8]/[0.08] border border-[#0092B8]/25 rounded-2xl flex items-center justify-center mb-4 group-hover:border-[#0092B8]/40 group-hover:bg-[#0092B8]/[0.14] transition-colors shadow-sm">
              <FiLinkedin className="text-[#0092B8] text-xl transition-colors" />
            </div>
            <span className="text-white font-medium group-hover:text-[#45B9D7] transition-colors text-sm mb-1">LinkedIn</span>
            <span className="text-xs text-[#9CA3AF]">Vignesh R</span>
          </a>

        </div>
      </div>
    </div>

    {/* RIGHT SIDE — CONTACT FORM */}
    <div className="relative w-full max-w-lg md:max-w-none mx-auto">
      <div className="bg-[rgba(5,12,24,0.84)] backdrop-blur-[8px] p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-[#0092B8]/20 transition-colors duration-300 hover:border-[#0092B8]/45">
        
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center md:text-left">
          Send a Message
        </h3>

        {/* Status Messages */}
        {status && (
          <div
            className={`mb-8 p-5 rounded-2xl border transition-all duration-300 ${
              status === "success"
                ? "bg-[rgba(5,12,24,0.82)] border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                : "bg-[rgba(5,12,24,0.82)] border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
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
            className="w-full p-4 rounded-xl bg-[rgba(5,12,24,0.78)] border border-[#0092B8]/15 text-[#F9FAFB] placeholder-[#64748B] backdrop-blur-[8px] focus:outline-none focus:border-[#0092B8] focus:ring-1 focus:ring-[#0092B8]/50 transition-all duration-300"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-[rgba(5,12,24,0.78)] border border-[#0092B8]/15 text-[#F9FAFB] placeholder-[#64748B] backdrop-blur-[8px] focus:outline-none focus:border-[#0092B8] focus:ring-1 focus:ring-[#0092B8]/50 transition-all duration-300"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-xl bg-[rgba(5,12,24,0.78)] border border-[#0092B8]/15 text-[#F9FAFB] placeholder-[#64748B] backdrop-blur-[8px] focus:outline-none focus:border-[#0092B8] focus:ring-1 focus:ring-[#0092B8]/50 transition-all duration-300 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-[#0092B8] text-white font-medium hover:bg-[#0081a3] hover:border-[#0092B8]/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-[#0092B8]/50 shadow-sm"
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