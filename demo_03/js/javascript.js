// set height of the svg path as constant
const svg = document.getElementById("svgPath");
const length = svg.getTotalLength();

// start positioning of svg drawing
svg.style.strokeDasharray = length;

// hide svg before scrolling starts
svg.style.strokeDashoffset = length;

window.addEventListener("scroll", function () {
  const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  const draw = length * scrollpercent;

  // Reverse the drawing when scroll upwards
  svg.style.strokeDashoffset = length - draw;
});