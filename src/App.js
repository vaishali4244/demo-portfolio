import { Route, Routes } from "react-router-dom";
import "./App.css";
import Screen from "./screens";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Screen />} />
      </Routes>
    </>
  );
};

export default App;
