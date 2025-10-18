import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code, Palette, Smartphone, Rocket, Database, Zap } from "lucide-react";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, fast, and scalable web applications using modern technologies and best practices.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing interfaces that provide exceptional user experiences.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications that deliver native-like performance and user experience.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Optimizing applications for maximum speed, efficiency, and superior user experience.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Building robust and scalable backend systems with modern frameworks and cloud technologies.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Consultation",
      description: "Providing expert advice on technology stack, architecture, and best development practices.",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            My <span className="text-[#FF6B35]">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive solutions tailored to your needs, from concept to deployment
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl mb-3 lg:mb-4 group-hover:text-[#FF6B35] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
