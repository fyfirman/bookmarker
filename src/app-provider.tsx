import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "~/utils/query-client";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppProvider;
