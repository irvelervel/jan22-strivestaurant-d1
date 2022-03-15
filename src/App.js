import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      {/* NAVBAR COMPONENT */}
      <CustomNavbar payoff="Perfect Pasta" margin={0} />
      {/* HOMEPAGE COMPONENT */}
      <Home />
    </div>
  );
}

export default App;
