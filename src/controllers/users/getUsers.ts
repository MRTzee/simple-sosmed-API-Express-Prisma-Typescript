import { NextFunction, Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await prisma.user.findMany();
    res.send(result);
  } catch (error) {
    next(error);
  }
};
