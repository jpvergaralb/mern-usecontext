import { PostForm, HomePage, NotFound } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import PostProvider from "./context/postContext";
import {Toaster} from 'react-hot-toast'


function App() {
  return (
    <div className="h-screen overflow-auto bg-gh-soft-dark text-indigo-100 font-medium">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage  />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="/posts/:id" element={<PostForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </PostProvider>
    </div>
  );
}

export default App;
