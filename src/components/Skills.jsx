import { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact} from "react-icons/fa";
import { RiSvelteFill, RiTailwindCssFill } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";
import { CgFigma } from "react-icons/cg";
import { SiTypescript, SiSass, SiVitess } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React", icon: <FaReact size={50} /> },
    { id: 3, name: "Svelte", icon: <RiSvelteFill size={50} /> },
    { id: 4, name: "Typescript", icon: <SiTypescript size={50} /> },
    { id: 5, name: "Accessibility", icon: <IoAccessibility size={50} /> },
    { id: 6, name: "HTML 5", icon: <FaHtml5 size={50} /> },
    { id: 7, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
    { id: 8, name: "Sass", icon: <SiSass size={50} /> },
    { id: 9, name: "Vite", icon: <SiVitess size={50} /> },    
    { id: 10, name: "Figma", icon: <CgFigma size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Alliance Bernstein",
      role: "Front-end Developer",
      period: "Jan 2024 - Present",
      description:
        "Developed a component library with Material Design, Svelte 5, and Storybook to streamline development, enhance consistency, and accelerate project timelines, while integrating design systems and UX updates that significantly boosted developer efficiency, user interaction, and user growth in AI projects.",
      logo: "/assets/ablogo.jpeg",
    },
    {
      id: 2,
      company: "Tackle.io",
      role: "Software Engineer",
      period: "Dec 2021 - Mar 2023",
      description:
        "Led the development of a scalable full-stack JavaScript architecture using React.js and Node.js, while standardizing UI design with a comprehensive style guide and optimizing the mono-repo build process to boost productivity. Additionally, mentored junior developers and fostered a collaborative, knowledge-sharing team culture.",
      logo: "/assets/tacklelogo.jpg",
    },
    {
      id: 3,
      company: "Local Projects",
      role: "Full-stack Developer",
      period: "May 2021 - Nov 2021",
      description:
        "Led full-stack JavaScript architecture development using React.js, Vue.js, Node.js, and coordinated with interdisciplinary teams to integrate MERN and Unity technologies for optimal user experiences. Provided technical leadership through user research, rapid prototyping, and lightweight proofs-of-concept.",
      logo: "/assets/localprojects.png",
    },
    {
      id: 4,
      company: "HealthStream",
      role: "UX Developer",
      period: "Sept 2019 - Jun 2021",
      description:
        "Led web development for B2C and B2B e-commerce platforms, implementing structured unit testing to improve quality and collaborating with cross-functional teams on end-to-end product creation. Designed user personas and iterated user flows for HealthStream products to enhance usability and user experience.",
      logo: "/assets/healthstreamlogo.jpg",
    },
        {
      id: 5,
      company: "Identity Group",
      role: "Front-end Engineer",
      period: "Aug 2018 - Sept 2019",
      description:
        "Assisted in migrating legacy sites to the MERN stack, optimizing performance and ensuring modern framework compatibility. Developed detailed project plans and supported Agile adoption with Jira and Git to boost productivity and team collaboration.",
      logo: "/assets/idglogo.jpeg",
    },
  ]);

  return (
    <div className="bg-[#0055D2] pt-8 mt-8 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-[#F8ECD8] text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-[#0055D2] text-[#F8ECD8] border-[#F8ECD8] hover:bg-[#F8ECD8] hover:text-[#0055D2] hover:border-[#0055D2] border-2 transition-all cursor-pointer rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-[#F8ECD8] w-full my-8 py-8 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-[#0055D2]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-[#F8ECD8] border-[#0055D2] hover:bg-[#0055D2] text-[#0055D2] hover:text-[#F8ECD8] border-2 p-5 rounded-md  transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
