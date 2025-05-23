"use client";

import { motion } from "motion/react";
import React from "react";
import { ChevronDown } from "lucide-react";
function NextPage() {
  return (
    <motion.div
      className="w-[50%] h-full"
      animate={{
        opacity: [0, 1],
        transition: {
          delay: 1,
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          ease: ["easeInOut"],
        },
      }}
    >
      <div className="w-[56px] h-[56px] max-md:w-[48px] max-md:h-[48px] animate-bounce bg-white rounded-full fixed bottom-4 left-[calc(50%-28px)] max-md:left-[calc(50%-24px)] shadow-2xl flex justify-center items-center">
        <ChevronDown />
      </div>
    </motion.div>
  );
}

export default NextPage;
