import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, FileCode, Palette, Layout, Code, Server, Zap, Database, Globe, GitBranch, Box, Cloud, Figma as FigmaIcon, GitCommit } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, icon: Code2 },
        { name: "TypeScript", level: 90, icon: FileCode },
        { name: "Tailwind CSS", level: 92, icon: Palette },
        { name: "Next.js", level: 88, icon: Layout },
        { name: "HTML/CSS", level: 98, icon: Code },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 87, icon: Server },
        { name: "Express", level: 85, icon: Zap },
        { name: "PostgreSQL", level: 82, icon: Database },
        { name: "MongoDB", level: 80, icon: Database },
        { name: "REST APIs", level: 90, icon: Globe },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 93, icon: GitBranch },
        { name: "Docker", level: 78, icon: Box },
        { name: "AWS", level: 75, icon: Cloud },
        { name: "Figma", level: 88, icon: FigmaIcon },
        { name: "CI/CD", level: 82, icon: GitCommit },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            My <span className="text-[#FF6B35]">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            A comprehensive set of technical skills honed through years of experience and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * catIndex }}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl lg:text-2xl mb-4 lg:mb-6 text-center">{category.title}</h3>
              <div className="space-y-4 lg:space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6B35]" />
                          <span className="text-gray-700 text-sm sm:text-base">{skill.name}</span>
                        </div>
                        <span className="text-gray-500 text-xs sm:text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.2 * catIndex + 0.1 * skillIndex }}
                          className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 lg:mt-12"
        >
          <h3 className="text-center text-lg lg:text-xl mb-4 lg:mb-6">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
            {[
              "GraphQL",
              "Redux",
              "Jest",
              "Cypress",
              "Webpack",
              "Vite",
              "Supabase",
              "Firebase",
              "Vercel",
              "Framer Motion",
              "Socket.io",
              "WebRTC",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + 0.05 * index }}
                whileHover={{ scale: 1.1 }}
                className="px-3 lg:px-4 py-1.5 lg:py-2 bg-white rounded-full text-xs sm:text-sm shadow-md hover:shadow-lg hover:bg-[#FF6B35] hover:text-white transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
