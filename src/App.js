import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
