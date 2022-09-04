import { NewsController as newsControllers } from "../app/controllers/NewsControllers";
import express from "express";

export const router = express.Router();

router.use("/:slug", newsControllers.show);
router.use("/", newsControllers.index);
