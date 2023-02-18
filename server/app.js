import express, { json } from "express";
import { postRouter } from "./routes/posts.routes.js";
import fileUpload from "express-fileupload";

export const app = express();

//middlewares
app.use(express.json())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}))


app.use(postRouter)
