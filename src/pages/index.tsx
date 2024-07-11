import dynamic from "next/dynamic";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { stages, stageSections } from "@public/data";
import { Navigation, SEO } from "@/components";

import styles from "@/styles/Home.module.scss";

const LottieAnimation = dynamic(
  () => import("@/components/LottieAnimation/LottieAnimation"),
  { ssr: false }
);

const MotionSection = dynamic(
  () => import("@/components/MotionSection/MotionSection"),
  { ssr: false }
);

const AnimatedNumber = dynamic(
  () => import("@/components/AnimatedNumber/AnimatedNumber"),
  { ssr: false }
);

const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: false,
});

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <SEO />
      <Header logo="/svg/logo.svg">
        <Navigation />
      </Header>
      <main className={styles.main}>
        <MotionSection>
          <div className={styles.welcome}>
            <h1 className={styles.h1}>{t("h1")}</h1>
            <p className={styles.description}>{t("description")}</p>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            data-wf-ignore="true"
            data-object-fit="cover"
            className={styles.video}
          >
            <source
              src="/videos/video-bg.webm"
              data-wf-ignore="true"
            />
          </video>
        </MotionSection>
        <MotionSection id="what-we-do">
          <div className={styles.section}>
            <h2 className={styles.h2}>{t("what-we-do")}</h2>
            <p className={styles.text}>{t("what-we-do-text")}</p>
            <ul className={styles.list}>
              {stages.map((stage) => (
                <li className={styles.stage} key={stage}>
                  {t(stage)}
                </li>
              ))}
            </ul>
          </div>
        </MotionSection>
        <MotionSection start={30}>
          <div className={styles.images}>
            <Image
              src="/images/doing-1.jpg"
              alt="doing"
              width={753}
              height={1080}
            />
            <Image
              className={styles.horizontal}
              src="/images/doing-2.jpg"
              alt="doing"
              width={908}
              height={585}
            />
          </div>
        </MotionSection>
        <MotionSection id="how-we-do-it">
          <div className={styles.section}>
            <h2 className={styles.h2}>{t("how-we-do-it")}</h2>
            <p className={styles.text}>{t("how-we-do-it-text")}</p>
          </div>
        </MotionSection>
        {stageSections.map(({ stage, animation }, index) => (
          <MotionSection start={40} key={stage}>
            <div className={styles.process}>
              <LottieAnimation animationData={animation} />
              <div className={styles.wrapper}>
                <p className={styles.counter}>
                  0{index + 1}—{t(stage)}
                </p>
                <h3 className={styles.h3}>{t(`${stage}-title`)}</h3>
                <p className={styles.m}>{t(`${stage}-text`)}</p>
              </div>
            </div>
          </MotionSection>
        ))}
        <MotionSection start={30}>
          <div className={styles.results}>
            <h2 className={styles.h2}>{t("results")}</h2>
            <div className={styles["results-wrapper"]}>
              <div className={styles.wrapper}>
                <AnimatedNumber value={2} />
                <h3 className={styles.h3}>{t("ideas-spun-out")}</h3>
                <p className={styles.m}>{t("ideas-spun-out-text")}</p>
              </div>
              <div className={styles.wrapper}>
                <AnimatedNumber value={27} />
                <h3 className={styles.h3}>{t("ideas-killed")}</h3>
                <p className={styles.m}>{t("ideas-killed-text")}</p>
              </div>
            </div>
          </div>
        </MotionSection>
        <MotionSection start={30}>
          <div className={styles.images}>
            <Image
              className={styles.horizontal}
              src="/images/results-1.jpg"
              alt="results"
              width={908}
              height={585}
            />
            <Image
              src="/images/results-2.jpg"
              alt="results"
              width={753}
              height={1080}
            />
          </div>
        </MotionSection>
        <MotionSection id="investors">
          <h2 className={styles.h2}>{t("help")}</h2>
          <div className={styles.helps}>
            <div className={styles.help}>
              <Image
                src="/images/city.jpeg"
                alt="city"
                width={805}
                height={900}
              />
            </div>
            <div className={styles.help}>
              <Image
                src="/images/office.jpeg"
                alt="office"
                width={805}
                height={900}
              />
            </div>
          </div>
        </MotionSection>
      </main>
    </>
  );
}
