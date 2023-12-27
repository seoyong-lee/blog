const PostDetailMainImg = ({ imgUrl }: { imgUrl?: string }) => {
  if (!imgUrl) {
    return null;
  }

  return (
    <figure className="w-full mb-9">
      <picture>
        <img
          src={imgUrl}
          alt="post main img"
          className="object-cover md:rounded-xl max-h-[16rem] sm:max-h-[24rem] w-full h-full"
        />
      </picture>
      <figcaption className="mt-4 text-center text-[12px] sm:text-[14px] text-secondary">
        Photo by Gabriella Clare Marino on Unsplash
      </figcaption>
    </figure>
  );
};

export default PostDetailMainImg;
