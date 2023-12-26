import Markdown from "react-markdown";

import { Head } from "~/components/shared/Head";
import { getPost } from "~/services/post";
import { useFirestore } from "~/lib/firebase";
import { useLocation } from "react-router-dom";
import { Post } from "~/types/scheme";
import { useCallback, useEffect, useState } from "react";
import { Firestore } from "firebase/firestore";
import { useRecoilState, useSetRecoilState } from "recoil";
import { headerFixedStateAtom, themeStateAtom } from "~/recoil/common";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

import remarkGfm from "remark-gfm";
import Loading from "../shared/Loading";
import { singlelineToMultiline } from "~/utils/markdown";
import rehypeRaw from "rehype-raw";

const PagePostDetail = () => {
  const pathname = useLocation().pathname;
  const postId = pathname.split("/post/")?.[1];
  const db = useFirestore();

  const [theme] = useRecoilState(themeStateAtom);
  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);
  const [post, setPost] = useState<Post>();

  const getPostFromDb = useCallback(
    async (db: Firestore, postId: string) => {
      if (!db || !postId) {
        return;
      }

      const res = await getPost(db, postId);
      console.log(db);

      if (!res) {
        return;
      }

      setPost(res);
    },
    [db, postId]
  );

  useEffect(() => {
    setHeaderFixed(true);
  }, []);

  useEffect(() => {
    getPostFromDb(db, postId);
  }, [db, postId]);

  const replacedText = singlelineToMultiline(post?.text);

  const codeStyle =
    theme === "nord"
      ? nord
      : theme === "forest"
        ? darcula
        : theme === "light"
          ? base16AteliersulphurpoolLight
          : theme === "sunset"
            ? oneDark
            : theme === "winter"
              ? oneLight
              : theme === "night"
                ? nightOwl
                : nightOwl;

  return post ? (
    <>
      <Head title={"Archive"}></Head>

      <div className="flex flex-col max-w-[780px] min-h-screen w-full h-full lg:py-0 pt-12">
        <div className="flex flex-col place-items-center pt-16 px-6 sm:px-10">
          <h1 className="font-bold text-3xl text-left w-full sm:text-[40px] leading-[1.3] sm:leading-[1.35]">
            {post?.title ?? ""}
          </h1>
          <div className="mt-8 w-full">
            <button className="flex place-items-center cursor-pointer">
              <div className="avatar mr-4">
                <div className="w-11 rounded-full overflow-hidden">
                  <img src="/me.png" alt="avatar" className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col text-[15px] place-items-start">
                <span className="font-bold">Drew Lee</span>
                <span>October 24, 2023</span>
              </div>
            </button>
          </div>
        </div>

        <section className="my-10 mb-20 md:px-10 w-full h-full">
          <figure>
            <picture>
              <img
                src={post?.imgUrl}
                alt="post main img"
                className="object-contain md:rounded-xl"
              />
            </picture>
            <figcaption className="mt-4 text-center text-[12px] sm:text-[14px] text-secondary">
              Photo by Gabriella Clare Marino on Unsplash
            </figcaption>
          </figure>
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
                      style={codeStyle}
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
              {replacedText}
            </Markdown>
          </div>
        </section>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default PagePostDetail;
