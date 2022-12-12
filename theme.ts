import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4683d9",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 8,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: "none",
        },
      },
    },
    // Кастомизация стилей по умолчинию для кнопки
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: "inherit",
          fontSize: 16,
          color: "#4c4c4c",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1);",
          borderRadius: "8px",
          transition: "all 0.1s linear",
          "&:hover": {
            backgroundColor: "#fff",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1);",
          },
          "&:active": {
            boxShadow:
              "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important",
            transform: "translateY(1px)",
          },
        },
        text: {
          backgroundColor: "transparent!important",
        },
        contained: {
          backgroundColor: "white",
          boxShadow:
            "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)",
          "&:hover": {
            backgroundColor: "white",
            boxShadow:
              "0 1px 1px rgb(0 0 0 / 18%), 0 4px 7px rgb(0 0 0 / 8%), 0 -1px 0 rgb(0 0 0 / 8%), -1px 0 0 rgb(0 0 0 / 8%), 1px 0 0 rgb(0 0 0 / 15%)",
          },
        },
        containedPrimary: {
          color: "#4683d9",
          "&:hover": {
            backgroundColor: "#437CCE",
            color: "white",
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
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1);",
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
