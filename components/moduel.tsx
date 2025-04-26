"use client";

import Spline from "@splinetool/react-spline";
import { motion } from "motion/react";
import React from "react";

function Module() {
  return (
    <motion.div
      className="w-[50%] h-full"
      animate={{
        y: [-100, 0],
        opacity: [0, 1],
        transition: {
          delay: 1,
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          ease: ["easeInOut"],
        },
      }}
    >
      <Spline scene="https://prod.spline.design/pNGWtSctDu504pOQ/scene.splinecode" />
    </motion.div>
  );
}

export default Module;
