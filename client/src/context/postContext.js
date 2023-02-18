import { createContext, useState, useContext } from "react";

const context = createContext();

export const usePosts = () => {
  const myContext = useContext(context)
  return myContext
}

function PostProvider({ children }) {
  const [post, setPost] = useState([]);

  return (
    <context.Provider
      value={{
        post,
        setPost,
        hehe: "hehe"
      }}
    >
      {children}
    </context.Provider>
  );
}

export default PostProvider;
