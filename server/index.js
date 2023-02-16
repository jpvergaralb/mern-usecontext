import express from "express";
import { postRouter } from "./routes/posts.routes.js";
import { dbConnection } from "./db.js";
import { PORT } from "./config.js";

const app = express();
dbConnection()

app.use(postRouter)

app.listen(PORT, () => {
  console.log(`Listening in PORT ${PORT}`);
});
