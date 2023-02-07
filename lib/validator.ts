import Joi, { ObjectSchema } from "joi";

export const errorMessages = {
  INVALID_NAME: "Name is missing!",
  INVALID_EMAIL_MISSING: "Email is missing!",
  INVALID_EMAIL: "Email is invalid!",
  INVALID_PASSWORD: "Slug is missing!",
};

export const signupValidateSchema = Joi.object().keys({
  name: Joi.string().required().messages({
    "string.empty": errorMessages.INVALID_NAME,
    "any.required": errorMessages.INVALID_NAME,
  }),
  email: Joi.string().required().email().messages({
    "string.empty": errorMessages.INVALID_EMAIL_MISSING,
    "string.email": errorMessages.INVALID_EMAIL,
    "any.required": errorMessages.INVALID_EMAIL_MISSING,
  }),
  password: Joi.string().required().messages({
    "string.empty": errorMessages.INVALID_PASSWORD,
    "any.required": errorMessages.INVALID_PASSWORD,
  }),
  confirmPassword: Joi.ref("password"),
});

export const validateSchema = (schema: ObjectSchema, value: any) => {
  const { error } = schema.validate(value, {
    errors: { label: "key", wrap: { label: false, array: false } },
    allowUnknown: true,
  });

  if (error) return error.details[0].message;

  return "";
};
