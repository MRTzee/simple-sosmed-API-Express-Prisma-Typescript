import { NextFunction, Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = await prisma.user.findUnique({
      where: { id },
    });

    if (!result) {
      res.status(404).send("User not found");
    } else {
      res.send(result);
    }
  } catch (error) {
    next(error);
  }
};
