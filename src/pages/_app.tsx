import { AppProps } from "next/app.js";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config.js";
import "@/styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default appWithTranslation(MyApp, nextI18NextConfig);
