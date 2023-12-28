import Head from "next/head";

type Props = {
  title: string;
  description?: string;
  thumbnail?: string;
  url?: string;
};

export const HeadMeta = ({ title, description, thumbnail, url }: Props) => (
  <Head>
    <title>{`${title} | Drew.log`}</title>
    <meta name="description" content={description ?? "drew's blog"} />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <meta property="og:title" content={title} />
    <meta
      property="og:description"
      content={description ? description : "drew's blog"}
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url ?? "https://www.drewww.dev/"} />

    <meta property="og:image" content={thumbnail ? thumbnail : "/og.png"} />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="400" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta
      name="twitter:description"
      content={description ? description : "drew's blog"}
    />
    <meta name="twitter:site" content={url ?? "https://www.drewww.dev/"} />
    <meta name="twitter:image" content={thumbnail ? thumbnail : "/og.png"} />
  </Head>
);
