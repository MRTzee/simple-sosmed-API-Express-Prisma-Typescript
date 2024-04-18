import { NextFunction, Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const { email } = req.body;
    const validate = await prisma.user.findFirst({ where: { email } });

    // validasi email
    if (email) {
      if (validate) {
        throw new Error("Email already exist");
      }
    }

    const result = await prisma.user.update({
      data: { ...req.body },
      where: { id },
    });
    res.send(result);
  } catch (error) {
    next(error);
  }
};
