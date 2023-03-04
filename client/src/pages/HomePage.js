import { usePosts } from "../context/postContext";
import { Link } from "react-router-dom";
import { VscEmptyWindow } from "react-icons/vsc";
import { IoIosCreate } from "react-icons/io";
import PostCard from "../components/PostCard";


function HomePage() {
  const { posts } = usePosts();

  return (
    <div>
      <div className="flex items-center justify-evenly">
        <h1> HomePage </h1>
        <header> Posts: {posts.length} </header>
        <Link to={"/new"}>
          <div className="flex items-center">
            Create a new post <IoIosCreate className="ml-2" />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-10">
        {posts.length !== 0 ? (
          posts?.map((post) => {
            return <PostCard post={post} key={post._id}/>;
          })
        ) : (
          <div className="flex h-screen items-center justify-center text-4xl">
            <VscEmptyWindow className="h-40 w-40" />
            <h1>No posts yet</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;

