import "./App.css";
import AppProvider from "./app-provider";
import Home from "./pages/home";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
