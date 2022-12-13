import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "./AuthDialog.module.scss";
import { MainForm } from "./forms/Main";
import { LoginForm } from "./forms/Login";
import { RegisterForm } from "./forms/Register";

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<"main" | "login" | "register">(
    "main"
  );

  return (
    <Dialog open={visible} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === "main" ? (
                "Log in to TJ"
              ) : (
                <p
                  onClick={() => setFormType("main")}
                  className={styles.backTitle}
                >
                  <ArrowBackIcon /> To authorization
                </p>
              )}
            </Typography>
            {formType === "main" && (
              <MainForm onOpenLogin={() => setFormType("login")} />
            )}
            {formType === "login" && (
              <LoginForm onOpenRegister={() => setFormType("register")} />
            )}
            {formType === "register" && (
              <RegisterForm
                onOpenRegister={() => setFormType("register")}
                onOpenLogin={() => setFormType("login")}
              />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
