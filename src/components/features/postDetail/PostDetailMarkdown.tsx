import { lazy } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const oneDark = lazy(
  // @ts-ignore
  () => import("react-syntax-highlighter/dist/cjs/styles/prism/one-dark")
) as unknown as {
  [key: string]: React.CSSProperties;
};
const dracula = lazy(
  // @ts-ignore
  () => import("react-syntax-highlighter/dist/cjs/styles/prism/dracula")
) as unknown as {
  [key: string]: React.CSSProperties;
};
const oneLight = lazy(
  // @ts-ignore
  () => import("react-syntax-highlighter/dist/cjs/styles/prism/one-light")
) as unknown as {
  [key: string]: React.CSSProperties;
};
const nord = lazy(
  // @ts-ignore
  () => import("react-syntax-highlighter/dist/cjs/styles/prism/nord")
) as unknown as {
  [key: string]: React.CSSProperties;
};
const darcula = lazy(
  // @ts-ignore
  () => import("react-syntax-highlighter/dist/cjs/styles/prism/darcula")
) as unknown as {
  [key: string]: React.CSSProperties;
};
const atomDark = lazy(
  // @ts-ignore
  () => import("react-syntax-highlighter/dist/cjs/styles/prism/atom-dark")
) as unknown as {
  [key: string]: React.CSSProperties;
};

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Markdown from "react-markdown";
import { useRecoilState } from "recoil";
import { themeStateAtom } from "~/recoil/common";

const PostDetailMarkdown = ({ markdown }: { markdown?: string }) => {
  const [theme] = useRecoilState(themeStateAtom);

  const getCodeStyle = (theme: string | null) => {
    switch (theme) {
      case "nord":
        return nord;
      case "forest":
        return darcula;
      case "black":
        return atomDark;
      case "sunset":
        return oneDark;
      case "winter":
        return oneLight;
      case "night":
        return dracula;
      default:
        return dracula;
    }
  };

  return (
    <div className="w-full flex justify-center px-6 mt-9">
      <Markdown
        className="prose max-w-none box-content overflow-hidden prose-pre:bg-transparent prose-code:bg-transparent prose-pre:px-0 prose-pre:py-0"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, className, style, children, ...props }) {
            const hasLang = /language-(\w+)/.exec(className || "");
            return hasLang ? (
              //@ts-ignore
              <SyntaxHighlighter
                style={getCodeStyle(theme)}
                language={hasLang[1]}
                PreTag="pre"
                className="mockup-code pt-2 prose-base bg-transparent scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded"
                showLineNumbers={true}
                useInlineStyles={true}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
};

export default PostDetailMarkdown;
