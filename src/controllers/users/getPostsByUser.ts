import { NextFunction, Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getPostByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = await prisma.user.findFirst({
      where: { id },
      include: {
        posts: true,
      },
    });
    res.send(result);
  } catch (error) {
    next(error);
  }
};
