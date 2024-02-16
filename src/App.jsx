import "./App.css";
import Spline from "@splinetool/react-spline";

function App() {
  return (
    <>
      <div className="loader">
        <div id="loader" className="loader-inner"></div>
      </div>
      <div className="mask">
        <Spline scene="https://prod.spline.design/pbzHApcUvKnfcq1r/scene.splinecode" />
      </div>
      <div className="info-wrapper">
        <p className="info" id="text">
          Secsy Daniel is a poliedric swedish designer with a big hairy carpet
          in the living room and olimpic medal for which he did not compete in
          any Olympic sport.
        </p>
      </div>
    </>
  );
}

export default App;
