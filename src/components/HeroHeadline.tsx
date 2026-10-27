"use client";

import { motion, useReducedMotion } from "framer-motion";

const lineVariants = {
  hidden: { opacity: 0, y: 30, scale: .99 },
  show: { opacity: 1, y: 0, scale: 1 }
};

export function HeroHeadline() {
  const reduce = useReducedMotion();
  return (
    <motion.h1
      id="hero-title"
      aria-label="Gear up every season, every workout"
      initial={reduce ? false : "hidden"}
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: .16 } } }}
    >
      <motion.span variants={lineVariants} transition={{ duration: .8, ease: [.22, 1, .36, 1] }}>GEAR UP</motion.span>
      <motion.span variants={lineVariants} transition={{ duration: .8, ease: [.22, 1, .36, 1] }}>EVERY SEASON</motion.span>
      <motion.span className="hero-ghost-line" variants={lineVariants} transition={{ duration: .8, ease: [.22, 1, .36, 1] }}>EVERY WORKOUT.</motion.span>
    </motion.h1>
  );
}
