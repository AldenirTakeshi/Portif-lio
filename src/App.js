import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <Header />
      <Main />
      <Projects />
    </div>
  );
}

export default App;
