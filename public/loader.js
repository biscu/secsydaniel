window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

Pace.on("done", function () {
  console.log("LOADED");
});

// backSplit();
// upSplit();
// runBrush();
