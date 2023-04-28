import { BrowserRouter } from "react-router-dom";
import PokeRouter from "./router/PokeRouter";

function App() {
  return (
    <BrowserRouter>
      <PokeRouter />
    </BrowserRouter>
  );
}

export default App;
