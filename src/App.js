import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title={"Texto"} />
      <TextForm heading={"Enter some text below"}/>
      {/* <About /> */}
    </>
  );
}

export default App;
