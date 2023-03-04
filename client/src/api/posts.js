import axios from 'axios'

export const getPostsRequest = async () => {
  const posts = await axios.get("http://localhost:3000/posts")
  return posts
}

export const createPostRequest = async (post) => {
  const form = new FormData()

  for (let key in post){
    form.append(key, post[key])
  }

  const createdPost = await axios.post("http://localhost:3000/posts", form, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  return createdPost
}

export const deletePostRequest = async (id) => {
  const deletedPost = await axios.delete(`http://localhost:3000/posts/${id}`)
  return deletedPost
}

export const getPostRequest = async (id) => {
  const post = await axios.get(`http://localhost:3000/posts/${id}`)
  return post
}

export const updatePostRequest = async (id, newFields) => {
  const updatedPost = await axios.put(`http://localhost:3000/posts/${id}`, newFields)
  return updatedPost
}

