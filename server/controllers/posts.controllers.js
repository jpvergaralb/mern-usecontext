import Post from "../models/Post.js";
import { uploadImage } from "../libs/cloudinary.js";
import { deleteImage } from "../libs/cloudinary.js";
import fs from 'fs-extra'

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (!posts) return res.status(404).json(`Posts not found.`);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error.message);
  }
  
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
  const { title, description } = req.body;
  let image = null
  if (!title || !description)
    return res.status(400).json("Missing fields: title or description.");
  try {
    if (req.files) {
      const response = await uploadImage(req.files.image.tempFilePath)
      image = {
        url: response.secure_url,
        public_id: response.public_id
      }
      await fs.remove(req.files.image.tempFilePath)
    }
    const post = new Post({ title, description, image });
    await post.save();
    res.status(201).json(post);
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
    if (post.image === "") {
      console.log("entro")
      await deleteImage(post.image.public_id)
    }
    res.status(200).json({ deleted: post });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
