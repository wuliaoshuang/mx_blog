"use client";

import { motion } from "motion/react";
import React from "react";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full px-14 py-4 flex justify-between items-center z-99">
      <motion.div
        animate={{
          y: [-100, 0],
          opacity: [0, 1],
          transition: {
            delay: 0.1,
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            ease: ["easeInOut"],
          },
        }}
      >
        <h1 className="text-4xl font-normal">MYBLOG</h1>
      </motion.div>

      <ul className="flex gap-[30px]">
        <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.1,
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              ease: ["easeInOut"],
            },
          }}
        >
          <a href="">COMPAMY</a>
        </motion.div>
        <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.15,
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              ease: ["easeInOut"],
            },
          }}
        >
          <a href="">FEATURES</a>
        </motion.div>
        <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.2,
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              ease: ["easeInOut"],
            },
          }}
        >
          <a href="">RESOURCES</a>
        </motion.div>
        <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.25,
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              ease: ["easeInOut"],
            },
          }}
        >
          <a href="">DOCS</a>
        </motion.div>
      </ul>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <div
          data-aos="fade-down"
          className="bg-white shadow-2xl px-5 py-2 rounded-full cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 hover:text-white duration-300 "
        >
          LOGIN
        </div>
      </motion.div>
    </nav>
  );
}

export default Nav;
