import "./App.scss";
import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import WebDevLab from "./components/WebDevLab/WebDevLab";
import PythonLab from "./components/PythonLab/PythonLab";
import CppLab from "./components/CppLab/CppLab";
import JavaLab from "./components/JavaLab/JavaLab";
import CLab from "./components/CLab/CLab";

function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-dev-lab" element={<WebDevLab />} />
          <Route path="/python-lab" element={<PythonLab />} />
          <Route path="/cpp-lab" element={<CppLab />} />
          <Route path="/java-lab" element={<JavaLab />} />
          <Route path="/c-lab" element={<CLab />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
