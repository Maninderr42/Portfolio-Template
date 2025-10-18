import { Github, Linkedin, Twitter, Dribbble, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">
              <span>M</span>
              <span className="opacity-70">orfolo</span>
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Creating beautiful, functional, and user-centered digital experiences. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-all duration-300 hover:scale-110"
              >
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-all duration-300 hover:scale-110"
              >
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-all duration-300 hover:scale-110"
              >
                <Dribbble size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <p className="text-center text-gray-400 text-xs sm:text-sm flex items-center justify-center gap-2">
            © {currentYear} Alok Kumar bsdk. Made with <Heart size={14} className="sm:w-4 sm:h-4 text-[#FF6B35] fill-current" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
