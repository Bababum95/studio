"use client";
import { FC, useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import styles from "./AnimatedNumber.module.scss";

type Props = {
  value: number;
  direction?: "up" | "down";
};

const AnimatedNumber: FC<Props> = ({ value, direction = "up" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 80,
    stiffness: 120,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  return <span className={styles.number} ref={ref} />;
};

export default AnimatedNumber;
