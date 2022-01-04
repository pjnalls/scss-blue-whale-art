const createDiv = (className) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  return div;
};

const main = () => {
  const root = document.getElementById("root"),
    canvas = createDiv("canvas"),
    body = createDiv("body");

  canvas.appendChild(body);
  root.appendChild(canvas);
};

main();
