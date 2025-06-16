import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="bg-[#F8ECD8] mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 className="text-[#0055D2]" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello, <TypeAnimation
                sequence={[
                  'I am Lindsay Mulhollen',
                  1000,
                  // 'I am a Web Developer',
                  // 1000,
                  // 'I am a UI/UX Designer',
                  // 1000,
                ]}
                speed={10}
                style={{ fontWeight:600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2 className="text-[#0055D2]" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Front-end</span>{" "}
                & UX&nbsp;
              <span
                className="text-[#F8ECD8] font-extrabold"
                style={{ WebkitTextStroke: "1px #0055D2" }}
              >
                Developer
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5 text-[#0055D2]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Passionate about human computer interaction, I specialize in Web Development, Accessibility, and User Experience. I&apos;m focused on building innovative solutions and continuously expanding my skills.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.a
              href="mailto:lindsaymulhollen@gmail.com"
              className="bg-[#F8ECD8] p-2 lg:p-3 rounded border-2 border-[#0055D2]"
              whileHover={{ scale: 1.1, backgroundColor: "#0055D2", color: "#F8ECD8" }}
              whileTap={{ scale: 0.9 }}
            >
              <BiLogoGmail className="text-[#0055D2] w-4 h-4 lg:w-5 lg:h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mulhollen"
              className="bg-[#F8ECD8] p-2 lg:p-3 rounded border-2 border-[#0055D2]"
              whileHover={{ scale: 1.1, backgroundColor: "#0055D2", color: "#F8ECD8" }}
              whileTap={{ scale: 0.9 }}
            >
              <IoLogoLinkedin className="text-[#0055D2] w-4 h-4 lg:w-5 lg:h-5" />
            </motion.a>
            <motion.a
              href="https://www.github.com/mulhollen"
              className="bg-[#F8ECD8] p-2 lg:p-3 rounded border-2 border-[#0055D2]"
              whileHover={{ scale: 1.1, backgroundColor: "#0055D2", color: "#F8ECD8" }}
              whileTap={{ scale: 0.9 }}
            >
              <BsGithub className="text-[#0055D2] w-4 h-4 lg:w-5 lg:h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full" src="/assets/lm_hero.PNG" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
