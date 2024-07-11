import Head from "next/head";

export const SEO = () => {
  return (
    <Head>
      <title>Unite Venture Studio</title>
      <meta
        content="Unite Venture Studio - Привлекаем инвесторов и создаем технические стартапы вместе!"
        property="og:title"
      />
      <meta
        content="Создаем, развиваем и масштабируем технические стартапы на стадии Pre-Seed, Seed с высоким потенциалом кратного роста в Туркменистане и на внешних рынках."
        property="og:description"
      />
      <meta content="/images/thumbnail.png" property="og:image" />
      <meta
        content="Unite Venture Studio - Привлекаем инвесторов и создаем технические стартапы вместе!"
        property="twitter:title"
      />
      <meta
        content="Создаем, развиваем и масштабируем технические стартапы на стадии Pre-Seed, Seed с высоким потенциалом кратного роста в Туркменистане и на внешних рынках."
        property="twitter:description"
      />
      <meta content="/images/thumbnail.png" property="twitter:image" />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
