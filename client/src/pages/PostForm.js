import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePosts } from "../context/postContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { set } from "mongoose";
import {AiOutlineLoading3Quarters} from "react-icons/ai"

function PostForm() {
  const navigate = useNavigate();
  const params = useParams();
  const { createPost, getPost, updatePost } = usePosts();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });

  const retrievePost = async (id) => {
    const post = await getPost(params.id);
    console.log(post);
    setPost(post);
  };
  useEffect(() => {
    if (params.id) {
      retrievePost(params.id);
    }
  }, [params.id]);

  return (
    <div className="m-5 rounded-xl bg-dev-to-bg bg-opacity-60 shadow-xl">
      <header className="flex justify-between">
        <h1 className="ml-3 p-2 text-sm text-slate-400">
          {params.id ? "Edit post" : "New post"}
        </h1>
        <Link to={"/"} className="mr-3 p-2 text-sm text-slate-400">
          go back
        </Link>
      </header>
      <Formik
        initialValues={post}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required"),
        })}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updatePost(params.id, values);
          } else {
            await createPost(values);
          }
          console.log(values)
          actions.setSubmitting = false;
          navigate("/");
        }}
        enableReinitialize={true}
      >
        {({ handleSubmit, setFieldValue, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center ">
              <label htmlFor="title" className="mt-5 text-xl text-slate-300">
                Title
              </label>
              <Field
                name={"title"}
                placeholder="Set a title"
                className="m-4 w-3/4 rounded-sm bg-gray-600 p-1 text-slate-300 focus:outline-none"
              />
              <ErrorMessage
                component={"p"}
                name={"title"}
                className="text-sm text-rose-400 "
              />
              <label
                htmlFor="description"
                className="mt-2 text-xl text-slate-300"
              >
                Description
              </label>
              <Field
                component="textarea"
                name={"description"}
                placeholder="Set a description"
                className="m-4 w-3/4 rounded-sm bg-gray-600 p-1 text-slate-300 focus:outline-none"
                rows={5}
              />
              <ErrorMessage
                component={"p"}
                name={"description"}
                className="text-s text-rose-400"
              />
              <label
                htmlFor="image"
                className="mt-2 text-xl text-slate-300"
              >
                Upload a file
              </label>
              <input type="file" name="image"className="m-4 w-3/4 text-slate-300" onChange={(e) => setFieldValue('image', e.target.files[0])}/>
              <button
                className="m-4 rounded-md bg-gh-dark p-2 text-slate-300 shadow-lg"
                type="submit"
                disabled={isSubmitting}
              >
                {" "}
                {isSubmitting ? <AiOutlineLoading3Quarters className="animate-spin"/>  : "Submit"}
                {" "}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PostForm;
