import express from "express";
import router from "./routes";
import cors from "cors";

const { NODE_ENV } = process.env;
const PORT = process.env.PORT || 3001;

const bodyParser = express.json();
const app = express();

app.use(bodyParser);
app.use(cors());

if (NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

router(app);

app.listen(PORT, () => {
  console.log(`Started at port ${PORT} in ${NODE_ENV} environment`);
});
