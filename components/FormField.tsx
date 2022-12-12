import React from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  label: string;
}

export const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  const { register, formState } = useFormContext();

  return (
    <TextField
      {...register(name)}
      name={name}
      className="mb-5"
      size="small"
      label={label}
      variant="outlined"
      error={!!formState.errors[name]?.message}
      // helperText={formState.errors[name]?.message}
      fullWidth
    />
  );
};
