import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/public-sans";
import FolderPage from "~/pages/folder";
import AppProvider from "~/app-provider";
import BookmarkGrid from "~/components/bookmark-grid";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <BookmarkGrid />,
    children: [{ path: "*", Component: FolderPage }],
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
