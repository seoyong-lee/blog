import MDEditor from "@uiw/react-md-editor";
import { useEffect, useRef, useState } from "react";
import { Head } from "~/components/shared/Head";

import Markdown from "react-markdown";

import { useRecoilState, useSetRecoilState } from "recoil";
import { showHeaderAtom, themeStateAtom } from "~/recoil/common";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import { useFirestore } from "~/lib/firebase";
import { addPost, getPostByPostId, updatePost } from "~/services/post";
import { Post } from "~/types/scheme";
import { multilineToSingleline, singlelineToMultiline } from "~/utils/markdown";
import { showToastStateAtom, toastTextStateAtom } from "~/recoil/toast";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { customAlphabet } from "nanoid";
import { isLoginStateAtom } from "~/recoil/user";

function PageEdit() {
  const pathname = useLocation().pathname;
  const postId = pathname.split("/edit/")?.[1];
  const navigate = useNavigate();
  const db = useFirestore();
  const storage = getStorage();

  const [isLogin] = useRecoilState(isLoginStateAtom);
  const [theme] = useRecoilState(themeStateAtom);
  const setShowHeader = useSetRecoilState(showHeaderAtom);
  const setIsShowToast = useSetRecoilState(showToastStateAtom);
  const setToastText = useSetRecoilState(toastTextStateAtom);

  const [post, setPost] = useState<Post>();
  const [markdownValue, setMarkdownValue] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [imgDesc, setImgDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [isImgChange, setIsImgChange] = useState(false);

  const imgRef = useRef<HTMLInputElement | null>(null);

  const generateId = customAlphabet("1234567890", 10);

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

  const saveImgFile = () => {
    const file = imgRef?.current?.files?.[0];
    const reader = new FileReader();
    if (file) {
      setIsImgChange(true);
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgUrl(reader?.result as string);
      };
    }
  };

  const date = dayjs().format("MMMM DD, YYYY");

  const getPostData = async () => {
    if (!postId) {
      return;
    }

    const postData = await getPostByPostId(db, postId);

    setPost(postData?.[0]);
  };

  const handleClickBack = () => {
    setShowHeader(true);
    if (post?.isPublic) {
      navigate("/");
    } else {
      navigate("/temporary");
    }
  };

  const handleClickSave = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    if (postId) {
      if (isImgChange) {
        try {
          fetch(imgUrl).then((res) => {
            const metadata = {
              contentType:
                res?.url?.split(";")?.[0]?.split(":")?.[1] ?? "image/jpeg",
            };
            res.blob().then(async (url) => {
              const storageRef = ref(storage, `/thumbnails/${postId}`);
              const res = await uploadBytes(storageRef, url, metadata);
              const photoUrl = await getDownloadURL(res?.ref);

              {
                const post = {
                  id: postId,
                  title: title,
                  desc: "",
                  text: multilineToSingleline(markdownValue),
                  author: {
                    name: "Drew Lee",
                  },
                  imgUrl: photoUrl,
                  deleted: false,
                  isPublic: false,
                  updatedAt: Date.now(),
                } as Post;

                await updatePost(db, post);

                setIsShowToast(true);
                setToastText("저장완료!");
                setLoading(false);
              }
            });
          });
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
          setIsImgChange(false);
        }
      } else {
        try {
          const post = {
            id: postId,
            title: title,
            desc: "",
            text: multilineToSingleline(markdownValue),
            author: {
              name: "Drew Lee",
            },
            deleted: false,
            isPublic: false,
            updatedAt: Date.now(),
          } as Post;

          await updatePost(db, post);

          setIsShowToast(true);
          setToastText("저장완료!");
          setLoading(false);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      }
    } else {
      const newPostId = generateId();

      try {
        fetch(imgUrl).then((res) => {
          const metadata = {
            contentType:
              res?.url?.split(";")?.[0]?.split(":")?.[1] ?? "image/jpeg",
          };
          res.blob().then(async (url) => {
            const storageRef = ref(storage, `/thumbnails/${newPostId}`);
            const res = await uploadBytes(storageRef, url, metadata);
            const photoUrl = await getDownloadURL(res?.ref);

            {
              const post = {
                id: newPostId,
                title: title,
                desc: "",
                text: multilineToSingleline(markdownValue),
                author: {
                  name: "Drew Lee",
                },
                imgUrl: photoUrl,
                deleted: false,
                isPublic: false,
                createdAt: Date.now(),
                updatedAt: Date.now(),
              } as Post;

              await addPost(db, post);

              setIsShowToast(true);
              setToastText("저장완료!");
              setLoading(false);
              navigate("/edit/" + newPostId);
            }
          });
        });
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    setShowHeader(false);
    getPostData();
  }, [postId]);

  useEffect(() => {
    if (!post) {
      return;
    }
    setImgUrl(post?.imgUrl ?? "");
    setTitle(post?.title ?? "");
    setMarkdownValue(singlelineToMultiline(post?.text) ?? "");
  }, [post]);

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  return (
    <>
      <Head title={"Editor"}></Head>
      <footer className="fixed bottom-0 h-20 w-full bg-base-300 z-10 flex justify-between place-items-center px-10">
        <button
          className="btn btn-active btn-neutral"
          onClick={handleClickBack}
        >
          나가기
        </button>
        <div className="flex gap-3">
          <button className="btn btn-primary" onClick={handleClickSave}>
            임시저장
          </button>
          <button className="btn btn-success">수정하기</button>
        </div>
      </footer>
      <div className="flex flex-col w-screen px-4 sm:px-10 py-0 h-full">
        <div className="w-full py-12 grid grid-cols-2 gap-8 h-full overflow-y-hidden">
          <div>
            <div className="label">
              <span className="label-text">포스트 제목</span>
            </div>
            <input
              type="text"
              placeholder="Post Title"
              className="input input-bordered w-full max-w-xs mb-1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="label">
              <span className="label-text">포스트 이미지</span>
            </div>
            <input
              ref={imgRef}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs mb-1"
              onChange={saveImgFile}
            />
            <div className="label">
              <span className="label-text">이미지 출처</span>
            </div>
            <input
              type="text"
              placeholder="Post Title"
              className="input input-bordered w-full max-w-xs mb-5"
              value={imgDesc}
              onChange={(e) => setImgDesc(e.target.value)}
            />
            <MDEditor
              height={780}
              preview="edit"
              value={markdownValue}
              onChange={setMarkdownValue}
            />
          </div>
          <div className="w-full h-full mt-8 overflow-y-scroll border border-gray-700 p-10">
            <div className="flex flex-col place-items-center pt-0">
              <h1 className="font-bold text-3xl text-left w-full sm:text-[40px] leading-[1.3] sm:leading-[1.35]">
                {title ?? ""}
              </h1>
              <div className="mt-8 w-full">
                <button className="flex place-items-center cursor-pointer">
                  <div className="avatar mr-4">
                    <div className="w-11 rounded-full overflow-hidden">
                      <img
                        src="/me.png"
                        alt="avatar"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-[15px] place-items-start">
                    <span className="font-bold">Drew Lee</span>
                    <span>{date}</span>
                  </div>
                </button>
              </div>
            </div>
            <section className="my-10 mb-20 w-full h-full">
              <figure>
                <picture>
                  {imgUrl && (
                    <img
                      src={imgUrl}
                      alt="post main img"
                      className="object-cover md:rounded-xl max-h-[16rem] sm:max-h-[24rem] w-full h-full"
                    />
                  )}
                </picture>
                <figcaption className="mt-4 text-center text-[12px] sm:text-[14px] text-secondary">
                  {imgDesc}
                </figcaption>
              </figure>
              <div className="w-full flex justify-center mt-9 h-full">
                <Markdown
                  className="prose w-full max-w-none box-content prose-pre:bg-transparent prose-code:bg-transparent prose-pre:px-0 prose-pre:py-0"
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
                  {markdownValue}
                </Markdown>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageEdit;
