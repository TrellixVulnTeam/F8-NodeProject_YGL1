import { router as newsRouter } from "./news";
import { router as siteRouter } from "./site";

const route = (app) => {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
};

export default route;
