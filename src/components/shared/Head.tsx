import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description?: string;
};

export const Head = ({ title, description }: Props) => (
  <Helmet>
    <title>{`${title} | Drew.log`}</title>
    <meta name="description" content={description ?? "drew's blog"} />
    <meta property="og:title" content={`${title} | Drew.log`} />
    <meta property="og:description" content={description ?? "drew's blog"} />
    <meta name="robots" content="noindex" />
  </Helmet>
);
