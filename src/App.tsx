import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import Info from "./components/Info";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Heading />
      <Info />
      <Dashboard />
    </div>
  );
};

export default App;
