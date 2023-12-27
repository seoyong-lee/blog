import { useRecoilState } from "recoil";
import { isLoginStateAtom } from "~/recoil/user";

const PostDetailHeader = ({
  title,
  date,
  isPublic,
  onClickPublish,
  onClickEdit,
}: {
  title: string;
  date: string;
  isPublic: boolean;
  onClickPublish: () => void;
  onClickEdit: () => void;
}) => {
  const [isLogin] = useRecoilState(isLoginStateAtom);

  return (
    <div className="flex flex-col place-items-center pt-16 px-6 sm:px-10">
      <h1 className="font-bold text-3xl text-left w-full sm:text-[40px] leading-[1.3] sm:leading-[1.35]">
        {title}
      </h1>
      <div className="mt-8 w-full">
        <div className="flex place-items-center cursor-pointer">
          <div className="avatar mr-4">
            <div className="w-11 rounded-full overflow-hidden">
              <img src="/me.png" alt="avatar" className="object-contain" />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col text-[15px] place-items-start">
              <span className="font-bold">Drew Lee</span>
              <span>{date}</span>
            </div>
            {isLogin && (
              <div className="flex gap-2">
                <button
                  className="btn btn-outline btn-info"
                  onClick={onClickEdit}
                >
                  수정
                </button>
                <button
                  className="btn btn-outline btn-secondary"
                  onClick={onClickPublish}
                >
                  {isPublic ? "비공개" : "공개"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailHeader;
