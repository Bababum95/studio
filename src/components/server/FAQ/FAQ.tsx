import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";

import styles from "./FAQ.module.scss";
import Link from "next/link";

const FAQItem = dynamic(() => import("../../FAQItem/FAQItem"), { ssr: false });

export const FAQ = () => {
  const { t } = useTranslation("common");
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <FAQItem
          question={t("what-does-your-studio-do")}
          answer={t("what-does-your-studio-do-answer")}
        />
      </li>
      <li className={styles.item}>
        <FAQItem
          question={t("how-can-we-start-working-with-you")}
          answer={
            <>
              {t("to-start-cooperation")}{" "}
              <Link href="#contacts">{t("contact-us")}.</Link>{" "}
              {t(
                "we-can-meet-face-to-face-or-online-to-discuss-a-model-of-cooperation"
              )}
            </>
          }
        />
      </li>
      <li className={styles.item}>
        <FAQItem
          question={t("what-benefits-will-i-get-by-partnering-with-you")}
          answer={
            <>
              {t("investor")}:
              <ul>
                <li>{t("what-benefits-will-i-get-by-partnering-with-you-investor")}</li>
              </ul>
              {t("startup")}:
              <ul>
                <li>{t("what-benefits-will-i-get-by-partnering-with-you-startup")}</li>
              </ul>
              {t("idea")}:
              <ul>
                <li>{t("what-benefits-will-i-get-by-partnering-with-you-idea")}</li>
              </ul>
            </>
          }
        />
      </li>
      {Array.from({ length: 11 }, (_, i) => (
        <li key={i} className={styles.item}>
          <FAQItem
            question={t(`question-${i + 1}`)}
            answer={t(`answer-${i + 1}`)}
          />
        </li>
      ))}
    </ul>
  );
};
