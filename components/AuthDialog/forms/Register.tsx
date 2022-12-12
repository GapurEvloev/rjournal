import React from "react";
import { setCookie } from "nookies";
import { Button } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormSchema } from "../../../utils/validations";
import { FormField } from "../../FormField";
import { UserApi } from "../../../utils/api/user";
import { CreateUserDto } from "../../../utils/api/types";
import Alert from "@mui/material/Alert";
// import { setUserData } from "../../../redux/slices/user";
// import { useAppDispatch } from "../../../redux/hooks";

interface LoginFormProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<LoginFormProps> = ({
  onOpenRegister,
  onOpenLogin,
}) => {
  // const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = React.useState("");
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      // const data = await UserApi.register(dto);
      // setCookie(null, "authToken", data.token, {
      //   maxAge: 30 * 24 * 60 * 60,
      //   path: "/",
      // });
      setErrorMessage("");
      // dispatch(setUserData(data));
    } catch (err) {
      console.warn("Register error", err);
      // if (err.response) {
      //   setErrorMessage(err.response.data.message);
      // }
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <FormField name="fullName" label="Имя и фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        {errorMessage && (
          <Alert severity="error" className="mb-5">
            {errorMessage}
          </Alert>
        )}
        <form>
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              onClick={onOpenRegister}
              type="submit"
              color="primary"
              variant="contained"
            >
              Зарегистрироваться
            </Button>
            <Button onClick={onOpenLogin} color="primary" variant="text">
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};