import { Router } from "express";
import api from "./api";
import errorHandler from "./middleWares";

const router = (app) => {
  app.use("/api", api(Router()));
  app.use(errorHandler);
};

export default router;
