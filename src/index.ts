import express, { NextFunction, Request, Response } from "express";
import postRouters from "./routers/postRouters";
import authRouters from "./routers/authRouters";
import userRouters from "./routers/userRouters";

const app = express();
const cors = require("cors");
const PORT = 8000;
const corsOptions = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/posts", postRouters);
app.use("/api/auth", authRouters);
app.use("/api/users", userRouters);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message);
  res.status(400).send(err.message);
});

app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});
