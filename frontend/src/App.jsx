import { Route, Routes } from "react-router-dom";
import PageAbout from "@pages/about";
import PageProject1 from "@pages/project1";
import PageProject2 from "@pages/project2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageAbout />} />
      <Route path="/about" element={<PageAbout />} />
      <Route path="/project" element={<PageProject1 />} />
      <Route path="/project1" element={<PageProject1 />} />
      <Route path="/project2" element={<PageProject2 />} />
    </Routes>
  );
}

export default App;
