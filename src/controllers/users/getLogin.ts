import { NextFunction, Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (password == user.password) {
      res.send("Login succesfull");
    } else {
      throw new Error("Incorrect password");
    }
  } catch (error) {
    next(error);
  }
};
