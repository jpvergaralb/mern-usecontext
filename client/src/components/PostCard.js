import { toast } from "react-hot-toast";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";


function PostCard({ post }) {

  const navigate = useNavigate()
  const { deletePost } = usePosts();

  const handleDelete = (post) => {
    toast(
      (t) => (
        <div>
          <p>
            {" "}
            Are you sure you want to delete post <code> {post._id}</code>?{" "}
          </p>
          <div className="mt-2 flex justify-evenly text-slate-200">
            <button
              className="rounded-md bg-red-500 px-2 py-1"
              onClick={() => {
                deletePost(post._id);
                toast.dismiss(t.id);
                toast.success(`Post ${post._id} deleted!`)
              }}
            >
              {" "}
              I'm sure{" "}
            </button>
            <button
              className="rounded-md bg-slate-700 px-2 py-1"
              onClick={() => {
                toast.dismiss(t.id);
              }}
            >
              {" "}
              No, take me back{" "}
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#DDDADA",
        },
      }
    );
  };

  return (
    <div className="m-2 rounded-sm bg-dev-to-bg px-4 py-7 shadow-lg hover:cursor-pointer hover:bg-gray-800"
    onClick={()=>navigate(`/posts/${post._id}`)}>
      <div className="flex justify-between">
        <h3> {post.title} </h3>
        
        <button
          className="rounded-md bg-gray-800 px-2 text-sm shadow-md hover:bg-indigo-400 hover:font-bold hover:text-indigo-800"
          onClick={(e) => {
            e.stopPropagation()
            handleDelete(post)
          }}
        >
          Delete
        </button>
      </div>
      <p> {post.description} </p>
      {post.image && <img src={post.image.url} className="object-contain w-full h-full p-0  "/>}
      
    </div>
  );
}

export default PostCard;
