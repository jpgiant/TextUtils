import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import About from "./components/About";
import React, {useState} from "react";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#0d0739';
      showAlert(" Dark Mode has been enabled", "success")
      // document.title='Texto (Dark Mode)'
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert(" Light Mode has been enabled", "success")
      // document.title='Texto (Light Mode)'

    }
  }
  return (
    <>
      <Navbar title={"Texto"} mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert}/>
      <TextForm heading={"Enter some text below"} mode={mode} showAlert={showAlert}/>
      {/* <About /> */}
    </>
  );
}

export default App;
