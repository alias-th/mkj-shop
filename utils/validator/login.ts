import * as Yup from "yup";

export const signupValidation = Yup.object({
  nameSignup: Yup.string()
    .required("What's your name ?")
    .min(2, "First name must be between 2 and 16 characters.")
    .max(16, "First name must be between 2 and 16 characters.")
    .matches(/^[aA-zZ]/, "Numbers and special characters are not allowed."),
  emailSignup: Yup.string()
    .required("You'll need this when you log in and if you ever need to reset your password.")
    .email("Enter a valid email address."),
  passwordSignup: Yup.string()
    .required(
      "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
    )
    .min(6, "Password must be atleast 6 characters.")
    .max(36, "Password can't be more than 36 characters"),
  confirmPasswordSignup: Yup.string()
    .required("Confirm your password.")
    .oneOf([Yup.ref("passwordSignup")], "Passwords must match."),
});

export const loginValidation = Yup.object({
  emailLogin: Yup.string()
    .required("You'll need this when you log in and if you ever need to reset your password.")
    .email("Enter a valid email address."),
  passwordLogin: Yup.string()
    .required(
      "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
    )
    .min(6, "Password must be atleast 6 characters.")
    .max(36, "Password can't be more than 36 characters"),
});
