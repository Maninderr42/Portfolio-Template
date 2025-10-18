import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Senior Web Developer",
      company: "TECH INNOVATIONS INC.",
      period: "2022 - Present",
      description: "I lead the planning, development, and implementation of software projects to optimize administrative processes and improve digital services. I manage and provide support for technology platforms, coordinating development teams to deliver efficient solutions.",
    },
    {
      title: "Full Stack Developer",
      company: "DIGITAL SOLUTIONS LTD.",
      period: "2020 - 2022",
      description: "I lead the planning, development, and implementation of software projects to optimize administrative processes and improve digital services. I manage and provide support for technology platforms, coordinating development teams to deliver efficient solutions.",
    },
    {
      title: "Frontend Developer",
      company: "CREATIVE AGENCY",
      period: "2019 - 2020",
      description: "I lead the planning, development, and implementation of software projects to optimize administrative processes and improve digital services. I manage and provide support for technology platforms, coordinating development teams to deliver efficient solutions.",
    },
    {
      title: "Junior Web Developer",
      company: "STARTUP HUB",
      period: "2018 - 2019",
      description: "I lead the planning, development, and implementation of software projects to optimize administrative processes and improve digital services. I manage and provide support for technology platforms, coordinating development teams to deliver efficient solutions.",
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-12 sm:mb-16 lg:mb-20"
        >
          <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            My <span className="text-[#FF6B35]">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 sm:left-2 top-0 bottom-0 w-0.5 bg-gray-200" />

          {/* Experience items */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative pl-8 sm:pl-12 lg:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-2 top-1 w-3 h-3 sm:w-4 sm:h-4 bg-[#FF6B35] rounded-full transform -translate-x-[5.5px] sm:-translate-x-[7px] ring-4 ring-white z-10" />

                {/* Content */}
                <div className="grid lg:grid-cols-[300px,1fr] gap-4 lg:gap-8 items-start">
                  {/* Left side - Job info */}
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl text-[#FF6B35]">
                      {exp.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-900">
                      {exp.company}
                    </p>
                    <p className="text-sm sm:text-base text-gray-500">
                      {exp.period}
                    </p>
                  </div>

                  {/* Right side - Description */}
                  <div className="lg:pt-1">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
