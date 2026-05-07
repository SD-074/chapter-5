import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route, Link, Outlet } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Overview from "./components/Overview";
function App() {
  const [toggle, settoggle] = useState(true);

  return (
    <>
   
      <Nav />
      <div className="">

      </div>

      <Routes>

        <Route path="/todos" element={<><Outlet /> <Todos /></>}>





        <Route path="child" element={<p>................nested todos...............</p>} />

        </Route>





        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard/>
          }
        >
          <Route path="settings" element={<Settings />} />
          <Route path="overview" element={<Overview />} />
        </Route>
      </Routes>

      {/* {toggle? <Home /> : <About />}
    <button onClick={()=> settoggle(!toggle)}>Switch components</button>
  */}

      <Footer />
    </>
  );
}

export default App;
