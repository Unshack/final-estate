import { useSelector } from "react-redux";
import { dataStore } from "../../../redux/user/dataSlice";
import SingleFeedCardGrid from "../../common/page-components/SingleFeedCardGrid";

const BlogPostList = () => {
  const { currentDataItems } = useSelector(dataStore);
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {currentDataItems.map((feed) => (
        <SingleFeedCardGrid key={feed.id} {...feed} />
      ))}
    </div>
  );
};

export default BlogPostList;
