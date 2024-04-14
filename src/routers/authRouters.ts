import express from "express";
import { getLogin } from "../controllers/users/getLogin";
import { createUser } from "../controllers/users/createUser";

const router = express.Router();

router.get("/login", getLogin);
router.post("/register", createUser);

export default router;
