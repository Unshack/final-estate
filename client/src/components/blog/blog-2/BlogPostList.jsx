import { useSelector } from "react-redux";
import { dataStore } from "../../../redux/user/dataSlice";
import SingleBlogCard from "./SingleBlogCard";

const BlogPostList = () => {
  const { currentDataItems } = useSelector(dataStore);
  return (
    <div>
      <div className="mt-2">
        {currentDataItems?.map((feed) => (
          <SingleBlogCard key={feed.id} {...feed} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
