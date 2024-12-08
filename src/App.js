import logo from "./logo.svg";
import "./App.css";
import Header from "./header/Header";
import Main from "./Pages/Main";
import ProjectDetails from "./component/ProjectDetails";
import { Route, Routes } from "react-router-dom";
import { DiVim } from "react-icons/di";
function App() {
  return (
    <div>
    
    
    <Routes>
      <Route  path="/" element={<Main />} />
      <Route path="/productdetails/:id" element={<ProjectDetails />} />
    </Routes>
    </div>
  );
}

export default App;
