import { QueryClientProvider } from "@tanstack/react-query";
import { CssVarsProvider } from "@mui/joy/styles";
import { queryClient } from "~/utils/query-client";
import theme from "./utils/theme";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <CssVarsProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CssVarsProvider>
  );
};

export default AppProvider;
