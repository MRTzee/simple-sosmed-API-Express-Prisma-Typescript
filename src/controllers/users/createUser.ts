import { NextFunction, Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const validate = await prisma.user.findFirst({ where: { email } });

    // validasi email
    if (email) {
      if (validate) {
        throw new Error("Email already exist");
      }
    }

    // Validasi data
    if (!name || !email || !password) {
      throw new Error("Name, email, and password are required");
    }

    const result = await prisma.user.create({
      data: { ...req.body },
    });
    res.send(result);
  } catch (error) {
    next(error);
  }
};
