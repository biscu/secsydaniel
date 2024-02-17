import "./App.css";
import Spline from "@splinetool/react-spline";
import Header from "./component/header";

function App() {
  return (
    <>
      <div className="loader">
        <div id="loader" className="loader-inner"></div>
      </div>
      <div className="mask">
        <Spline scene="https://prod.spline.design/pbzHApcUvKnfcq1r/scene.splinecode" />
      </div>
      <Header />
    </>
  );
}

export default App;
