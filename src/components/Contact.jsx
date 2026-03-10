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
  <section id="contact" className="py-32 px-6 relative">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE — LET'S CONNECT */}
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-50 transition duration-1000 animate-gradient" />
      
      <div className="relative bg-gray-900/50 backdrop-blur-xl p-12 rounded-3xl border border-white/10">
        
        <h2 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech!
        </p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          <a 
            href="mailto:rvikky05@gmail.com"
            className="flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600/30 transition-colors">
              <FiMail className="text-blue-400 text-xl" />
            </div>
            <span className="text-white group-hover:text-blue-400 transition-colors">Gmail</span>
            <span className="text-sm text-gray-400 mt-1">rvikky05@gmail.com</span>
          </a>

          <a 
            href="https://github.com/vikkyrg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-600/30 transition-colors">
              <FiGithub className="text-purple-400 text-xl" />
            </div>
            <span className="text-white group-hover:text-purple-400 transition-colors">GitHub</span>
            <span className="text-sm text-gray-400 mt-1">@vikkyrg</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/vignesh-r-a634a2293/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="w-12 h-12 bg-pink-600/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-pink-600/30 transition-colors">
              <FiLinkedin className="text-pink-400 text-xl" />
            </div>
            <span className="text-white group-hover:text-pink-400 transition-colors">LinkedIn</span>
            <span className="text-sm text-gray-400 mt-1">Vignesh R</span>
          </a>

        </div>
      </div>
    </div>

    {/* RIGHT SIDE — CONTACT FORM */}
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-50 transition duration-1000 animate-gradient" />

      <div className="relative bg-gray-900/50 backdrop-blur-xl p-12 rounded-3xl border border-white/10">
        
        <h3 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Send a Message
          </span>
        </h3>

        {/* Enhanced Status Messages with Animations */}
        {status && (
          <div
            className={`mb-8 rounded-2xl border-2 overflow-hidden relative animate-slideIn
              ${
                status === "success"
                  ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30"
                  : "bg-gradient-to-br from-red-500/20 to-rose-500/20 border-red-500/30"
              }`}
          >
            {/* Glass morphism effect */}
            <div className="absolute inset-0 backdrop-blur-xl" />
            
            {/* Content */}
            <div className="relative p-6">
              <div className="flex items-start gap-4">
                {/* Animated Icons */}
                <div className="relative">
                  {status === "success" ? (
                    <>
                      <FiCheckCircle className="text-4xl text-green-400 animate-bounce" />
                      <div className="absolute inset-0 bg-green-400/30 rounded-full animate-ping" />
                    </>
                  ) : (
                    <>
                      <FiXCircle className="text-4xl text-red-400 animate-shake" />
                      <div className="absolute inset-0 bg-red-400/30 rounded-full animate-ping" />
                    </>
                  )}
                </div>
                
                {/* Detailed Messages */}
                <div className="flex-1">
                  {status === "success" ? (
                    <>
                      <h4 className="text-green-400 font-bold text-lg mb-2">
                        Message Sent Successfully! 🎉
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Thank you for reaching out! I've received your message and will get back to you within 24 hours. 
                        You can also connect with me on social media for faster responses.
                      </p>
                    </>
                  ) : (
                    <>
                      <h4 className="text-red-400 font-bold text-lg mb-2">
                        Oops! Something Went Wrong 😕
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        We couldn't send your message. Please try again in a few moments, 
                        or reach out directly at{' '}
                        <a href="mailto:rvikky05@gmail.com" className="text-pink-400 hover:underline">
                          rvikky05@gmail.com
                        </a>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Progress Bar that disappears after 5 seconds */}
            <div 
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r 
                ${status === "success" 
                  ? "from-green-400 to-emerald-400" 
                  : "from-red-400 to-rose-400"
                } animate-progress`}
              style={{ width: '100%' }}
            />
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all duration-300"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>

    </div>

    <style jsx>{`
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
      }
      
      @keyframes progress {
        0% { width: 100%; }
        100% { width: 0%; }
      }
      
      .animate-slideIn {
        animation: slideIn 0.5s ease-out;
      }
      
      .animate-shake {
        animation: shake 0.8s ease-in-out;
      }
      
      .animate-progress {
        animation: progress 5s linear forwards;
      }
    `}</style>
  </section>
  </FadeIn>
 );
}

export default Contact;