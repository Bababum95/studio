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
        <a className={styles.span} href="mailto:hello@unite-venture.com">
          {t("discuss-project")} &gt;
        </a>
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
            <a href="https://t.me/UniteVenture">
              <Image width={24} height={24} src="/svg/tg.svg" alt="telegram" />
            </a>
            <a href="https://www.instagram.com/unite_venture_tm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <Image
                width={24}
                height={24}
                src="/svg/insta.svg"
                alt="instagram"
              />
            </a>
            <a href="https://wa.me/qr/UH5433KVFR7EO1">
              <Image
                width={24}
                height={24}
                src="/svg/whatsapp.svg"
                alt="whatsapp"
              />
            </a>
            <a href="https://www.linkedin.com/company/unite-venture/mycompany/?viewAsMember=true">
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
