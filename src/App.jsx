import Home from "./pages/Home.jsx";
import Intro from "./pages/Intro.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/pages/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
