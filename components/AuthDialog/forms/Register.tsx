import React from "react";
import { setCookie } from "nookies";
import { Button } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormSchema } from "../../../utils/validations";
import { FormField } from "../../FormField";
import { CreateUserDto, LoginDto } from "../../../utils/api/types";
import Alert from "@mui/material/Alert";
import { Api } from "../../../utils/api";
import { setUserData } from "../../../redux/slices/user";
import { useAppDispatch } from "../../../redux/hooks";

interface LoginFormProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<LoginFormProps> = ({
  onOpenRegister,
  onOpenLogin,
}) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = React.useState("");
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await Api.register(dto);

      setCookie(null, "authToken", data.token, {
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
        <FormField name="fullName" label="Name and surname" />
        <FormField name="email" label="Email" />
        <FormField name="password" label="Password" />
        {errorMessage && (
          <Alert severity="error" className="mb-5">
            {errorMessage}
          </Alert>
        )}
        <form
          onSubmit={form?.handleSubmit((formData) =>
            onSubmit(formData as CreateUserDto)
          )}
        >
          <div className="flex items-center justify-between">
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              onClick={onOpenRegister}
              type="submit"
              color="primary"
              className="mr-4"
              variant="contained"
            >
              Register
            </Button>
            <Button onClick={onOpenLogin} color="primary" variant="text">
              Log in
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
