import { NextFunction, Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = await prisma.user.update({
      data: { ...req.body },
      where: { id },
    });
    res.send(result);
  } catch (error) {
    next(error);
  }
};
