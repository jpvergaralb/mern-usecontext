import express, { json } from "express";
import { postRouter } from "./routes/posts.routes.js";

export const app = express();
app.use(express.json())
app.use(postRouter)
