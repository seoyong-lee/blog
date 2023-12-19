const TitleHeader = ({ title }: { title: string }) => {
  return (
    <div className="pt-10 px-2 w-full">
      <h2 className="text-center sm:text-left text-[45px] font-[800] tracking-tight">
        {title}
      </h2>
    </div>
  );
};

export default TitleHeader;
