import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='bg-[#C1CEFE] py-8 lg:py-16 lg:px-28 mt-3 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-[#0055D2] text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%]'
        >
          <form className='w-full space-y-3 lg:space-y-5'>
            <input className='border-2 px-5 py-3 border-[#0055D2] background-[#F8ECD8] rounded placeholder:text-[#0055D2] text-sm w-full' type="text" placeholder='Your name' required />
            <input className='border-2 px-5 py-3 border-[#0055D2] background-[#F8ECD8] rounded placeholder:text-[#0055D2] text-sm w-full' type="email" placeholder='Email' required />
            <textarea className='resize-none border-2 border-[#0055D2] background-[#F8ECD8] px-5 py-3 h-32 placeholder:text-[#0055D2] rounded text-sm w-full' placeholder='How can I help?*'></textarea>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                type='submit'
                className='bg-[#0055D2] text-[#0055D2] justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium'
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='text-[#0055D2] font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <h2>Let&apos;s <span className='text-[#F8ECD8]' style={{ WebkitTextStroke: '1px #0055D2' }}>chat</span> !</h2>
          </div>

          {/* <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p> */}

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <motion.a
              whileHover={{ x: 5 }}
              className='text-[#0055D2] flex items-center gap-2 group'
              href="mailto:lindsaymulhollen@gmail.com"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-[#0055D2] rounded-full p-1'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              lindsaymulhollen@gmail.com
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
