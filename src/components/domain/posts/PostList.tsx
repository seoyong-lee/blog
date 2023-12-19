import { useNavigate } from "react-router-dom";
import PostItem from "./PostItem";

const PostList = () => {
  const navigate = useNavigate();

  const handleClickProfile = (author: string) => () => {
    if (author === "me") {
      navigate("/about");
    }
  };

  return (
    <div className="flex flex-col md:grid sm:grid-cols-2 gap-10 py-8 h-full">
      <PostItem onClickProfile={handleClickProfile} />
      <PostItem onClickProfile={handleClickProfile} />
    </div>
  );
};

export default PostList;
