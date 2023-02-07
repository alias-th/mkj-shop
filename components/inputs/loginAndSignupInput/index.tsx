import { Alert, TextField } from "@mui/material";
import { useField, ErrorMessage } from "formik";
import { FC } from "react";

interface Props {
  label: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<any>) => void;
}

const LoginAndSignupInput: FC<Props> = ({ label, ...props }): JSX.Element => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField id={`outlined-${field.name}`} label={label} {...field} {...props} fullWidth />
      {meta.touched && meta.error && (
        <Alert variant="filled" severity="error">
          <ErrorMessage name={field.name} />
        </Alert>
      )}
    </>
  );
};

export default LoginAndSignupInput;
