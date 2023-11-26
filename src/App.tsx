import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/public-sans";
import Home from "~/pages/home";
import FolderPage from "~/pages/folder";
import AppProvider from "~/app-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
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
