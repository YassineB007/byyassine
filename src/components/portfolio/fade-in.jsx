"use client";

import { motion, useReducedMotion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
};

export function FadeIn({ children, className = "", delay = 0, as = "div" }) {
  const reduce = useReducedMotion();
  const Component = tags[as] ?? motion.div;

  if (reduce) {
    const Static = as === "section" ? "section" : as === "article" ? "article" : "div";
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
        margin: "120px 0px 160px 0px",
      }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={defaultVariants}
    >
      {children}
    </Component>
  );
}
