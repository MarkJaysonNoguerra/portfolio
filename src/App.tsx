import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <div className="h-screen">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/about_me" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
