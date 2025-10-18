import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kabir.masud@example.com",
      link: "mailto:kabir.masud@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Get In <span className="text-[#FF6B35]">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl mb-4 lg:mb-6">Let's talk about everything!</h3>
              <p className="text-gray-600 leading-relaxed mb-6 lg:mb-8 text-sm sm:text-base">
                Don't hesitate to reach out! Whether you have a question, want to start a project, 
                or simply want to connect, I'm here to help. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white rounded-xl hover:shadow-lg transition-shadow group"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8C61] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <info.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">{info.label}</div>
                    <div className="text-sm sm:text-base text-gray-900">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative mt-8 lg:mt-12 hidden lg:block"
            >
              <div className="w-64 h-64 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8C61]/20 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 lg:p-8 rounded-2xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700 text-sm sm:text-base">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 text-sm sm:text-base">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-700 text-sm sm:text-base">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700 text-sm sm:text-base">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none text-sm sm:text-base"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] hover:from-[#FF8C61] hover:to-[#FF6B35] text-white py-5 lg:py-6 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send size={18} />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
