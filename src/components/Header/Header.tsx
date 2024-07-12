"use client";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";

import styles from "./Header.module.scss";

const languages = ["ru", "en", "tm"];

type Props = {
  children: React.ReactNode;
  logo: string;
};

const Header: FC<Props> = ({ children, logo }) => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState({
    menu: false,
    lang: false,
  });
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);

  const y = useTransform(scrollYBounded, [0, 100], [0, -100]);

  useEffect(() => {
    return scrollY.on("change", (current) => {
      const previous = scrollY.getPrevious();
      const diff = current - Number(previous);
      const newValue = Math.min(Math.max(0, scrollYBounded.get() + diff), 100);
      scrollYBounded.set(newValue);
    });
  }, [scrollY, scrollYBounded]);

  const handleLangClick = async (lang: string) => {
    if (isOpen.lang) {
      const cleanPathname = router.pathname.split("#")[0];
      const cleanAsPath = router.asPath.split("#")[0];
      await i18n.changeLanguage(lang);
      router.push(cleanPathname, cleanAsPath, { locale: lang });
      setIsOpen({ menu: false, lang: false });
    } else {
      setIsOpen({ ...isOpen, lang: true });
    }
  };

  const closeMenu = () => {
    setIsOpen({ menu: false, lang: false });
  };

  useEffect(() => {
    document.addEventListener("closeMenu", closeMenu);

    return () => {
      document.removeEventListener("closeMenu", closeMenu);
    };
  }, []);

  return (
    <motion.header className={styles.header} style={{ y }}>
      <Image
        className={styles.logo}
        src={logo}
        alt="logo"
        width={120}
        height={48}
        priority
      />
      <button
        className={styles.button}
        onClick={() => setIsOpen({ ...isOpen, menu: true })}
      >
        {t("menu")}
      </button>
      <div
        className={classNames(styles.overlay, { [styles.open]: isOpen.menu })}
        onClick={() => setIsOpen({ ...isOpen, menu: false })}
      />
      <div className={classNames(styles.menu, { [styles.open]: isOpen.menu })}>
        {children}
        <div className={styles.top}>
          <div
            className={classNames(styles.languages, {
              [styles.open]: isOpen.lang,
            })}
          >
            {languages.map((lang) => (
              <button
                className={classNames(styles.lang, {
                  [styles.active]: lang === i18n.language,
                })}
                key={lang}
                onClick={() => handleLangClick(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
          <button className={styles.button} onClick={closeMenu}>
            {t("close")}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
