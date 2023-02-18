import { PostForm, HomePage, NotFound } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import PostProvider from "./context/postContext";

function App() {
  return (
    <div className="h-screen overflow-auto bg-gh-soft-dark font-bold text-indigo-100">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage  />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PostProvider>
    </div>
  );
}

export default App;
