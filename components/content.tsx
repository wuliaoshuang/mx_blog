"use client";

import { ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

function Content() {
  return (
    <motion.div
      animate={{
        y: [-100, 0],
        opacity: [0, 1],
        transition: {
          delay: 1.3,
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          ease: ["easeInOut"],
        },
      }}
      className="flex pl-[10%] items-center w-[50%] h-full"
    >
      <div className="flex flex-col gap-6 w-full">
        <motion.div
          animate={{
            x: [-100, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.3,
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              ease: ["easeInOut"],
            },
          }}
        >
          <div className="text-center w-[40%] shadow-2xs shadow-white p-0.5 bg-black rounded-full">
            <div className="py-2 px-4 bg-[#ffd2d2] rounded-full font-bold">
              INTRUCING
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
            transition: {
              delay: 2,
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              ease: ["easeInOut"],
            },
          }}
        >
          <h1 className="text-6xl font-bold">
            MYBLOG IS <br /> VERY POWERFUL
          </h1>
        </motion.div>

        <motion.div
          animate={{
            y: [100, 0],
            opacity: [0, 1],
            transition: {
              delay: 1.5,
              duration: 0.4,
              ease: ["easeInOut"],
            },
          }}
        >
          <p className="text-black/60">
            With a large number of high-quality bloggers producing a variety of
            exciting content, it is very powerful in function and can provide
            users with unique and convenient services.
          </p>
        </motion.div>
        <div className="flex gap-5">
          <motion.div
            animate={{
              x: [-100, 0],
              y: [-100, 0],
              opacity: [0, 1],
              transition: {
                delay: 2.5,
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                ease: ["easeInOut"],
              },
            }}
          >
            <div className="shadow-xl gap-4 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 rounded-full flex justify-center items-center border-2 border-black py-4 px-8 text-black">
              Documentation
              <ArrowRightIcon size={21} />
            </div>
          </motion.div>
          <motion.div
            animate={{
              x: [-100, 0],
              y: [-100, 0],
              opacity: [0, 1],
              transition: {
                delay: 3,
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                ease: ["easeInOut"],
              },
            }}
          >
            <div className="drop-shadow-xl group gap-4 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 hover:text-white duration-300 rounded-full flex justify-center items-center bg-white px-8 py-4">
              Getstared
              <ArrowRightIcon size={21} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Content;
