import { FC } from "react";
import LoginForm from "./loginForm";
import SignUpForm from "./SignUpForm";
import styles from "./styles.module.css";
interface Props {}

const LoginAndSignUp: FC<Props> = (props): JSX.Element => {
  return (
    <>
      <LoginForm />
      <div className={styles.line}></div>
      <SignUpForm />
    </>
  );
};

export default LoginAndSignUp;
