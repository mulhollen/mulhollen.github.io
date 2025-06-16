import CustomCursor from '../utils/CursorAnimation'
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ProjectPage(props) {
let navigate = useNavigate();

  return (
    <div className='bg-[#F8ECD8] font-sora scroll-smooth overflow-x-hidden'>
      <CustomCursor/>
      {props.project.vidimg === "video" && 
        <video autoPlay loop width="100%">
          <source src={props.project.video} />
        </video>
      }
      {props.project.vidimg === "img" &&
        <img src={props.project.video} className="w-full h-auto" />
      }
      <button 
        onClick={() => navigate(-1)}
        className="border-[#0055D2] border-2 w-[95px] h-[95px] fixed top-[8px] left-[8px] rounded-[50%]"
      >
        <span className="container mx-auto flex justify-center items-center">
        <MdArrowBack className="text-[#0055D2] w-4 h-4 lg:w-5 lg:h-5"/>
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="h-9 cursor-pointer"
          style={{position: "relative", left: "-4px"}}
          src="../../assets/lmblue.svg"
          alt="Logo"
        />
        </span>
      </button>
      <div className="bg-[#F8ECD8] px-5 lg:px-28 flex justify-between flex-col lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
          viewport={{ once: true }}
          >
            <motion.h2 className="mt-5" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span
                className="text-[#F8ECD8] font-extrabold text-5xl lg:text-7xl"
                style={{ WebkitTextStroke: "1px #0055D2"}}
              >{props.project.title}</span> 
            </motion.h2>
            {props.project.subtitle && (
            <motion.p
              className="text-[#0055D2] text-sm/6 lg:text-base mt-5 lg-mt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              dangerouslySetInnerHTML={{ __html: props.project.subtitle}}
            >
            </motion.p>
          )}
        </motion.div>
      </div>
        {props.project.infosection.map((section, index) => (
          <div key={index}>
            {section.style === "quote" && 
              <div>
                  <h2 className="text-[#0055D2] p-32 font-extrabold mt-5 lg:mt-0 text-3xl lg:text-5xl hover:scale-105 transition-all duration-500 cursor-pointer object-cover">
                    {section.title}
                  </h2>
              </div>
            }
            {section.style === "img" && 
                <img className="bg-cover w-full h-auto" src={section.img} />
            }
            {section.style === "half" && 
              <div className={index % 2 === 0 ? "bg-[#C1CEFE] px-5 lg:px-28 pt-8 pb-16 mt-8 lg:py-16 lg:mt-16" : "px-5 lg:px-28 flex justify-between flex-col lg:flex-row"}>
                <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
                  <motion.div
                    className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
                      <img
                        className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover lg:px-8"
                        src={section.img}
                        alt={section.title}
                      />
                    </div>

                    <div className="lg:w-1/2 lg:space-y-6 space-y-4">
                      <h2 className={[`${index % 2 === 0 && "text-[#0055D2]"}`, "text-[#0055D2] font-extrabold mt-5 lg:mt-0 text-3xl lg:text-5xl"].join(" ")}>
                        {section.title}
                      </h2>
                      <div 
                        className="font-light text-sm/6 lg:text-base text-[#0055D2]"
                        dangerouslySetInnerHTML={{ __html: section.p}}
                      >
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            }
            {section.style === "list" && 
              <div className={index % 2 === 0 ? "bg-[#C1CEFE] px-5 lg:px-28 pt-8 pb-16 mt-8 lg:py-16 lg:mt-16" : "px-5 lg:px-28 flex justify-between flex-col lg:flex-row"}>
                <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
                  <motion.div
                    className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="lg:space-y-6 space-y-4">
                      <h2 className={[`${index % 2 === 0 && "text-[#0055D2]"}`, "text-[#0055D2] font-extrabold mt-5 lg:mt-0 text-3xl lg:text-5xl"].join(" ")}>
                        {section.title}
                      </h2>

                      <div 
                        className="font-light lg:text-base text-[#0055D2] ml-5"
                        dangerouslySetInnerHTML={{ __html: section.p}}
                      >
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            }
          </div>
        ))}
    </div>
  )
}

ProjectPage.propTypes = {
  project: PropTypes.obj
}