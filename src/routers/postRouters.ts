import express from "express";
import { getPosts } from "../controllers/posts/getPosts";
import { getPost } from "../controllers/posts/getPost";
import { createPost } from "../controllers/posts/createPost";
import { updatePost } from "../controllers/posts/updatePost";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);

export default router;
