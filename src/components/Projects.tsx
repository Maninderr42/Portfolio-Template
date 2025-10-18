import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Battleship",
      description: "A classic battleship game built with vanilla JavaScript. Features include ship placement, turn-based gameplay, and AI opponent with smart targeting algorithm.",
      tags: ["HTML", "CSS", "JavaScript", "Webpack"],
      image: "https://images.unsplash.com/photo-1681402720847-961bb1aab8d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0bGVzaGlwJTIwZ2FtZSUyMGJvYXJkfGVufDF8fHx8MTc2MDgxNDIyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Movie Titles API",
      description: "Lorem ipsum carrots, enhanced tracking developer but it's soft. Dolor magna laoreet developer. A lot of homework carrots clinical ecological.",
      tags: ["JavaScript", "API", "TMDB"],
      image: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MXx8fHwxNzYwNzQ0ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "JavaScript Calculator",
      description: "A fully functional calculator application built with vanilla JavaScript. Supports basic arithmetic operations, decimal numbers, and keyboard input.",
      tags: ["HTML", "CSS", "JavaScript", "Webpack"],
      image: "https://images.unsplash.com/photo-1653361860636-36f2fb89eab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yJTIwbWF0aGVtYXRpY3N8ZW58MXx8fHwxNzYwODE0MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "SaaS Landing Page",
      description: "Lorem ipsum carrots, enhanced tracking developer but it's not a lot of pain. Dolor magna laoreet developer. A lot of homework carrots clinical ecological author.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1510924014959-7e1849088bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwbGFuZGluZyUyMHBhZ2V8ZW58MXx8fHwxNzYwODE0MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Featured <span className="text-[#FF6B35]">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            A showcase of my recent work and notable projects
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Content - Left on even indices, Right on odd indices */}
                <div className={`space-y-4 lg:space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h3 className="text-2xl sm:text-3xl text-gray-900">{project.title}</h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 lg:px-4 py-1 lg:py-1.5 bg-gray-100 text-gray-700 rounded text-xs sm:text-sm hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4 pt-2 lg:pt-4">
                    <Button
                      asChild
                      className="bg-[#FF6B35] hover:bg-[#FF8C61] text-white rounded px-5 lg:px-6 w-full sm:w-auto"
                    >
                      <a href={project.liveLink}>
                        Live preview
                      </a>
                    </Button>
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 text-gray-600 hover:text-[#FF6B35] transition-colors text-sm sm:text-base"
                    >
                      View github
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Image - Right on even indices, Left on odd indices */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="rounded-xl lg:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
