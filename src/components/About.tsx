import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Coffee, Heart, Download } from "lucide-react";
import { Button } from "./ui/button";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    // { icon: Award, value: "100+", label: "Projects Completed" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
    { icon: Heart, value: "5+", label: "Years Experience" },
  ];

  return (
    <section id="about" ref={ref} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            About <span className="text-[#FF6B35]">Me</span>
          </h2>
          {/* <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Passionate web developer with a keen eye for design and a love for creating seamless digital experiences
          </p> */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwNzkwNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="About Me"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-24 h-24 lg:w-32 lg:h-32 bg-[#FF6B35] rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 lg:space-y-6 order-1 lg:order-2"
          >
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Hi there! I'm alok, a passionate web developer specializing in creating beautiful, 
              functional, and user-centered digital experiences. With over 5 years of experience in the field, 
              I've had the pleasure of working with diverse clients across various industries.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              My approach combines technical expertise with creative problem-solving. I believe that great 
              design is not just about aesthetics—it's about creating intuitive experiences that delight 
              users and drive results.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>

            {/* Download Resume Button */}
            <div className="pt-4">
              <Button 
                className="bg-[#FF6B35] hover:bg-[#FF8C61] text-white"
                onClick={() => {
                  // Replace with your actual resume file path
                  const link = document.createElement('a');
                  link.href = '/resume.pdf'; // Add your resume.pdf file to the public folder
                  link.download = 'Alok_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-6 lg:pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="bg-gray-50 p-4 lg:p-6 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-[#FF6B35] mb-2 lg:mb-3" />
                  <div className="text-2xl lg:text-3xl mb-1">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
