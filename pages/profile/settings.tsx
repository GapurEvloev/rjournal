import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import { MainLayout } from "../../layouts/MainLayout";
import { FormField } from "../../components/FormField";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormSchema } from "../../utils/validations";

export default function Settings() {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterFormSchema),
  });
  return (
    <MainLayout hideComments>
      <Paper className="p-5" elevation={0}>
        <Typography variant="h6">Main settings</Typography>
        <Divider className="mt-5 mb-8" />
        <FormProvider {...form}>
          <form>
            <FormField name="fullName" label="Name and surname" />
            <FormField name="email" label="Email" />
            <FormField name="password" label="Password" />

            <Divider className="mt-8 mb-5" />
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              color="primary"
              variant="contained"
            >
              Save changes
            </Button>
          </form>
        </FormProvider>
      </Paper>
    </MainLayout>
  );
}
