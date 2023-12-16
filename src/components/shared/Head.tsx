import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description?: string;
};

export const Head = ({ title, description }: Props) => (
  <Helmet>
    <title>{`${title} | Drew.log`}</title>
    <meta name="description" content={description ?? "drew's blog"} />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <meta property="og:title" content={`${title} | Drew.log`} />
    <meta property="og:description" content={description ?? "drew's blog"} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.drewww.dev/" />

    <meta property="og:image" content="/assets/og.png" />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="400" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="original" data-rh="true" />
    <meta name="twitter:description" content={description ?? "drew's blog"} />
    <meta name="twitter:site" content="https://www.drewww.dev/" />
    <meta name="twitter:image" content="/assets/og.png" />
  </Helmet>
);
