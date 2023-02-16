import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

export const getPost = async (req, res) => {
  const id = req.params.id
  try {
    const post = await Post.findById(id)
    if (!post) return res.status(404).json(`Post of id ${id} not found`);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const createPost = async (req, res) => {
  const { title, description, image } = req.body;
  if (!title || !description)
    return res.status(400).json("Missing fields: title or description.");
  try {
    const post = new Post({ title, description });
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updatePost = async (req, res) => {
  const { title, description, image } = req.body;
  const id = req.params.id;
  if (!title && !description && !image)
    return res
      .status(400)
      .json("Missing fields: at least update one attribute.");
  try {
    const post = await Post.findByIdAndUpdate(
      id,
      {
        title,
        description,
        image,
      },
      { new: true }
    );
    if (!post) return res.status(404).json(`Post of id ${id} not found`);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findByIdAndDelete(id, { new: true });
    if (!post) return res.status(404).json(`Post of id ${id} not found`);
    res.status(204).json({ deleted: post });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
