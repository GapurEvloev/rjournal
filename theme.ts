import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    // Кастомизация стилей по умолчинию для кнопки
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1);",
          borderRadius: "6px",
          transition: "all 0.1s linear",
          "&:hover": {
            backgroundColor: "#fff",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1);",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1);",
          transition: "all 0.1s linear",
          "&:hover": {
            backgroundColor: "#fff",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1);",
          },
        },
      },
    },
  },
});
