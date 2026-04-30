import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <BrowserRouter basename={basename}>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
