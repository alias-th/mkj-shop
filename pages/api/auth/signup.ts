import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import User from "@/models/User";
import nc from "next-connect";
import db from "../../../utils/db";
import { validateEmail } from "@/utils/validation";
import { createActivationToken } from "@/utils/token";
import { sendEmail } from "@/utils/sendEmail";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
  // console.log(req.body);
  try {
    await db.connectDb();

    const result = await sendEmail();
    console.log(result);

    await db.disconnectDb();
    return res.json({
      message: "Register success! Please activate your email to start.",
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default handler;
