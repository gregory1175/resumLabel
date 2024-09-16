import { Route, Routes } from "react-router-dom";
import BasePage from "./components/BasePage/base-page";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<BasePage />}></Route>
    </Routes>
  );
}

export default App;
