import "./App.css";
import Header from "./components/header/header";
import Loader from "./components/loader/loader";
import Scene from "./components/model/model";

function App() {
  return (
    <>
      <Loader />
      <Header />
      <Scene />
    </>
  );
}

export default App;
