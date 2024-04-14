import express from "express";
import { getUsers } from "../controllers/users/getUsers";
import { getUser } from "../controllers/users/getUser";
import { updateUser } from "../controllers/users/updateUser";
import { getPostByUser } from "../controllers/users/getPostsByUser";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.get("/:id/posts", getPostByUser);
router.put("/:id", updateUser);

export default router;
