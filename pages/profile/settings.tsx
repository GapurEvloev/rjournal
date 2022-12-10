import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import { MainLayout } from "../../layouts/MainLayout";

export default function Settings() {
  return (
    <MainLayout hideComments>
      <Paper className="p-5" elevation={0}>
        <Typography variant="h6">Main settings</Typography>
        <Divider className="mt-5 mb-8" />
        <form>
          <TextField
            className="mb-5"
            size="small"
            label="nickname"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            className="mb-5"
            size="small"
            label="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            size="small"
            label="password"
            variant="outlined"
            fullWidth
            required
          />
          <Divider className="mt-8 mb-5" />
          <Button color="primary" variant="contained">
            Save changes
          </Button>
        </form>
      </Paper>
    </MainLayout>
  );
}
