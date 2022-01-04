const createDiv = (className) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  return div;
};

const main = () => {
  const root = document.getElementById("root"),
    canvas = createDiv("canvas"),
    body = createDiv("body"),
    sideFin = createDiv("side-fin"),
    mouth = createDiv("mouth"),
    cheek = createDiv("cheek"),
    eye = createDiv("eye");

  canvas.appendChild(body);
  canvas.appendChild(sideFin);
  canvas.appendChild(mouth);
  canvas.appendChild(cheek);
  canvas.appendChild(eye);

  root.appendChild(canvas);
};

main();
