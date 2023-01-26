import { Sarabun } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom: PaletteOptions["primary"];
  }

  interface PaletteColor {
    secondary?: string;
    tertiary?: string;
    quaternary?: string;
  }

  interface SimplePaletteColorOptions {
    secondary?: string;
    tertiary?: string;
    quaternary?: string;
  }

  interface BreakpointOverrides {
    lgs: true;
    mds: true;
  }
}

export const sarabun = Sarabun({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
    info: {
      main: "#7579E7",
    },
    custom: {
      main: "#7579E7",
      secondary: "#9AB3F5",
      tertiary: "#A3D8F4",
      quaternary: "#B9FFFC",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: sarabun.style.fontFamily,
    htmlFontSize: 10,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      mds: 700,
      md: 900,
      lgs: 1100,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
