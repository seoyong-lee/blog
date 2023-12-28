import { useWindowSize } from "../hooks/useWindowSize";

const Loading = () => {
  const { height } = useWindowSize();
  return (
    <p
      className="p-4 w-full flex h-full flex-col justify-center place-items-center"
      style={{ minHeight: height / 2 }}
    >
      <span className="loading loading-dots loading-lg"></span>
    </p>
  );
};

export default Loading;
