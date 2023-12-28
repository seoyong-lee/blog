import { HeadMeta } from "~/components/shared/Head";
import TitleHeader from "../shared/TitleHeader";
import { Fragment, useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { headerFixedStateAtom } from "~/recoil/common";
import { postListAtom } from "~/recoil/post";
import dayjs from "dayjs";
import { Post } from "~/types/scheme";
import { useNavigate } from "react-router-dom";

interface PostByDate {
  [year: string]: { [month: string]: Post[] };
}

function PageArchive() {
  const navigate = useNavigate();

  const setHeaderFixed = useSetRecoilState(headerFixedStateAtom);
  const [posts] = useRecoilState(postListAtom);
  const [postsByDate, setPostsByDate] = useState<PostByDate>();

  const handleClickPost = (postId: string) => () => {
    navigate("/post/" + postId);
  };

  useEffect(() => {
    setHeaderFixed(true);
  }, []);

  useEffect(() => {
    if (!posts) {
      return;
    }
    const postByDate: { [year: string]: { [month: string]: Post[] } } = {};

    posts.forEach((post) => {
      const postDate = dayjs(post?.createdAt).format("YYYY/M");
      const postYear = postDate?.split("/")?.[0];
      const postMonth = postDate?.split("/")?.[1];
      if (postByDate?.[postYear]?.[postMonth]) {
        postByDate[postYear][postMonth].push(post);
      } else {
        postByDate[postYear] = { [postMonth]: [post] };
      }
    });
    setPostsByDate(postByDate);
  }, [posts]);

  return (
    <>
      <HeadMeta title={"Archive"}></HeadMeta>
      <div className="flex flex-col max-w-[780px] w-full h-full px-4 sm:px-10 lg:py-0 pt-12">
        <TitleHeader title={"Archive"} />
        <section className="px-2">
          {postsByDate ? (
            Object.keys(postsByDate).map((year) => {
              return (
                <div className="mt-6 w-full flex flex-col gap-4" key={year}>
                  <span className="text-2xl font-bold tracking-tight">
                    {year}
                    <span className="text-[14px] font-bold relative left-2 top-[-10px] opacity-60">
                      {Object.keys(postsByDate[year]).length}
                    </span>
                  </span>
                  {Object.keys(postsByDate[year])?.map((month) => {
                    return (
                      <Fragment key={year + month}>
                        <div className="mt-2 flex justify-between flex-col md:flex-row w-full gap-10">
                          <span className="text-xl font-bold tracking-tight w-[14rem]">
                            {dayjs(month).format("MMMM")}
                            <span className="text-[14px] font-bold relative left-2 top-[-7px] opacity-60">
                              {postsByDate[year][month]?.length}
                            </span>
                          </span>
                          <div className="w-full flex flex-col">
                            {postsByDate[year][month].map((post) => {
                              return (
                                <div
                                  className="mb-4 cursor-pointer"
                                  key={post.id}
                                  onClick={handleClickPost(post.id)}
                                >
                                  <h3 className="text-xl font-semibold">
                                    {post?.title}
                                  </h3>
                                  <span className="text-sm font-medium opacity-60">
                                    Date:{" "}
                                    {dayjs(post?.createdAt).format(
                                      "MMM DD, YYYY"
                                    )}{" "}
                                    | Author: {post?.author.name}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="divider w-full my-0" />
                      </Fragment>
                    );
                  })}
                </div>
              );
            })
          ) : (
            <span className="font-bold tracking-tight">준비중입니다...</span>
          )}
        </section>
      </div>
    </>
  );
}

export default PageArchive;
