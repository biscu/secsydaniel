import "./App.css";
import Header from "./components/header/header";
import Loader from "./components/loader/loader";
import Model from "./components/model/model";

function App() {
  return (
    <>
      <Loader />
      <Model />
      <Header />
    </>
  );
}

export default App;
