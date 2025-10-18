import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Dribbble, Github, Linkedin, Twitter } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-40 right-[45%] w-12 h-12 md:w-16 md:h-16 border-4 border-gray-300 rounded-full hidden md:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-32 right-[40%] w-6 h-6 md:w-8 md:h-8 bg-[#FF6B35] rounded-full hidden md:block"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-40 left-[35%] w-16 h-16 md:w-20 md:h-20 border-4 border-[#FF6B35] rounded-lg rotate-45 hidden md:block"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center min-h-[calc(100vh-5rem)]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                Hey, This is
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                Alok <span className="text-[#FF6B35]">Kum</span>ar bsdk
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-600 mt-6"
              >
                an interactive Web Developer
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                onClick={scrollToContact}
                className="bg-black hover:bg-gray-800 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group"
              >
                Let's Talk
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </motion.div>

           
          </motion.div>

          {/* Right content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Background circle */}
              <div className="absolute inset-0 bg-gray-300 rounded-full w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              
              {/* Profile image */}
              <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA4MTM2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Kabir Masud"
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              {/* Stats badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-4 sm:bottom-8 -right-4 sm:right-0 bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl"
              >
                <div className="text-2xl sm:text-3xl">100.36k</div>
                <div className="text-xs sm:text-sm opacity-90">Package project done</div>
              </motion.div>
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -bottom-12 sm:-bottom-16 lg:-bottom-20 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4"
            >
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Dribbble size={18} className="sm:w-5 sm:h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-24 pb-12"
      >
      
      </motion.div>
    </section>
  );
}
