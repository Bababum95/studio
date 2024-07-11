'use client';
import Lottie from "lottie-react";
import { FC } from "react";

import styles from "./LottieAnimation.module.scss";

type Props = {
  animationData: unknown;
};

const LottieAnimation: FC<Props> = ({ animationData }) => {
  return <Lottie className={styles.lottie} animationData={animationData} loop={true} />;
};

export default LottieAnimation;
