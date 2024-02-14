import logo from "./logo.svg";
import Parent from "./components/Parent";
import "./App.css";
import { createContext } from "react";
import Cards2 from "./components/Cards2";
import ApiFetch from "./components/ApiFetch";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
const Firstname = createContext();
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="about" Component={About}></Route>
          <Route path="contact" Component={Contact}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
export { Firstname };
