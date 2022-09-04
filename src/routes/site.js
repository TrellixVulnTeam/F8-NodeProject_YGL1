import express from "express";
import { SiteController } from "../app/controllers/SiteControllers";

export const router = express.Router();

router.use("/search", SiteController.search);
router.use("/", SiteController.index);
