import Link from "next/link";
import { useTranslation } from "react-i18next";

import { links } from "@public/data";

import styles from "./Navigation.module.scss";


export const Navigation = () => {
  const { t } = useTranslation("common");

  return (
    <nav className={styles.navigation}>
      {links.map((link) => (
        <Link
          className={styles.link}
          href={`#${link}`}
          key={link}
          onClick={() => document.dispatchEvent(new CustomEvent("closeMenu"))}
        >
          {t(link)}
        </Link>
      ))}
    </nav>
  );
};
