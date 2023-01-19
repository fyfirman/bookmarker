import { extendTheme } from "@mui/joy";

const fontFamily =
  '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
const letterSpacing = "-0.5px";
const theme = extendTheme({
  components: {
    JoyTypography: {
      defaultProps: {
        level: "body1",
      },
    },
  },
  fontFamily: {
    display: fontFamily,
    body: fontFamily,
  },
  fontWeight: {},
  letterSpacing: {
    lg: letterSpacing,
    md: letterSpacing,
    sm: letterSpacing,
  },
});

export default theme;
