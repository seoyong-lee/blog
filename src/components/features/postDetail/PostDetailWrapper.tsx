import { ReactNode } from "react";

const PostDetailWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col max-w-[780px] min-h-screen w-full h-full lg:py-0 pt-12">
      {children}
    </section>
  );
};

export default PostDetailWrapper;
