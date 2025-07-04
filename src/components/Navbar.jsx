import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-[#F8ECD8] fixed lg:px-28 px-5 top-0 left-0 w-full z-50 p-5 transition-shadow duration-300 ${hasShadow ? "shadow-md" : "shadow-none"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("home")}
          className="h-9 cursor-pointer"
          src="/assets/lmblue.svg"
          alt="Logo"
        />

        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
          {["projects", "about", "skills", "contact"].map((section) => (
            <motion.li
              key={section}
              className="group text-[#0055D2]"
              whileHover={{ scale: 1.1 }}
            >
              <button onClick={() => scrollToSection(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-[#0055D2] flex"
                layout
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href=""
          className="hidden relative lg:inline-block px-4 py-2 font-medium group"
        >
          <span className="bg-[#0055D2] absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="bg-[#F8ECD8] group-hover:bg-[#0055D2] border-[#0055D2] border-2 absolute inset-0 w-full h-full"></span>
          <span className="text-[#0055D2] group-hover:text-[#F8ECD8] relative flex items-center gap-x-3">
            Resume <TbDownload size={16} />
          </span>
        </motion.a>

        <motion.button
          className="text-[#0055D2] lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="bg-[#F8ECD8] lg:hidden fixed top-0 right-0 h-full w-full shadow"
          >
            <button
              className="text-[#0055D2] absolute top-5 right-5 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
            <ul className="text-[#0055D2] flex flex-col items-start ml-16 mt-28 h-full gap-y-6 font-semibold">
              {["about", "skills", "projects", "contact"].map((section) => (
                <motion.li
                  key={section}
                  className="border-b"
                  whileHover={{ scale: 1.1 }}
                >
                  <button onClick={() => scrollToSection(section)}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </motion.li>
              ))}
              <motion.a
                href="../../assets/LindsayMulhollenResume2025.pdf"
                download
                className="relative inline-block px-4 py-2 font-semibold group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="bg-[#0055D2] absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="bg-[#F8ECD8] border-[#0055D2] group-hover:bg-[#0055D2] absolute inset-0 w-full h-full border-2"></span>
                <span className="text-[#0055D2] group-hover:text-[#F8ECD8] relative flex items-center gap-x-3">
                  Resume <TbDownload size={16} />
                </span>
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
