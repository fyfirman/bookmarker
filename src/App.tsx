import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/public-sans";
import FolderPage from "~/pages/folder";
import AppProvider from "~/app-provider";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <FolderPage />,
  },
]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
