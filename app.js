const createDiv = (className) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  return div;
};

const main = () => {
  const root = document.getElementById("root"),
    canvas = createDiv("canvas");

  root.appendChild(canvas);
};

main();
