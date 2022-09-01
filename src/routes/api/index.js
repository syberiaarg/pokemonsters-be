import { Router } from "express";
import userRoute from "./user";

const routes = [
  {
    path: "/user",
    route: userRoute,
  },
];

export default (router) => {
  routes.forEach(({ path, route }) => {
    router.use(path, route(Router()));
  });

  return router;
};
