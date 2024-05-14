import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material";

export const tokens = (mode: string) => ({
  ...(mode === "dark"
    ? {
        primary: {
          DEFAULT: "#654D37",
          100: "#4B2504",
          200: "#A7652B",
          300: "#E4A975",
          400: "#E4C2A4",
        },
        secondary: {
          DEFAULT: "#223B3D",
          dark: "#032A2D",
          light: "#1B5F66",
        },
        black: {
          DEFAULT: "#000000",
          100: "#262626",
          200: "#4C4C4C",
          300: "#737373",
          400: "#999999",
          500: "#C0C0C0",
          600: "#E6E6E6",
          700: "#F2F2F2",
          800: "#F7F7F7",
          900: "#FFFFFF",
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "#F7F7F7",
          200: "#E0E0E0",
          300: "#CCCCCC",
          400: "#B3B3B3",
          500: "#999999",
          600: "#808080",
          700: "#666666",
          800: "#4D4D4D",
          900: "#333333",
        },
        gray: {
          DEFAULT: "#3C3C3C",
        },
        accentMain: "#0F0E0E",
        borderColor: "#3C3C3C",
        blue: "#1900D5",
      }
    : {
        white: {
          DEFAULT: "#FFFFFF",
          100: "#F7F7F7",
          200: "#E0E0E0",
        },
        primary: {
          DEFAULT: "#654D37",
          100: "#4B2504",
          200: "#A7652B",
          300: "#E4A975",
          400: "#E4C2A4",
        },
        secondary: {
          DEFAULT: "#223B3D",
          dark: "#032A2D",
          light: "#1B5F66",
        },
        black: {
          DEFAULT: "#1A1A1A",
          100: "#333333",
          200: "#4D4D4D",
          300: "#666666",
          400: "#808080",
          500: "#999999",
          600: "#B3B3B3",
          700: "#CCCCCC",
          800: "#E6E6E6",
          900: "#F2F2F2",
        },
        gray: {
          DEFAULT: "#3C3C3C",
        },
        accentMain: "#FFFFFF",
        borderColor: "#D1D1D1",
        blue: "#1900D5",
      }),
});

export const themeSettings: any = (mode: string) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary.DEFAULT,
            },
            secondary: {
              main: colors.secondary.DEFAULT,
            },
            neutral: {
              dark: colors.black[500],
              light: colors.white[100],
            },
          }
        : {
            primary: {
              main: colors.primary.DEFAULT,
            },
            secondary: {
              main: colors.secondary.DEFAULT,
            },
            neutral: {
              dark: colors.black[500],
              light: colors.white[100],
            },
          }),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40,
        fontWeight: 600,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 35,
        fontWeight: 600,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 30,
        fontWeight: 500,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 25,
        fontWeight: 500,
      },
      span: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
      },
    },
  };
};

export const ColorModeContext = createContext<{ toggleColorMode: () => void }>({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme: any = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
