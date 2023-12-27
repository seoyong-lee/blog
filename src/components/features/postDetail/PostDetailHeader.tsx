const PostDetailHeader = ({ title, date }: { title: string; date: string }) => {
  return (
    <div className="flex flex-col place-items-center pt-16 px-6 sm:px-10">
      <h1 className="font-bold text-3xl text-left w-full sm:text-[40px] leading-[1.3] sm:leading-[1.35]">
        {title}
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
            <span>{date}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PostDetailHeader;
