import "./loader.css";

export default function Loader() {
  Pace.on("done", function () {
    const loader = document.querySelector(".loader");
    loader.classList.add("fadeOut");
    setTimeout(() => {
      loader.remove();
    }, "1000");
  });
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div className="loader">
      <div id="loader" className="loader-inner"></div>
    </div>
  );
}
