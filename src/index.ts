import express, { NextFunction, Request, Response } from "express";
import postRouters from "./routers/postRouters";
import authRouters from "./routers/authRouters";
import userRouters from "./routers/userRouters";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/posts", postRouters);
app.use("/auth", authRouters);
app.use("/users", userRouters);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message);
  res.status(400).send(err.message);
});

app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});
