import { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";

import styles from "./FAQItem.module.scss";

const initialState = { height: 0, opacity: 0, marginTop: 0 };

type Props = {
  question: string;
  answer: string | ReactNode;
};

const FAQItem: FC<Props> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div className={styles.item} onClick={toggleOpen} initial={false}>
      <div className={styles.content}>
        <h3 className={styles.question}>{question}</h3>
        <motion.div
          initial={initialState}
          animate={
            isOpen
              ? { height: "auto", opacity: 1, marginTop: 20 }
              : initialState
          }
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
          className={styles.answer}
        >
          {answer}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQItem;
