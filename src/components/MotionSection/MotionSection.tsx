"use client";
import { useEffect, useRef, FC } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  start?: number;
  id?: string;
};

const MotionSection: FC<Props> = ({ children, start = 25, id }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: `-${start}%` });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      });
    }
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
        transform:
          "translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
      animate={controls}
      transition={{
        opacity: { duration: 0.6 },
        transform: { duration: 0.6 },
      }}
      id={id}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
