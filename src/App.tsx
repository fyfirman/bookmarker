import AppProvider from "./app-provider";
import Home from "./pages/home";
import "@fontsource/public-sans";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
