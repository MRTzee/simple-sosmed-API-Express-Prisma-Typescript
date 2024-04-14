import { NextFunction, Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorId, image, text } = req.body;

    // Validasi data
    if (!authorId || !text) {
      throw new Error("authorId and text are required");
    }

    const result = await prisma.post.create({
      data: { authorId, image, text },
    });
    res.send(result);
  } catch (error) {
    next(error);
  }
};
