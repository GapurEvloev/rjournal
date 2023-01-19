import React from "react";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "../../../utils/validations";
import { FormField } from "../../FormField";
import { LoginDto } from "../../../utils/api/types";
import { Api } from "../../../utils/api";
import { setCookie } from "nookies";
import { useAppDispatch } from "../../../redux/hooks";
import { setUserData } from "../../../redux/slices/user";

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = React.useState("");
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await Api().user.login(dto);

      setCookie(null, "rjtoken", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      setErrorMessage("");

      dispatch(setUserData(data));
    } catch (err: any) {
      console.warn("Register error", err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit((formData) =>
            onSubmit(formData as LoginDto)
          )}
        >
          <FormField name="email" label="Email" />
          <FormField name="password" label="Password" />
          {errorMessage && (
            <Alert severity="error" className="mb-5">
              {errorMessage}
            </Alert>
          )}
          <div className="flex items-center justify-between">
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              type="submit"
              color="primary"
              variant="contained"
              className="mr-4"
            >
              Log in
            </Button>
            <Button onClick={onOpenRegister} color="primary" variant="text">
              Registration
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
