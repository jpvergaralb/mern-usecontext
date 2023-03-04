import { createContext, useState, useContext } from "react";
import {
  getPostsRequest,
  createPostRequest,
  deletePostRequest,
  getPostRequest,
  updatePostRequest
} from "../api/posts";
import { useEffect } from "react";

const context = createContext();

export const usePosts = () => {
  const myContext = useContext(context);
  return myContext;
};

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await getPostsRequest();
    const data = await response.data;
    setPosts(data);
  };

  const getPost = async (id) => {
    const post = await getPostRequest(id)
    return post.data
  }

  const createPost = async (post) => {
    const createdPost = await createPostRequest(post);
    setPosts([...posts, createdPost.data]);
  };

  const deletePost = async (id) => {
    const deletedPost = await deletePostRequest(id);

    if (deletedPost.status === 200) {
      setPosts(
        posts.filter((post) => {
           return post._id !== id;
        })
      );
    }
  };
  const updatePost = async (id, post) => {
    const updatedPost = await updatePostRequest(id, post)
    setPosts(posts.map((post) => {
      return post._id === id ? updatedPost.data : post
    }))

  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <context.Provider
      value={{
        posts,
        setPosts,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost
      }}
    >
      {children}
    </context.Provider>
  );
}

export default PostProvider;
