import Image from "next/image";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const PostDetailMainImg = ({
  imgUrl,
  imgDesc,
}: {
  imgUrl?: string;
  imgDesc?: string;
}) => {
  if (!imgUrl) {
    return null;
  }

  return (
    <figure className="w-full mb-9">
      <picture>
        <Image
          src={imgUrl}
          width={300}
          height={200}
          quality={100}
          alt="post main img"
          className="object-cover md:rounded-xl max-h-[14rem] sm:max-h-[24rem] w-full h-full"
        />
      </picture>

      <figcaption className="mt-4 flex justify-center">
        <Markdown
          className="prose max-w-none text-secondary text-center text-[12px] sm:text-[14px] prose-a:text-secondary cursor-pointer"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {imgDesc}
        </Markdown>
      </figcaption>
    </figure>
  );
};

export default PostDetailMainImg;
