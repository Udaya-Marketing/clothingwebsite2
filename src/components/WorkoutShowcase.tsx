"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const portrait = (id: string, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export function WorkoutShowcase() {
  const section = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "end start"] });
  const ghostX = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  const leftY = useTransform(scrollYProgress, [0, 1], [28, -35]);
  const centerY = useTransform(scrollYProgress, [0, 1], [16, -24]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-20, 32]);
  return (
    <section ref={section} className="workout-section" aria-labelledby="workout-title">
      <motion.h2 id="workout-title" className="ghost-word" style={{ x: reduce ? 0 : ghostX }}>WORKOUT</motion.h2>
      <div className="workout-layout">
        <motion.figure className="workout-photo workout-left" style={{ y: reduce ? 0 : leftY }}><Image src={portrait("photo-1517836357463-d25dfeac3438")} alt="Runner preparing for a training session outdoors" width={640} height={820} sizes="(max-width: 700px) 65vw, 27vw" /><figcaption>01 / BUILT TO REPEAT</figcaption></motion.figure>
        <motion.figure className="workout-photo workout-center" style={{ y: reduce ? 0 : centerY }}><Image src={portrait("photo-1518611012118-696072aa579a", 1100)} alt="Athlete stretching after a focused workout" width={880} height={1100} sizes="(max-width: 700px) 78vw, 38vw" /><figcaption>02 / FIND YOUR PACE</figcaption></motion.figure>
        <motion.figure className="workout-photo workout-right" style={{ y: reduce ? 0 : rightY }}><Image src={portrait("photo-1518611012118-696072aa579a")} alt="Athlete stretching after a focused workout" width={640} height={820} sizes="(max-width: 700px) 65vw, 27vw" /><figcaption>03 / RECOVERY COUNTS</figcaption></motion.figure>
      </div>
      <p className="workout-note">THE BEST KIT IS THE ONE<br />THAT KEEPS YOU GOING.</p>
    </section>
  );
}
