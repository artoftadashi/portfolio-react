import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Art from "./pages/Art";
import AboutPage from "./pages/AboutPage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/art" element={<Art />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
