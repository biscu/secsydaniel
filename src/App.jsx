import "./App.css";
import Spline from "@splinetool/react-spline";
import Header from "./components/header/header";
import Loader from "./components/loader/loader";

function App() {
  return (
    <>
      <Loader />
      <div className="mask">
        <Spline scene="https://prod.spline.design/pbzHApcUvKnfcq1r/scene.splinecode" />
      </div>
      <Header />
    </>
  );
}

export default App;
