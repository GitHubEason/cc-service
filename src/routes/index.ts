import express from "express";
import testRouter from "./test";

const router = express.Router();
//TODO: test
router.use("/test", testRouter);

export = router;
