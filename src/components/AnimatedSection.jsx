"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

/**
 * Conteneur qui révèle son contenu en douceur lors du défilement.
 * Animation discrète (fade + léger glissement), une seule fois.
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
