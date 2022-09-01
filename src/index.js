import express from "express";
import router from "./routes";
import cors from "cors"

const { NODE_ENV, PORT } = process.env;
const bodyParser = express.json();
const app = express();


app.use(bodyParser);
app.use(cors())
router(app);
app.listen(PORT, () => {
  console.log(`Started at port ${PORT} in ${NODE_ENV} environment`);
});
