import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import User from "@/models/User";
import nc from "next-connect";
import db from "../../../utils/db";
import { validateEmail } from "@/utils/validation";
import { createActivationToken } from "@/utils/token";
import { sendEmail } from "@/utils/sendEmail";
import { activateEmailTemplate } from "../../../utils/template/emails";
import { signupValidateSchema, validateSchema } from "@/lib/validator";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { name, email, password, confirmPassword } = req.body;
    const user = await User.findOne({ email });

    // Validate
    if (user) {
      return res.status(400).json({
        message: "This email already exists.",
      });
    }
    const error = validateSchema(signupValidateSchema, { name, email, password, confirmPassword });
    if (error) return res.status(400).json({ message: error });

    // Add User
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: hashedPassword });
    const addedUser = await newUser.save();

    // Send Email
    const activateToken = createActivationToken({ id: addedUser._id.toString() });
    const url = `${process.env.BASE_URL}/auth/activate?token=${activateToken}`;

    const resEmail = await sendEmail(
      "jamegame01@gmail.com",
      "Activate your email!",
      url,
      activateEmailTemplate
    );

    // console.log(resEmail);

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
