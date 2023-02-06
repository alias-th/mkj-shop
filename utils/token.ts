import jwt from "jsonwebtoken";

export const createActivationToken = (payload: string) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET as string, {
    expiresIn: "2d",
  });
};