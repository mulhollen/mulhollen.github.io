// import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-[#F8ECD8] px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/lm_about.PNG" alt="About Me Illustration" className="lg:pr-8" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[#0055D2] lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I&apos;m a passionate front-end developer specializing in React.js & Svelte. I thrive on blending technical expertise with sleek UI/UX design to build high-performing, user-friendly applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My web development journey started in 2018, and since then, I&apos;ve continuously evolved, taking on new challenges and keeping up with the latest technologies. Today, I build web applications using Svelte, React.js, TypeScript, SCSS, Figma, and more.
        </p>

        {/* <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Beyond coding, I enjoy kitting, 
        </p> */}
      </motion.div>
    </div>
  );
}
