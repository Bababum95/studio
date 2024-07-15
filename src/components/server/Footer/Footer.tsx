import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { links } from "@public/data";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className={styles.wrapper} id="contacts">
      <div className={styles.column}>
        <Image
          className={styles.logo}
          src="/svg/logo.svg"
          alt="logo"
          width={250}
          height={100}
        />
        <span className={styles.span}>{t("discuss-project")} &gt;</span>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.column}>
          <a className={styles.link} href="tel:+993 (65) 81-25-14">
            +993 (65) 81-25-14
          </a>
          <a className={styles.link} href="mailto:hello@unite-venture.com">
            hello@unite-venture.com
          </a>
          <div className={styles.socials}>
            <a href="#">
              <Image width={24} height={24} src="/svg/tg.svg" alt="telegram" />
            </a>
            <a href="#">
              <Image
                width={24}
                height={24}
                src="/svg/insta.svg"
                alt="instagram"
              />
            </a>
            <a href="#">
              <Image
                width={24}
                height={24}
                src="/svg/whatsapp.svg"
                alt="whatsapp"
              />
            </a>
            <a href="#">
              <Image
                width={24}
                height={24}
                src="/svg/link.svg"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
        <div className={styles.column}>
          {links.slice(0, links.length - 1).map((link) => (
            <Link className={styles.link} href={`#${link}`} key={link}>
              {t(link)}
            </Link>
          ))}
        </div>
      </nav>
    </footer>
  );
};
