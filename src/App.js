import { BrowserRouter, Route } from "react-router-dom";
import { Admin } from "./layout";


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Admin} />
    </BrowserRouter>
  );
}

export default App;
