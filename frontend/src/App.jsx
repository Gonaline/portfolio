import { Route, Routes } from "react-router-dom";
import PageAbout from "@pages/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageAbout />} />
      <Route path="/about" element={<PageAbout />} />
    </Routes>
  );
}

export default App;
