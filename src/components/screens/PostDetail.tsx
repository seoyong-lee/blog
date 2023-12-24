import { Head } from "~/components/shared/Head";
import TitleHeader from "../shared/TitleHeader";
import { getPost } from "~/services/post";
import { useFirestore } from "~/lib/firebase";
import { useLocation } from "react-router-dom";
import { Post } from "~/types/scheme";
import { useCallback, useEffect, useState } from "react";
import { Firestore } from "firebase/firestore";
import { useSetRecoilState } from "recoil";
import { headerFixedStateAtom } from "~/recoil/common";

const PagePostDetail = () => {
  const pathname = useLocation().pathname;
  const postId = pathname.split("/post/")?.[1];
  const db = useFirestore();

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

  return (
    <>
      <Head title={"Archive"}></Head>
      <div className="flex flex-col max-w-[780px] w-full h-screen px-6 sm:px-10 lg:py-0 pt-12">
        <TitleHeader title={post?.title ?? ""} />
        <section className="px-2">
          <span className="font-bold tracking-tight">준비중입니다...</span>
        </section>
      </div>
    </>
  );
};

export default PagePostDetail;
