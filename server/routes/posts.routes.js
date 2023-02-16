import { Router } from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.controllers.js";

export const postRouter = Router();

postRouter.get("/posts", getPosts);
postRouter.get("/posts/:id", getPost);
postRouter.post("/posts", createPost);
postRouter.put("/posts/:id", updatePost);
postRouter.delete("/posts/:id", deletePost);
