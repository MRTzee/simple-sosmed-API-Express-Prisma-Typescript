import { NextFunction, Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = await prisma.post.findUnique({
      where: { id },
    });

    if (!result) {
      return res.status(404).send("Post not found");
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};
