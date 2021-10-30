import logo from "./logo.svg";
import "./App.css";
import CheckBox from "./components/CheckBox";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <CheckBox />
    </div>
  );
}

export default App;
