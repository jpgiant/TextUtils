import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import About from "./components/About";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };


  const toggleMode = (cls) => {
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d0739";
      showAlert(" Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar title={"Texto"} mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              heading={"Enter some text below"}
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route path="about" element={<About mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
