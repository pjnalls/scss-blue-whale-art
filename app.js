const createDiv = (className) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  return div;
};

const main = () => {
  const root = document.getElementById("root"),
    canvas = createDiv("canvas"),
    body = createDiv("body"),
    sideFin = createDiv("side-fin");

  canvas.appendChild(body);
  canvas.appendChild(sideFin);
  
  root.appendChild(canvas);
};

main();
