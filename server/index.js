import { app } from "./app.js";
import { dbConnection } from "./db.js";
import { PORT } from "./config.js";


dbConnection()
app.listen(PORT, () => {
  console.log(`Listening in PORT ${PORT}`);
});
