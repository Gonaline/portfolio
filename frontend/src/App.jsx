import { Route, Routes } from "react-router-dom";
import PageAbout from "@pages/about";
import PageProject1 from "@pages/project1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageAbout />} />
      <Route path="/about" element={<PageAbout />} />
      <Route path="/project1" element={<PageProject1 />} />
    </Routes>
  );
}

export default App;
