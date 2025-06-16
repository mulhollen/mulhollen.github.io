import { MdArrowForward } from "react-icons/md";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Art Investigator",
    description: "Interactive 'eye spy' museum app to accompany Nick Cave Soundsuits Exhibit",
    image: "/assets/mainsquare.jpg",
    link: "/art-investigator"
  },
  {
    id: 2,
    title: "hStream Store",
    description: "B2B & B2C store for healthcare continuing education through HealthStream.",
    image: "/assets/storeComputerView.png",
    link: "/hstream"
  },
  {
    id: 3,
    title: "Canvas",
    description: "Canvas is a multi-player, gamified, interactive art experience in the vain of The Cleveland Museum of Art ARTLENS Gallery exhibits. Canvas pits one to four players against each other to create a sort of exquisite corps of a broken-up piece of fine art.",
    image: "/assets/canvas/projectionOriginalCrop.png",
    link: "/canvas"
  },
  {
    id: 4,
    title: "DreamCube",
    description: "Extended reality platform for immersive storytelling. An immersive Spectacle that’s like walking into a video game.",
    image: "/assets/dreamcube/DreamCubeSquare.png",
    link: "/dreamcube"
  },

];

export default function Projects() {
  return (
    <div className="bg-[#C1CEFE] px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-[#0055D2]">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <a href={project.link} >
                <img
                  className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </a>
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4 lg:mx-5">
              <a href={project.link}>
                <h2 className="text-[#0055D2] font-extrabold mt-5 lg:mt-0 text-3xl lg:text-5xl">
                  {String(project.id).padStart(2, "0")}
                </h2>
                <p className="text-[#0055D2] font-bold text-xl lg:text-3xl">{project.title}</p>

                <p className="text-[#0055D2] font-light text-sm/6 lg:text-base">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="text-[#0055D2] mt-3 block"
                  style={{display: "flex", alignItems: "center"}}
                >
                  <p className="mr-2">Read more</p>
                  <MdArrowForward className="text-[#0055D2]" size={23} />
                </a>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
