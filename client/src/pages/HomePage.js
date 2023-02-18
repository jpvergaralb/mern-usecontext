import { usePosts } from "../context/postContext";
import { Link } from "react-router-dom";

function HomePage() {
  const { post, setPost } = usePosts();

  return (
    <div className="flex justify-evenly items-center">
      <h1> HomePage </h1>
      <Link to={'/new'}> Go to new </Link>
      <button onClick={() => {setPost([...post, [1,2,3]])}}>add Post</button>
    </div>
  );
}

export default HomePage;
