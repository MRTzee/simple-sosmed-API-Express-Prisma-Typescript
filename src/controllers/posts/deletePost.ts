import { NextFunction, Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = await prisma.post.delete({
      where: { id },
    });
    res.send(result);
  } catch (error) {
    next(error);
  }
};
